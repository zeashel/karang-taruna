const express = require("express");
const app = express();
const port = 8000;

app.use(express.json()); // for POST/PUT

// temp data, use mongodb later
let products = [
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



// RESTful API with CRUD

// CREATE
// POST new product

app.post("/api/products", (req, res) => {
    const newProduct = {
        id: products.length ? products[products.length - 1].id + 1 : 1,
        name: req.body.name,
        price: req.body.price,
        desc: req.body.desc,
        img: req.body.img,
        discount: req.body.discount,
    };

    products.push(newProduct);
    res.status(201).json(newProduct);
});

// READ

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

// UPDATE

app.put("/api/products/:id", (req, res) => {
    const id = Number(req.params.id);
    const index = products.findIndex((p) => p.id === id);

    if (index === -1) {
        return res.status(404).json({ message: "Product not found" });
    }

    products[index] = {
        ...products[index],
        name: req.body.name ?? products[index].name,
        price: req.body.price ?? products[index].price,
        desc: req.body.desc ?? products[index].desc,
        img: req.body.img ?? products[index].img,
        discount: req.body.discount ?? products[index].discount,
    };

    res.json(products[index]);
});

// DELETE

app.delete("/api/products/:id", (req, res) => {
    const id = Number(req.params.id);
    const index = products.findIndex((p) => p.id === id);

    if (index === -1) {
        return res.status(404).json({ message: "Product not found" });
    }

    products.splice(index, 1);
    res.json({ message: "Product deleted" });
});



app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});