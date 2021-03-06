# 证书

**设备管理平台**支持使用 CA 证书自签名生成设备证书，账户下生成的设备证书支持与账户下任意设备绑定并配置其可用性，所选设备使用 TLS/SSL 安全连接时应当使用已绑定证书进行加密通信。

依次点击**设备管理** -> **安全管理** -> **证书** 可进行证书的管理。

### 证书创建

输入证书名称，选择证书可用性后创建证书。创建后请立即下载并妥善保管相关证书、密钥，出于安全设计，平台后续不再提供文件下载。

![](/assets/certs_create.png)


### 绑定设备

设备使用 TLS/SSL 安全连接时应当使用已绑定证书进行加密通信，在证书详情页可以修改证书信息，管理绑定设备。

![](/assets/certs_bind.png)


### 使用指南

- 单向认证：使用端口 8883 进行 TLS/SSL 加密连接，客户端使用证书验证服务器连接合法性。
- 双向认证：使用端口 8884 进行 TLS/SSL 加密连接，客户端、服务器进行双向认证。

在使用设备编号、设备密钥、连接用户名认证的基础上，平台还可以使用设备证书与服务器进行双向认证进一步保障通信安全性。
