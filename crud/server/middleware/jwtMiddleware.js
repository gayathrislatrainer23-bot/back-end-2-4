const jwt = require('jsonwebtoken');


const jwtMiddleware = (req,res,next)=>{
    let  token;
 console.log('haii1')
 if  (req.headers.authorization && req.headers.authorization.startsWith('Bearer ')){
 token = req.headers.authorization.split(" ")[1]
 }
// token = req.headers.authorization;
 console.log(token)
 if(!token){
    res.status(404).json({
        message: "access denied"
    })
 }
 console.log(token)
 try{
     console.log('haii12')
let  decoded = jwt.verify(token,process.env.JWT_SECRET_KEY);
 console.log(decoded)
req.user =decoded
next();

 }catch(err){
  res.status(500).json({
        message: "server error"
    })
 }
}
module.exports = jwtMiddleware;