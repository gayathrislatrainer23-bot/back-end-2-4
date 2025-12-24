const User = require('../models/User')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const userRegister = async (req,res,next)=>{
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

next(err)

     }
} 

const userLogin = async (req,res,next)=>{
// req.body data
// insert to collection : 
// res
const {email,password}= req.body  
 try{
  console.log(password)

const userDetails =  await User.findOne({email:email})

console.log(userDetails)

   if(!userDetails){
    res.status(404).json({
  message : 'user not exist'
})
   }else{

     const hashedPassword = userDetails.password
     
     console.log("hashedPassword",hashedPassword)
     const isCompare = await bcrypt.compare(password,hashedPassword);
     console.log("isCompare",isCompare)
     if(!isCompare){
           res.status(404).json({
       message : 'password incorrect'
     })
     }else{
        
      const token  = jwt.sign({ email}, 'secretkey2&4', { expiresIn: '1h' });

       res.status(200).json({
         message : 'login sucessfully',
         token

       })
     }
   }

}catch(err){

next(err)

     }
} 

const forgotPassword  = async ()=>{

 const {email,Newpassword}= req.body  
 try{

const userDetails =  await User.findOne(email)


 }catch(err){

 }
}


module.exports = {
    userRegister,
    userLogin,
    forgotPassword
}
