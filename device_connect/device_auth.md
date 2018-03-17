# 认证鉴权

**设备管理平台**所添加的设备信息中，认证信息作为**消息服务器 ACL 规则**的数据源，供**消息服务器**进行设备连接鉴权控制。

设备在连接到**消息服务器**时，应当使用**设备详情** -> **编码信息**中的设备编号、设备密钥、连接用户名与 MQTT 服务器地址进行连接。

对应关系如下：
- 设备编号：MQTT ClientId
- 连接用户名：MQTT Username
- 设备密钥：MQTT Password

此外平台还提供生成 [TLS/SSL 证书](../security/certs.md)进行设备连接认证。

![](/assets/device_decode.png)


**Python 客户端代码示例**

```python
# --coding: utf-8--

import paho.mqtt.client as mqtt
import json

# 设备需要在 actorcloud 平台注册
client_id = 'ce07c198187811e8a12b525440546606'
username = 'ce07c198187811e8a12b525440546606'
password = 'ce07c199187811e8a12b525440546606'
HOST = 'actorcloud.io'


def on_connect(client, userdata, flags, rc):
    print('Connected with result code ' + str(rc))
    client.subscribe(client_id)
    client.publish(client_id, json.dumps({
        'cmd': 'reboot'
    }))


# 设备控制、分组控制及其他方式 publish 的消息统一在此处理
def on_message(client, userdata, msg):
    print('from {0} received {1}'.format(msg.topic, str(msg.payload)))
    # 其他处理逻辑
    pass

# 设备务必使用用户名密码认证
client = mqtt.Client(client_id=client_id)
client.username_pw_set(username, password)

client.on_connect = on_connect
client.on_message = on_message

client.connect(HOST)

client.loop_forever()
```