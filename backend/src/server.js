const express = require("express");
const app = express();
const port = 8000;

app.get("/api/products", (req, res) => {
    // temp data
    res.json([
        { id: 1, name: "Mouse", price: 50000 },
        { id: 2, name: "Keyboard", price: 150000 }
    ]);
});

app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});

app.use(express.static("src/public"));
