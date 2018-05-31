const compile = require('./module/compile')
const path = require('path')

const config = require(process.argv[2])
console.log(config)

compile(config.entry, config.output)