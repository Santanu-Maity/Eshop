const express = require('express');
const { registerUser, authUser, getUserDetails, setUserAddress, setUserWishlist, getUserWishlist, getOrder, setorder, settocart, gettocart, setpayments, getpayments } = require('../controllers/userController');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', authUser);
router.get('/id', getUserDetails);
router.post('/address', setUserAddress);
router.post('/wishlist', setUserWishlist);
router.post('/wishlist/get', getUserWishlist);
router.post('/order', setorder);
router.get('/order', getOrder);
router.post('/tocart', settocart);
router.get('/tocart', gettocart);
router.post('/payments', setpayments);
router.get('/payments', getpayments )



module.exports = router;

