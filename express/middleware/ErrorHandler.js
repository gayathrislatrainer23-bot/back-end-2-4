const errorHandler = (err,req,res, next)=>{

res.status(500).json({
  message : 'server error',
  err     : err
})
}
module.exports = errorHandler;