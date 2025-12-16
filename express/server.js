 const express = require('express');
 const connectDB = require('./config/db')
 const userRouter = require('./routes/userRouter')
 const app = express()
 app.use(express.json())

 

connectDB()



app.use('/get_api', (req,res)=>{
    res.json({
        message: 'this is just a message'
    })
})

 app.use('/test',(req,res)=>{
//    res.send('this is a test')
 })


app.use('/users', userRouter)


let port = 5000
 app.listen(port,()=>{
    console.log('server is running')
 })
