 const express = require('express');
const router = express.Router();
const userController = require('../controllers/userCotroller')
const tokenVerification  = require('../middleware/jwtMiddleware')
router.get('/get_user',()=> console.log(1),userController.getUser)
router.post('/create_user',userController.createUser)
router.post('/update_profile',tokenVerification,userController.profileUpdate)

module.exports = router;

//16/12/2025--update