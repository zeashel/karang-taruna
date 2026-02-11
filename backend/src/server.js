// src/server.js
const express = require("express");
const cors = require("cors");
const connectDB = require("./db");

const app = express();
require("dotenv").config();

// Middleware
app.use(express.json());

// CORS + preflight
const allowedOrigins = [
    process.env.CLIENT_URL,  // frontend URL
    "http://localhost:3000", // local dev
];

app.use(
    cors({
        origin: function (origin, callback) {
            if (!origin) return callback(null, true); // allow Postman, curl
            if (allowedOrigins.indexOf(origin) !== -1) {
                callback(null, true);
            } else {
                console.warn("Blocked CORS origin:", origin);
                callback(new Error("Not allowed by CORS"));
            }
        },
        methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
        allowedHeaders: ["Content-Type", "Authorization"],
    })
);

app.options("/*", cors());

// Serverless-safe MongoDB middleware
app.use(async (req, res, next) => {
    try {
        await connectDB();
        next();
    } catch (err) {
        console.error("DB connection failed:", err);
        res.status(500).json({ message: "Database connection failed" });
    }
});

// Models
const Tutorial = require("./models/Tutorial");

// Auth middleware
const authMiddleware = require("./middleware/authMiddleware");
const adminMiddleware = require("./middleware/adminMiddleware");

// --------------------
// CRUD
// --------------------

// CREATE (Admin Auth)
app.post("/api/tutorials", authMiddleware, adminMiddleware, async (req, res) => {
    try {
        const tutorial = new Tutorial(req.body);
        const savedTutorial = await tutorial.save();
        res.status(201).json(savedTutorial);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// READ (No Auth)
app.get("/api/tutorials", async (req, res) => {
    const tutorials = await Tutorial.find().sort({ _id: 1 });
    res.json(tutorials);
});

app.get("/api/tutorials/:id", async (req, res) => {
    try {
        const tutorial = await Tutorial.findById(req.params.id);
        if (!tutorial) return res.status(404).json({ message: "Tutorial not found" });
        res.json(tutorial);
    } catch {
        res.status(400).json({ message: "Invalid ID" });
    }
});

// UPDATE (Admin Auth)
app.put("/api/tutorials/:id", authMiddleware, adminMiddleware, async (req, res) => {
    try {
        const updatedTutorial = await Tutorial.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedTutorial) return res.status(404).json({ message: "Tutorial not found" });
        res.json(updatedTutorial);
    } catch {
        res.status(400).json({ message: "Invalid ID" });
    }
});

// DELETE (Admin Auth)
app.delete("/api/tutorials/:id", authMiddleware, adminMiddleware, async (req, res) => {
    try {
        const deletedTutorial = await Tutorial.findByIdAndDelete(req.params.id);
        if (!deletedTutorial) return res.status(404).json({ message: "Tutorial not found" });
        res.json({ message: "Tutorial deleted" });
    } catch {
        res.status(400).json({ message: "Invalid ID" });
    }
});

// --------------------
// Auth routes
// --------------------
const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);

// --------------------
// Static images
// --------------------
app.use("/img", express.static("./public/img"));

// Export for Vercel serverless
module.exports = app;
