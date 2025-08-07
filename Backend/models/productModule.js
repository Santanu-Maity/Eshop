const {getProductDatabase} = require('../models/database');// Tader code getuser database chilo ami get product data base use korechi
const bcryptjs = require('bcryptjs');
const { ObjectId } = require('mongodb');

const createProduct = async (name, price, description, category, image, quantity, discount_amount) => {
    const db = await getUserDatabase();
    const collection = db.collection('product');
    const newObjectId = new ObjectId().toString();
    const productData = {
        _id: newObjectId,
        name,
        price,
        description,
        category,
        image,
        quantity,
        discount_amount: discount_amount || 0,
    };
    const result = await collection.insertOne(productData);
    return result;
}

const getProductById = async (_id) => {
    const db = await getUserDatabase();
    const collection = db.collection('product');
    const result = await collection.findOne({ _id });
    return result;
};

const getProducts = async () => {
    const db = await getUserDatabase();
    const collection = db.collection('product');
    const products = await collection.find().toArray();
    return products;
};

module.exports = {
    createProduct,
    getProductById,
    getProducts
};