const { getUserDatabase } = require('../models/database');
const bcryptjs = require('bcryptjs');
const { ObjectId } = require('mongodb');

const createUser = async (fullname, contact, gender, email, password) => {
    const db = await getUserDatabase();
    const collection = db.collection('customer');
    const newObjectId = new ObjectId().toString();
    const hashedPassword = await bcryptjs.hash(password, 10);
    const hpassword = hashedPassword;
    await collection.createIndex({ email: 1 }, { unique: true });
    const userData = {
        _id: newObjectId,
        fullname,
        contact,
        gender,
        email,
        hpassword,
    };
    const result = await collection.insertOne(userData);
    return result;
}

const loginUser = async (email, password) => {
    const db = await getUserDatabase();
    const collection = db.collection('customer');
    const user = await collection.findOne({ email });
    if (!user) {
        throw new Error('User not found');
    }
    const isPasswordValid = await bcryptjs.compare(password, user.hpassword);
    if (!isPasswordValid) {
        throw new Error('Invalid password');
    }
    return user;
}

const getUSerById = async (_id) => {
    const db = await getUserDatabase();
    const collection = db.collection('customer');
    const user = await collection.findOne({ _id });
    if (!user) {
        throw new Error('User not found');
    }
    return user;
}

const setUserAddress = async (userId, pin, address, city, state, district) => {
    const db = await getUserDatabase();
    const collection = db.collection('address');
    const AddressObjectId = new ObjectId().toString();
    const result = await collection.insertOne({ _id: AddressObjectId, userId, pin, address, city, state, district });
    return result
}
const getUserAddress = async (userId) => {
    const db = await getUserDatabase();
    const collection = db.collection('address');
    const address = await collection.find({ userId }).toArray();
    return address;
}

const getUserCart = async (userId) => {
    const db = await getUserDatabase();
    const collection = db.collection('cart');
    const cart = await collection.find({ userId }).toArray();
    return cart;
}
const setUserCart = async (userId, product_id, quantity) => {
    const db = await getUserDatabase();
    const collection = db.collection('cart');
    const CartObjectId = new ObjectId().toString();
    const result = await collection.insertOne({ _id: CartObjectId, userId, product_id, quantity });
    return result
}

const setUserOrder = async (userId, product_id, address_id, product_quantity, payment_method, total_amount, discount_amount) => {
    const db = await getUserDatabase();
    const collection = db.collection('order');
    const OrderObjectId = new ObjectId().toString();
    const timestamp = new Date().toLocaleString();
    const result = await collection.insertOne({ _id: OrderObjectId, userId, product_id, address_id, product_quantity, payment_method, total_amount, discount_amount, timestamp });
    return result
}
const getUserOrder = async (userId) => {
    const db = await getUserDatabase();
    const collection = db.collection('order');
    const order = await collection.find({ userId }).toArray();
    return order;
}

const getUserReview = async (userId) => {
    const db = await getUserDatabase();
    const collection = db.collection('review');
    const review = await collection.find({ userId }).toArray();
    return review;
}
const setUserReview = async (userId, product_id, review) => {
    const db = await getUserDatabase();
    const collection = db.collection('review');
    const ReviewObjectId = new ObjectId().toString();
    const result = await collection.insertOne({ _id: ReviewObjectId, userId, product_id, review });
    return result
}

const setUserWishlist = async (userId, product_id) => {
    const db = await getUserDatabase();
    const collection = db.collection('wishlist');
    const WishlistObjectId = new ObjectId().toString();
    const result = await collection.insertOne({ _id: WishlistObjectId, userId, product_id });
    return result
}
const getUserWishlist = async (userId) => {
    const db = await getUserDatabase();
    const collection = db.collection('wishlist');
    const wishlist = await collection.find({ userId }).toArray();
    return wishlist;
}




module.exports = {
    createUser,
    loginUser,
    getUSerById,
    setUserAddress,
    getUserAddress,
    setUserOrder,
    getUserOrder,
    getUserCart,
    setUserCart,
    getUserReview,
    setUserReview,
    setUserWishlist,
    getUserWishlist

};

