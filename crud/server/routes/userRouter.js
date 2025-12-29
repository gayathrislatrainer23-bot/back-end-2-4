 const express = require('express');
const router = express.Router();
const userController = require('../controllers/userCotroller')
const tokenVerification  = require('../middleware/jwtMiddleware')

router.put('/update_profile',tokenVerification,userController.profileUpdate)

module.exports = router;

//16/12/2025--update