var express = require('express')
var path = require('path')
var serveStatic = require("serve-static")
const { use } = require('vue/types/umd')

var app = express()
app.use(serveStatic(path.join(__dirname, 'dist')))

var port = express()
use.listen(port)
console.log('server started ' + port)