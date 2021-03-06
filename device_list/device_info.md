# 设备信息

通过点击**设备**列表页设备名称，可进入设备信息页。

该页包括**设备信息**、**编码信息**、**设备事件**、**设备控制**四个页面，其功能与展示信息如下：

### 编码信息

包含有设备认证、服务器连接等信息。

1. 设备编号：设备连接 MQTT 服务器时，client\_id 即为设备编号。

2. 设备密钥：对应设备连接时 MQTT 连接密码。

3. 连接用户名：对应设备连接时 MQTT 连接用户名。

4. MQTT 服务器地址：MQTT 服务器加密、非加密连接地址。

![](/assets/device_decode.png)

> 编码信息为设备连接认证重要信息，请妥善保管。



### 设备事件

设备上行消息记录。



### 设备控制

该页展示通过**设备管理平台**向当前设备下发的信息。点击**添加指令**可向当前设备发送 JSON 格式的数据。

![](/assets/device_controller.png)
