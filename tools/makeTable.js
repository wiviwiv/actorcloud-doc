// 将 JSON 转换为 markdown table 格式
const fs = require('fs')
const table = require('markdown-table')





// dict => table
function createTable() {
  const device = require('./dict/device')
  let content = `
字段表
------


`
  const head = ['字段名', '数值', '字段类型', '是否必填', '说明']
  Object.keys(device).forEach((schemaName) => {
    const schema = device[schemaName]
    if (!schema.length) {
      return
    }
    const _table = [head]
    schema.forEach((row) => {
      _table.push(Object.values(row))
    })

    const _content = table(_table)
    content += `
#### ${schemaName}
  
- 内容
  
${_content}
  
- 代码
\`\`\`
${_content}
\`\`\`
  
  
  
  `
  })

  fs.writeFileSync('./table.md', content)
}



// dict => k => v dict

function createDict() {
  const dict = {}
  const device = require('./dict/device')
  Object.values(device).forEach((schema) => {
    schema.forEach((row) => {
      if (row) {
        dict[row.key] = row
      }
    })
  })

  fs.writeFileSync('./device_dict.json', JSON.stringify(dict, null, 2))
}
createDict()




// 提取使用的正则
const Reg = {
  key: /\b(.+)(?= = )/g,
  cn_name: /(?:cn_name=u")(.+)"/g,
  len_max: /(?!len_max=)(\d+)/g,
  schema_name: /(?:class )(.+)(?=\(BaseSchema)/g,
  isRow: /cn_name=u"/g,
}

// 单个字段模板
let template = {
  key: '',
  value: '',
  type: '',
  required: false,
  description: '',
}

// 整个 Schema
let schema = ''

const Schema = {}

// 原始的处理 schemas.py 方法
function resolve(row) {
  // 没有 cn_name 的列不提取
  const _row = Reg.cn_name.exec(row)
  if (!_row) {
    return
  }
  if (schema) {
    Schema[schema].push({
      key: row.match(Reg.key)[0],
      value: '',
      type: row.includes('EmqString') ? 'String' : 'Integer',
      required: row.includes('required'),
      description: _row[1],
    })
  }
}

function loadSchema() {
  const content = ``.split('\n')
  content.forEach((row) => {
    // 新的 Schema
    const _row = Reg.schema_name.exec(row)
    if (_row) {
      schema = _row[1]
      Schema[schema] = []
    } else {
      resolve(row)
    }
  })
  console.log(JSON.stringify(Schema))
}

// loadSchema()
