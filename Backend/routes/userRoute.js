const express = require('express');
const { registerUser, authUser, getUserDetails, setuserAddress, setuserOrder, userCart, setUserReview, UserWishlist } = require('../controllers/userController');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', authUser);
router.get('/id', getUserDetails);
router.post('/address', setuserAddress);
router.post('/order', setuserOrder);
router.post('/cart', userCart);
router.post('/review', setUserReview);
router.post('/wishlist', UserWishlist);




module.exports = router;

