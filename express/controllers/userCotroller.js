const User = require('../models/User')
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


module.exports ={
    getUser,
    createUser
}