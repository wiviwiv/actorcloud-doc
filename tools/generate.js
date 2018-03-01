// 由 SUMMARY 生成 template.json
const fs = require('fs')
const path = require('path')

const entry = path.resolve('../')
const SUMMARY = fs.readFileSync(path.join(entry, 'SUMMARY.md')).toString()

const content = SUMMARY.split('\n').filter(_ => _.includes('*'))

const template = []
let flag = {}
content.forEach((row) => {
  const data = loadData(row)
  // title
  if (row.startsWith('*')) {
    flag = data
    template.push(flag)
    flag.child = []
  } else {
    flag.child.push(data)
  }
})

fs.writeFileSync('template.json', JSON.stringify(template, null, 2))
console.log('Done')

function loadData(row) {
  return {
    title: row.match(/\[(.*)]/)[1],
    path: row.match(/\((.*)\)/)[1],
  }
}