const express = require("express");
const app = express();
const port = 8000;

// temp data, use monggodb later
const products = [
    {
        id: 1,
        name: "Sepatu",
        price: 200000,
        desc: "Sepatu premium berbahan kulit",
        img: "https://placehold.net/default.svg",
        discount: null,
    },
    {
        id: 2,
        name: "Tas",
        price: 160000,
        desc: "Tas pesta berbahan kulit",
        img: "https://placehold.net/default.svg",
        discount: 50,
    },
    {
        id: 3,
        name: "Jaket",
        price: 200000,
        desc: "Jaket kulit premium berwarna hitam",
        img: "https://placehold.net/default.svg",
        discount: 20,
    }
]

// endpoint getProducts (fetches all products)
app.get("/api/products", (req, res) => {
    res.json(products);
});

// endpoint getProductsById (fetches 1 product by their id)
app.get("/api/products/:id", (req, res) => {
    const id = Number(req.params.id);
    const product = products.find((p) => p.id === id);

    if (!product) {
        return res.status(404).json({ message: "Product not found" });
    }

    res.json(product);
});


app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});