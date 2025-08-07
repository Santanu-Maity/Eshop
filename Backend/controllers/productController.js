const express = require('express');
const { createProduct, getProductById, getProducts } = require('../models/productModule');
const addProduct = async (req, res) => {
    const { name, price, description, category, image, quantity, discount_amount } = req.body;
    try {
        const result = await createProduct(name, price, description, category, image, quantity, discount_amount);
        if (result.acknowledged === true) {
            res.status(201).json({ message: 'Product registered successfully' });
        }
        else {
            res.status(400).json({ message: 'Product Registered failed' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getProduct = async (req, res) => {
    const {id} = req.body;
    try{
        const result = await getProductById(id);
        if (result) {
            res.status(200).json({result});
        }
    } catch (error) {
         res.status(500).json({ message: error.message });
    }
};

const getAllProduct = async (req,res) =>{
    try {
        const products = await getProducts();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    addProduct,
    getProduct,
    getAllProduct
}
