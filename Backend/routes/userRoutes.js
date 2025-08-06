const express = require('express');
const { registerUser, authUser, getUserDetails } = require('../controllers/userControllers');

const router = express.Router();


router.post('/register', registerUser);
router.post('/login', authUser);
router.get('/id', getUserDetails);


module.exports = router;