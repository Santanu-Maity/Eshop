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
    return user;
}

const setAddress = async (uid, state, pin, address, district) => {
    const db = await getUserDatabase();
    const collection = db.collection('address');
    const addressObjectId = new ObjectId().toString();
    const addressData = {
        _id: addressObjectId,
        userId: uid,
        state,
        pin,
        address,
        district,
    };
    const result = await collection.insertOne(addressData);
    return result;
}

const getAddress = async (userId) => {
    const db = await getUserDatabase();
    const collection = db.collection('address');
    const address = await collection.find({ userId }).toArray();
    return address;
}
const setwishlist = async (uid, pid) => {
    const db = await getUserDatabase();
    const collection = db.collection('wishlist');
    const wishlistObjectId = new ObjectId().toString();
    const wishlistData = {
        _id: wishlistObjectId,
        userId: uid,
        productId: pid,
    };
    const result = await collection.insertOne(wishlistData);
    return result;
}
const getWishlist = async (userId) => {
    const db = await getUserDatabase();
    const collection = db.collection('wishlist');
    const wishlist = await collection.find({ userId }).toArray();
    return wishlist;
}
const setiorder = async (uid, pid, quantity, orderdate, status) => {
    const db = await getUserDatabase();
    const collection = db.collection('orders');
    const iorderObjectId = new ObjectId().toString();
    const orderData = {
        _id: iorderObjectId,
        userId: uid,
        productId: pid,
        quantity,
        orderdate,
        status,
    };
    const result = await collection.insertOne(orderData);
    return result;
}
const getiOrder = async (userId) => {
    const db = await getUserDatabase();
    const collection = db.collection('orders');
    const iorders = await collection.find({ userId }).toArray();
    return iorders;
}
const setcart = async (uid, pid, quantity ) =>{
    const db = await getUserDatabase();
    const collection = db.collection('cart');
    const cartObjectid = new ObjectId().toString();
    const cartdata ={
        _id: cartObjectid,
        userId: uid,
        productId: pid,
        quantity,
    }
    const result = await collection.insertOne(cartdata);
    return result;
}
const getcart = async(userId) => {
    const db = await getUserDatabase();
    const collection = db.collection('cart')
    const cart = await collection.find({userid}).toArray();
    return cart;
}

const setpay = async(orderid,uid,paymethod,paystatus,paydate,tid,amountpaid ) =>{
    const db = await getUserDatabase();
    const collection = db.collection('pay');
    const payObjectid = new ObjectId().toString();
    const paydata ={
        _id: payObjectid,
        userId : uid,
        paymethod,
        paystatus,
        paydate,
        tid,
        amountpaid,
        orderid,
    }
    const result = await collection.insertOne(paydata);
    return result;
}
const getpay = async(userId) => {
    const db = await getUserDatabase();
    const collection = db.collection('pay')
    const pay = await collection.find({userId}).toArray();
    return pay;
}




module.exports = {
    createUser,
    loginUser,
    getUSerById,
    setAddress,
    getAddress,
    setwishlist,
    getWishlist,
    setiorder,
    getiOrder,
    setcart,
    getcart,
    setpay,
    getpay


   
   
};

