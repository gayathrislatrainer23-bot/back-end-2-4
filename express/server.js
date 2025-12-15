 const express = require('express');
 const app = express()
 app.use(express.json())

app.use('/get_api', (req,res)=>{
    res.json({
        message: 'this is just a message'
    })
})

 app.use('/test',(req,res)=>{
//    res.send('this is a test')
   res.json(
[

    {
        name: 'Malu',
        age:4.5
    },
    {
        name: 'Malu',
        age:4.5
    }
]
   )
 })
// app.use('/', function(req,res){
// // res.send('this is a test')
// })

let port = 5000
 app.listen(port,()=>{
    console.log('server is running')
 })
