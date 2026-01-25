const mongoose = require("mongoose");
const Product = require("./models/Product");
const productSeed = require("./data/productSeed");

async function connectDB() {
    mongoose.set("autoIndex", true);
    await mongoose.connect("mongodb://127.0.0.1:27017/e-commerce-recompiled");
    console.log("MongoDB connected");

    const count = await Product.countDocuments();

    if (count === 0) {
        await Product.insertMany(productSeed);
        console.log("Seed data inserted");
    }
}

module.exports = connectDB;
