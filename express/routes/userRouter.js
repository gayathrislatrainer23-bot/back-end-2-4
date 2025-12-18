 const express = require('express');
const router = express.Router();
const userController = require('../controllers/userCotroller')

router.get('/get_user',userController.getUser)
router.post('/create_user',userController.createUser)

module.exports = router;

//16/12/2025--update