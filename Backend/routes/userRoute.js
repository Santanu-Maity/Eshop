const express = require('express');
const { registerUser, authUser, getUserDetails } = require('../controllers/userController');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', authUser);
router.get('/id', getUserDetails);


module.exports = router;

