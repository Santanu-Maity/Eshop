const jwt = require('jsonwebtoken');

const { createUser, loginUser, getUSerById } = require('../models/userModule');
const express = require('express');

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
        if (user) {
            res.status(200).json({ user });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    registerUser,
    authUser,
    getUserDetails
};