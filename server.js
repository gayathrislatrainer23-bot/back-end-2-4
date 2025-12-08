const http = require('http')
const fs = require('fs')
const path = require('path')
const eventEmitter = require('events')
const emitter = new eventEmitter();


const server = http.createServer((req,res)=>{
    res.writeHead(200, {'content-type': 'text/html'})
// res.write('<h1>Hello server</h1>')
// res.end()

// fs

//  fs.writeFileSync('demo1.html', 'hello welcome')
// const data =fs.readFileSync('index.html')
//  res.write(data)

// path
// console.log('currnt file name:',path.basename(__filename))
// console.log('currnt folder name:',path.dirname(__filename))
// let fullPath = path.join(__dirname, 'demo.html')
// res.end(fullPath)


emitter.on('greet', ()=>{
    console.log('hello how are you ?')
    res.end('hellow')
})
emitter.emit('greet')
})

server.listen(5000, ()=>{
    console.log('server is running')
})