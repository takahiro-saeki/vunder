const _ = require('lodash')
const fs = require('fs')

const ejsCompiler = ({ template }) => {
  const read = fs.readFileSync(template.entry)
  const compiled = _.template(read)

  fs.writeFileSync('dist/index.html', compiled(template.option));
}

module.exports = ejsCompiler