const User = require('../models/User')
const bcrypt = require('bcrypt');


const profileUpdate =async(req,res,next)=>{
    console.log("email",req.user.email)
    const email = req.user.email
    const {userName}=req.body
 try{

     const userDetails = await User.findOne({email:email})
     console.log(userDetails)
     if(!userDetails){
             res.status(404).json({
     message: ' NO such user'
 })
     }else{
     userDetails.name = userName;
      await userDetails.save()
 
          // const      updatedData=  await User.updateOne({_id : id}, {$set : {name : userName}})
     // console.log(updatedData)
 
     // mongoose methods
 
     // existingUser.name = userName
     // await existingUser.save();
     //    const      udatedData=  await User.updateOne({_id : id},{name : userName},{new :true})
 
 
     res.status(200).json({
     message: ' profile updated sucessfully'
 })
     }
 }catch(err){
    next()
 }
}

module.exports ={

    profileUpdate
}