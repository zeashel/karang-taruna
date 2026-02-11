const mongoose = require("mongoose");
const Tutorial = require("./models/Tutorial");
const tutorialSeed = require("./data/tutorialSeed");

let isConnected = false;

async function connectDB() {
    if (isConnected) {
        return;
    }

    mongoose.set("autoIndex", true);

    const db = await mongoose.connect(process.env.MONGO_URI);

    isConnected = db.connections[0].readyState === 1;

    console.log("MongoDB connected");

    // only seed once per deployment instance
    const count = await Tutorial.countDocuments();

    if (count === 0) {
        await Tutorial.insertMany(tutorialSeed);
        console.log("Seed data inserted");
    }
}

module.exports = connectDB;
