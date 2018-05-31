const compile = require('./module/compile')
const path = require('path')
var finalhandler = require('finalhandler')
var http = require('http')
var serveStatic = require('serve-static')

const config = require(process.argv[2])

compile(config)

console.log(path.resolve(__dirname, 'lib'))

var serve = serveStatic('/', {'index': ['index.html', 'index.htm']})

var server = http.createServer(function onRequest (req, res) {
  serve(req, res, finalhandler(req, res))
})

server.listen(3000)