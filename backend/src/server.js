const express = require("express");
const app = express();

// env
require("dotenv").config();

const port = process.env.PORT || 8000;

app.use(express.json()); // for POST/PUT

const cors = require("cors");
app.use(
    cors({
        origin: process.env.CLIENT_URL,
    })
);

const Tutorial = require("./models/Tutorial");

// MongoDB
const connectDB = require("./db");
const User = require("./models/User");

(async () => {
    try {
        await User.init();
        console.log("User indexes ensured");
    } catch (err) {
        console.error("Index init error:", err);
    }
})();
connectDB().catch(console.error);

// authentication middleware (all users + admin specific)
const authMiddleware = require("./middleware/authMiddleware");
const adminMiddleware = require("./middleware/adminMiddleware.js")



/**
 * CRUD with RESTful API 
 * 
 * endpoints:
 * - POST /api/tutorials
 * - GET /api/tutorials
 * - GET /api/tutorials/:id
 * - PUT /api/tutorials/:id
 * - DELETE /api/tutorials/:id
 */

// CREATE (AUTH)
// create/post new 1 tutorial

app.post(
    "/api/tutorials",
    authMiddleware,
    adminMiddleware,
    async (req, res) => {
        try {
            const tutorial = new Tutorial(req.body);
            const savedTutorial = await tutorial.save();
            res.status(201).json(savedTutorial);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    });

// READ (NO AUTH NEEDED)

// endpoint getTutorials (get all tutorials)
app.get("/api/tutorials", async (req, res) => {
    const tutorials = await Tutorial.find().sort({ _id: 1 }); // oldest first
    res.json(tutorials);
});

// endpoint getTutorialsById (get 1 tutorial by their id)
app.get("/api/tutorials/:id", async (req, res) => {
    try {
        const tutorial = await Tutorial.findById(req.params.id);
        if (!tutorial) {
            return res.status(404).json({ message: "Tutorial not found" });
        }
        res.json(tutorial);
    } catch {
        res.status(400).json({ message: "Invalid ID" });
    }
});

// UPDATE (ADMIN AUTH)
// put/update 1 tutorial by their id

app.put(
    "/api/tutorials/:id",
    authMiddleware,
    adminMiddleware,
    async (req, res) => {
        try {
            const updatedTutorial = await Tutorial.findByIdAndUpdate(
                req.params.id,
                req.body,
                { new: true }
            );

            if (!updatedTutorial) {
                return res.status(404).json({ message: "Tutorial not found" });
            }

            res.json(updatedTutorial);
        } catch {
            res.status(400).json({ message: "Invalid ID" });
        }
    });

// DELETE (AUTH)
// delete 1 tutorial by their id

app.delete("/api/tutorials/:id",
    authMiddleware,
    adminMiddleware,
    async (req, res) => {
        try {
            const deletedTutorial = await Tutorial.findByIdAndDelete(req.params.id);

            if (!deletedTutorial) {
                return res.status(404).json({ message: "Tutorial not found" });
            }

            res.json({ message: "Tutorial deleted" });
        } catch {
            res.status(400).json({ message: "Invalid ID" });
        }
    });



// import authentication router module
const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);



// expose images
app.use("/img", express.static("./public/img"));

app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});