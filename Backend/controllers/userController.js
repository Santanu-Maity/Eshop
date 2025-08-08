const jwt = require('jsonwebtoken');

const { createUser, loginUser, getUSerById, setUserAddress, getUserOrder, setUserOrder, setUserCart, getUserCart, getUserAddress, setUserReview, setUserWishlist } = require('../models/userModule');
const express = require('express');

const registerUser = async (req, res) => {
    const { fullname, contact, gender, email, password } = req.body;
    if (!fullname || !contact || !gender || !email || !password) {
        return res.status(400).json({ message: 'Input correct JSON data' });
    }
    try {
        const result = await createUser(fullname, contact, gender, email, password);
        if (result.acknowledged === true) {
            res.status(201).json({ message: 'User registered successfully' });
        }
        else {
            res.status(400).json({ message: 'User Registered failed' });
        }
    } catch (error) {
        if (error.code === 11000) {
            res.status(400).json({ message: 'Email already exists' });
        } else if (error.name === 'ValidationError') {
            res.status(400).json({ message: 'Invalid input data' });
        } else {
            res.status(500).json({ message: error.message });
        }
    }
};

const authUser = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
    }
    try {
        const user = await loginUser(email, password);
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '24h' });
        user.token = token;
        if (user) {
            res.status(200).json({ message: 'Login successful', user });
        }
    }
    catch (error) {
        if (error.message === 'User not found') {
            res.status(404).json({ message: 'User not found' });
        } else if (error.message === 'Invalid password') {
            res.status(401).json({ message: 'Invalid password' });
        }
        else {
            res.status(500).json({ message: error.message });
        }
    }
}

const getUserDetails = async (req, res) => {
    const { id } = req.body;
    if (!id) {
        return res.status(400).json({ message: 'Input ID' });
    }
    try {
        const userdetails = await getUSerById(id);
        const userAddress = await getUserAddress(id);
        const userOrder = await getUserOrder(id)
        const userCart = await getUserCart(id);
        userdetails.order = userOrder;
        userdetails.address = userAddress;
        userdetails.cart = userCart;
        userdetails.password = ""; // Exclude password from response
        if (userdetails) {
            res.status(200).json({ userdetails });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const setuserAddress = async (req, res) => {
    const { userId, pin, address, city, state, district } = req.body;
    if (!userId || !pin || !address || !city || !state || !district) {
        return res.status(400).json({ message: 'Input correct JSON data' });
    }
    try {
        const result = await setUserAddress(userId, pin, address, city, state, district);
        if (result.acknowledged === true) {
            res.status(201).json({ message: 'Address added successfully' });
        } else {
            res.status(400).json({ message: 'Address addition failed' });
        }
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const setuserOrder = async (req, res) => {
    const { userId, product_id, address_id, product_quantity, payment_method, total_amount, discount_amount } = req.body;
    if (!userId || !product_id || !address_id || !product_quantity || !payment_method || !total_amount || !discount_amount) {
        return res.status(400).json({ message: 'Input correct JSON data' });
    }
    try {
        const result = await setUserOrder(userId, product_id, address_id, product_quantity, payment_method, total_amount, discount_amount);
        if (result.acknowledged === true) {
            res.status(201).json({ message: 'Order added successfully' });
        } else {
            res.status(400).json({ message: 'Order addition failed' });

        }
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const userCart = async (req, res) => {
    const { userId, product_id, product_quantity } = req.body;
    if (!userId || !product_id || !product_quantity) {
        return res.status(400).json({ message: 'Input correct JSON data' });
    }
    try {
        const result = await setUserCart(userId, product_id, product_quantity);
        if (result.acknowledged === true) {
            res.status(201).json({ message: 'Cart added successfully' });
        } else {
            res.status(400).json({ message: 'Cart addition failed' });
        }
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const userReview = async (req, res) => {
    const { userId, product_id, review } = req.body;
    if (!userId || !product_id || !review) {
        return res.status(400).json({ message: 'Input correct JSON data' });
    }
    try {
        const result = await setUserReview(userId, product_id, review);
        if (result.acknowledged === true) {
            res.status(201).json({ message: 'Review added successfully' });
        } else {
            res.status(400).json({ message: 'Review addition failed' });
        }
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const UserWishlist = async (req, res) => {
    const { userId, product_id } = req.body;
    if (!userId || !product_id) {
        return res.status(400).json({ message: 'Input correct JSON data' });
    }
    try {
        const result = await setUserWishlist(userId, product_id);
        if (result.acknowledged === true) {
            res.status(201).json({ message: 'Wishlist added successfully' });
        } else {
            res.status(400).json({ message: 'Wishlist addition failed' });
        }
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    registerUser,
    authUser,
    getUserDetails,
    setuserAddress,
    setuserOrder,
    userCart,
    setUserReview,
    UserWishlist

};