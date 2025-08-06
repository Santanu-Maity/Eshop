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

module.exports = {
    createUser,
    loginUser,
    getUSerById
};