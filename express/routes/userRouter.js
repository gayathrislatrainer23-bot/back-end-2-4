 const express = require('express');
const router = express.Router();

router.get ('/get_user',(req,res)=>{
    res.json({
        messeage: ' welcome'
    })
})

module.exports = router;

//16/12/2025--update