# 设备监控


### 连接日志

 **API 定义：**
```bash
GET dmp_api/device_connect_logs?_page=1&_limit=10
```

**成功响应：**
```json
{
  "items": [
    {
      "IP": "112.115.163.50", 
      "createAt": "2018-03-02 17:09:02", 
      "deviceID": "c4c9f031cace9a", 
      "deviceName": "共享单车_c4c9f031cace9a", 
      "deviceStatus": "2", 
      "deviceStatusLabel": "认证失败", 
      "id": 480, 
      "updateAt": null
    }
   ],
  "meta": {
    "count": 77, 
    "limit": 10, 
    "page": 1
  }
}

```

**字段说明：**

| 字段名               | 示例值                 | 字段类型    | 说明    |
| ----------------- | ------------------- | ------- | ----- |
| IP                | 112.115.163.50           | String  | 客户端 IP    |
| createAt          | 2018-03-02 17:09:02 | Date    | 创建时间  |
| deviceID          | c4c9f031cace9a      | String  | 设备编号  |
| deviceName        | 共享单车_c4c9f031cace9a | String  | 设备名称  |
| deviceStatus      | 2                   | String  | 连接状态码，0: 下线 1: 上线 2: 认证失败      |
| deviceStatusLabel | 认证失败                | String  | 连接状态描述      |
| id                | 10                 | Integer | 连接日志主键 ID |
| updateAt          |                     | Date    | 更新时间  |



### 下行消息

 **API 定义：**
```bash
GET /dmp_api/device_control_logs?_page=1&_limit=10
```

**成功响应：**
```json
{
  "items": [
    {
      "IP": "112.115.163.50", 
      "createAt": "2018-03-02 17:09:02", 
      "deviceID": "c4c9f031cace9a", 
      "deviceName": "共享单车_c4c9f031cace9a", 
      "deviceStatus": "2", 
      "deviceStatusLabel": "认证失败", 
      "id": 480, 
      "updateAt": null
    }
   ],
  "meta": {
    "count": 77, 
    "limit": 10, 
    "page": 1
  }
}

```

**字段说明：**

| 字段名                | 示例值                                           | 字段类型    | 说明       |
| ------------------ | --------------------------------------------- | ------- | -------- |
| createAt           | 2018-02-26 13:57:02                           | Date    | 创建时间     |
| deviceID           | c4c9f031cace9a              | String  | 设备编号     |
| deviceName         | 共享单车_c4c9f031cace9a                                         | String  | 设备名称     |
| id                 | 16                                            | Integer | 下行消息主键 ID    |
| payload            | "{\n  \"p\": 0,\n  \"message\": \"Hello\"\n}" | String  | 载荷       |
| publishStatus      | 3                                             | Integer  |   下发状态：0: 下发失败 1: 已下发 2: 发送成功       |
| publishStatusLabel | 不需要回执                                         | String  | 下发回执描述         |
| publishUser        | EMQ                                           | String  | 下发者用户名         |
| updateAt           |                                               | Date    | 更新时间     |
| userID             | 4                                             | Integer | 下发者主键 ID |