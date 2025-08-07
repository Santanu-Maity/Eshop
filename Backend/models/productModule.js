const {grtproductdatabase} = require('../models/database');
const { ObjectId } = require('mongodb');

const setproduct = async (pid,name, price, description, categoryid, stockquantity, image) => {
    const db = await grtproductdatabase();
    const collection = db.collection('product');
    const newObjectId = new ObjectId().toString(); 
    const productData = {
        _id: productObjectId,
        productid: pid,
        name,
        price,
        description,
        categoryid,
        stockquantity,
        image,
    };
    const result = await collection.insertOne(productData);
    return result;
}
const getproduct = async (pid) => {
    const db = await grtproductdatabase();
    const collection = db.collection('product');
    const product = await collection.findOne({ productid: pid });
    if (!product) {
        throw new Error('Product not found');
    }
    return product;
}
module.exports = {
    setproduct,
    getproduct,
};