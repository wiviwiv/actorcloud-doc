
字段表
------



#### 设备
  
- 内容
  
| 字段名             | 数值  | 字段类型    | 是否必填  | 说明   |
| --------------- | --- | ------- | ----- | ---- |
| deviceName      | --  | String  | true  | 设备名称 |
| deviceType      | --  | Integer | true  | 设备类型 |
| hardwareVersion | --  | String  | false | 硬件版本 |
| serialNumber    | --  | String  | false | 序列号  |
| description     | --  | String  | false | 描述   |
| deviceID        | --  | String  | false | 设备编号 |
| token           | --  | String  | false | 设备秘钥 |
  
- 代码
```
| 字段名             | 数值  | 字段类型    | 是否必填  | 说明   |
| --------------- | --- | ------- | ----- | ---- |
| deviceName      | --  | String  | true  | 设备名称 |
| deviceType      | --  | Integer | true  | 设备类型 |
| hardwareVersion | --  | String  | false | 硬件版本 |
| serialNumber    | --  | String  | false | 序列号  |
| description     | --  | String  | false | 描述   |
| deviceID        | --  | String  | false | 设备编号 |
| token           | --  | String  | false | 设备秘钥 |
```
  
  
  
  
#### 更新设备
  
- 内容
  
| 字段名          | 数值  | 字段类型   | 是否必填  | 说明   |
| ------------ | --- | ------ | ----- | ---- |
| deviceName   | --  | String | true  | 设备名称 |
| softVersion  | --  | String | false | 软件版本 |
| manufacturer | --  | String | false | 制造商  |
| location     | --  | String | false | 安装位置 |
  
- 代码
```
| 字段名          | 数值  | 字段类型   | 是否必填  | 说明   |
| ------------ | --- | ------ | ----- | ---- |
| deviceName   | --  | String | true  | 设备名称 |
| softVersion  | --  | String | false | 软件版本 |
| manufacturer | --  | String | false | 制造商  |
| location     | --  | String | false | 安装位置 |
```
  
  
  
  
#### 产品
  
- 内容
  
| 字段名         | 数值  | 字段类型   | 是否必填 | 说明   |
| ----------- | --- | ------ | ---- | ---- |
| productName | --  | String | true | 产品名称 |
  
- 代码
```
| 字段名         | 数值  | 字段类型   | 是否必填 | 说明   |
| ----------- | --- | ------ | ---- | ---- |
| productName | --  | String | true | 产品名称 |
```
  
  
  
  
#### 设备事件
  
- 内容
  
| 字段名      | 数值  | 字段类型   | 是否必填 | 说明   |
| -------- | --- | ------ | ---- | ---- |
| deviceID | --  | String | true | 设备名称 |
| payload  | --  | String | true | 载荷   |
  
- 代码
```
| 字段名      | 数值  | 字段类型   | 是否必填 | 说明   |
| -------- | --- | ------ | ---- | ---- |
| deviceID | --  | String | true | 设备名称 |
| payload  | --  | String | true | 载荷   |
```
  
  
  
  
#### 连接日志
  
- 内容
  
| 字段名      | 数值  | 字段类型   | 是否必填 | 说明   |
| -------- | --- | ------ | ---- | ---- |
| deviceID | --  | String | true | 设备名称 |
| IP       | --  | String | true | IP   |
  
- 代码
```
| 字段名      | 数值  | 字段类型   | 是否必填 | 说明   |
| -------- | --- | ------ | ---- | ---- |
| deviceID | --  | String | true | 设备名称 |
| IP       | --  | String | true | IP   |
```
  
  
  
  
#### 错误信息
  
- 内容
  
| 字段名      | 数值  | 字段类型   | 是否必填 | 说明   |
| -------- | --- | ------ | ---- | ---- |
| deviceID | --  | String | true | 设备名称 |
  
- 代码
```
| 字段名      | 数值  | 字段类型   | 是否必填 | 说明   |
| -------- | --- | ------ | ---- | ---- |
| deviceID | --  | String | true | 设备名称 |
```
  
  
  
  
#### 设备下行消息
  
- 内容
  
| 字段名     | 数值  | 字段类型   | 是否必填 | 说明  |
| ------- | --- | ------ | ---- | --- |
| payload | --  | String | true | 载荷  |
  
- 代码
```
| 字段名     | 数值  | 字段类型   | 是否必填 | 说明  |
| ------- | --- | ------ | ---- | --- |
| payload | --  | String | true | 载荷  |
```
  
  
  
  
#### 分组下行消息
  
- 内容
  
| 字段名     | 数值  | 字段类型    | 是否必填  | 说明     |
| ------- | --- | ------- | ----- | ------ |
| payload | --  | String  | true  | 载荷     |
| needACK | --  | Integer | false | 是否需要回执 |
  
- 代码
```
| 字段名     | 数值  | 字段类型    | 是否必填  | 说明     |
| ------- | --- | ------- | ----- | ------ |
| payload | --  | String  | true  | 载荷     |
| needACK | --  | Integer | false | 是否需要回执 |
```
  
  
  
  