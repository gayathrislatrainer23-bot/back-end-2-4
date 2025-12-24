const User = require('../models/User')
const bcrypt = require('bcrypt');
const getUser = (req,res)=>{
res.json({
   name: "Selva .P",
   age:21,
   

})
}

const createUser = async (req,res)=>{

const {userName,age, email,password}= req.body

const output = await User.insertOne({name : userName,age, email,password})
if(!output){
res.status(404).json({
 message: 'data can  added'
})
}

res.status(200).json({
    output
})
          
}

const profileUpdate =(req,res,next)=>{
    console.log('haii')
    res.status(200).json({
    message: ' profile updated sucessfully'
})
}

module.exports ={
    getUser,
    createUser,
    profileUpdate
}