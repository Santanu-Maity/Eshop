const jwt = require('jsonwebtoken');

const { createUser, loginUser, getUSerById, setAddress, getAddress, setwishlist, getWishlist, getiOrder, setiorder, setcart, getcart, setpay, getpay } = require('../models/userModule');
const express = require('express');
const { get } = require('../routes/userRoute');

const registerUser = async (req, res) => {
    const { fullname, contact, gender, email, password } = req.body;
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
    try {
        const user = await getUSerById(id);
        const address = await getAddress(id);
        user.address = address;
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        if (user) {
            res.status(200).json({ user });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
        res.status(400).json({ message: 'Something wrong' });
    }
};

const setUserAddress = async (req, res) => {
    const { id, state, pin, address, district } = req.body;
    try {
        const result = await setAddress(id, state, pin, address, district);
        if (result.acknowledged) {
            res.status(201).json({ message: 'Address set successfully' });
        }
        else {
            res.status(400).json({ message: 'Failed to set address' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
const setUserWishlist = async (req, res) => {
    const { uid, pid } = req.body;
    try {
        const result = await setwishlist(uid, pid);
        if (result.acknowledged) {
            res.status(201).json({ message: 'Wishlist set successfully' });
        } else {
            res.status(400).json({ message: 'Failed to set wishlist' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getUserWishlist = async (req, res) => {
    const { id } = req.body;
    try {
        const wishlist = await getWishlist(id);
        if (!wishlist) {
            return res.status(404).json({ message: 'Wishlist not found' });
        }
        res.status(200).json({ wishlist });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const setorder = async (req, res) => {
    const { uid, pid, quantity, orderdate, status } = req.body;
    try {
        const result = await setiorder(uid, pid, quantity, orderdate, status);
        if (result.acknowledged) {
            res.status(201).json({ message: 'Order set successfully' });
        } else {
            res.status(400).json({ message: 'Failed to set order' });
        }
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};
const getOrder = async (req, res) => {
    const { id } = req.body;
    try {
        const iorders = await getiOrder(id);
        if (!iorders) {
            return res.status(404).json({ message: 'Orders not found' });
        }
        res.status(200).json({ iorders });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const settocart = async (req, res) => {
    const { uid, pid, quantity } = req.body;
    try {
        const result = await setcart(uid, pid, quantity,);
        if (result.acknowledged) {
            res.status(201).json({ message: 'Add to Cart successfully' });
        } else {
            res.status(400).json({ message: 'Failed to Cart' });
        }
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};
const gettocart = async (req, res) => {
    const { id } = req.body;
    try {
        const cart = await getcart(id);
        if (!cart) {
            return res.status(404).json({ message: 'Cart Not found' });
        }
        res.status(200).json({ cart });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};
const setpayments = async (req, res) => {
    const {orderid,uid,paymethod,paystatus,paydate,tid,amountpaid } = req.body;
    try {
        const result = await setpay(orderid,uid,paymethod,paystatus,paydate,tid,amountpaid);
        if (result.acknowledged) {
            res.status(201).json({ message: 'Payments Done successfully' });
        } else {
            res.status(400).json({ message: 'Payments Failed' });
        }
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};
const getpayments = async (req, res) => {
    const { id } = req.body;
    try {
        const pay = await getpay(id);
        if (!pay) {
            return res.status(404).json({ message: 'Payments Not found' });
        }
        res.status(200).json({ pay });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};





module.exports = {
    registerUser,
    authUser,
    getUserDetails,
    setUserAddress,
    setUserWishlist,
    getUserWishlist,
    getOrder,
    setorder,
    settocart,
    gettocart,
    setpayments,
    getpayments
};