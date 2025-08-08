
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();
const uri = process.env.MONGO_URI;

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

let db;

async function connectToUserDatabase() {
    try {
        await client.connect();
        await client.db("user")
        console.log("Pinged your deployement. You successfully connected to MongoDB!");
    }
    catch (error) {
        console.error("Error connecting to the database", error);
    }
    db = client.db('ecom');
    console.log("Connected to the database successfully");
}

async function getUserDatabase() {
    if (!db) {
        await connectToUserDatabase();
        db = client.db("user");
    }
    return db;
}

module.exports = {
    getUserDatabase
};
