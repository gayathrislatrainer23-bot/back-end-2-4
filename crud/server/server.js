 const express = require('express');
 const dotenv =require('dotenv')
 const connectDB = require('./config/db')
 const userRouter = require('./routes/userRouter')
 const authRouter = require('./routes/authRouter')
 const errorHandler = require('./middleware/ErrorHandler')
//  ....
dotenv.config()
 const app = express()
 app.use(express.json())

 

connectDB()



app.use('/users', userRouter)
app.use('/auth', authRouter)


app.use(errorHandler)
let port = 5000
 app.listen(port,()=>{
    console.log('server is running')
 })
