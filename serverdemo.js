const http = require('http');

const server = http.createServer((req,res)=>{

if(req.url === '/about'){
 res.end(' This is an about page')

}else if( req.url === '/data'){
        let data  = 'this is data'
 res.end(data)
}else{
res.end(' This is Home age')

}
})
const port = 5000
server.listen(port , ()=>{
console.log(`server is running in the port ${port}`)
})