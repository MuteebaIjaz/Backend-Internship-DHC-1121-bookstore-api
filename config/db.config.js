const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {
        const dbURI = process.env.dbURI || "mongodb://localhost:27017/Book-Store";
        await mongoose.connect(dbURI);
  console.log("Database Connected successfully", mongoose.connection.name);
    } catch (error) {
        console.log("Database connection error:",error);
    }
    
}
module.exports = connectDB;