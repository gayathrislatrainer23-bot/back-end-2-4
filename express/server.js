 const express = require('express');
 //16/12/2025--update
 const connectDB = require('./config/db')
 const userRouter = require('./routes/userRouter')
//  ....

 const app = express()
 app.use(express.json())

 
//16/12/2025--update
connectDB()



app.use('/get_api', (req,res)=>{
    res.json({
        message: 'this is just a message'
    })
})

 app.use('/test',(req,res)=>{
//    res.send('this is a test')
 })

//16/12/2025--update
app.use('/users', userRouter)


let port = 5000
 app.listen(port,()=>{
    console.log('server is running')
 })
