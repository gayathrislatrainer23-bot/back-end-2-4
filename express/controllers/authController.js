const User = require('../models/User')
const bcrypt = require('bcrypt');

const userRegister = async (req,res)=>{
// req.body data
// insert to collection : 
// res
 try{
    const {userName,age, email,password}= req.body  
console.log('pswd', password)
    const hashedPassword =await bcrypt.hash(password,10);
console.log('hashedPassword',hashedPassword)
    const output = await User.insertOne({name : userName,age, email,password: hashedPassword})

if(!output){
res.status(404).json({
 message: 'registration faild'
})
}

res.status(200).json({
  message : 'registration sucessfully'
})

}catch(err){

res.status(500).json({
  message : 'server'
})

     }
} 

const userLogin = async (req,res)=>{
// req.body data
// insert to collection : 
// res
 try{
    const {email,password}= req.body  

   

// res.status(200).json({
//   message : 'registration sucessfully'
// })

}catch(err){

res.status(500).json({
  message : 'server'
})

     }
} 



module.exports = {
    userRegister,
}
