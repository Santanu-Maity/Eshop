const db = require('../models/database');

const dbUserMiddleware = async (req, res, next) => {
    try {
        req.db = await db.getUserDatabase();
        next();
    } catch (err) {
        console.error("database connection error:", err)
        res.status(500).json({ error: "failed to connect to the database   " });
    }
};

const dbProductMiddleware = async (req, res, next) => {
    try {
        req.db = await db.getProductDatabase();
        next();
    } catch (err) {
        console.error("database connection error:", err)
        res.status(500).json({ error: "failed to connect to the database   " });
    }
};

module.exports = {
    dbUserMiddleware,
    dbProductMiddleware
};