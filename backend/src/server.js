const express = require("express");
const app = express();
const port = 8000;

app.use(express.json()); // for POST/PUT

const cors = require("cors");
app.use(
    cors({
        origin: "http://localhost:5173",
    })
);

const Product = require("./models/Product");

// MongoDB
const connectDB = require("./db");
connectDB().catch(console.error);



/**
 * CRUD with RESTful API 
 * 
 * endpoints:
 * - POST /api/products
 * - GET /api/products
 * - GET /api/products/:id
 * - PUT /api/products/:id
 * - DELETE /api/products/:id
 */

// CREATE
// create/post new 1 product

app.post("/api/products", async (req, res) => {
    try {
        const product = new Product(req.body);
        const savedProduct = await product.save();
        res.status(201).json(savedProduct);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// READ

// endpoint getProducts (get all products)
app.get("/api/products", async (req, res) => {
    const products = await Product.find();
    res.json(products);
});

// endpoint getProductsById (get 1 product by their id)
app.get("/api/products/:id", async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.json(product);
    } catch {
        res.status(400).json({ message: "Invalid ID" });
    }
});

// UPDATE
// put/update 1 product by their id

app.put("/api/products/:id", async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!updatedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.json(updatedProduct);
    } catch {
        res.status(400).json({ message: "Invalid ID" });
    }
});

// DELETE
// delete 1 product by their id

app.delete("/api/products/:id", async (req, res) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id);

        if (!deletedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.json({ message: "Product deleted" });
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