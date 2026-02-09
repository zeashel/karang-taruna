const mongoose = require("mongoose");
const Tutorial = require("./models/Tutorial");
const tutorialSeed = require("./data/tutorialSeed");

async function connectDB() {
    mongoose.set("autoIndex", true);
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");

    const count = await Tutorial.countDocuments();

    if (count === 0) {
        await Tutorial.insertMany(tutorialSeed);
        console.log("Seed data inserted");
    }
}

module.exports = connectDB;
