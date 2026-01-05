import React, { useState, useEffect } from "react";
import ProductCard from "./components/ProductCard";

function App() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // simulasi ambil data
        const data = [
            {
                id: 1,
                name: "Sepatu",
                price: 200000,
                desc: "Sepatu premium berbahan kulit",
                img: "https://placehold.net/default.svg",
            },
            {
                id: 2,
                name: "Tas",
                price: 160000,
                desc: "Tas pesta berbahan kulit",
                img: "https://placehold.net/default.svg",
            },
            {
                id: 3,
                name: "Jaket",
                price: 200000,
                desc: "Jaket kulit premium berwarna hitam",
                img: "https://placehold.net/default.svg",
            },
        ];
        setProducts(data);
    }, []);

    return (
        <div className="container py-4">
            <h1 className="mb-4">Daftar Produk</h1>

            <div className="row">
                {products.map((p) => (
                    <div key={p.id} className="col-12 col-md-6 col-lg-4">
                        <ProductCard
                            name={p.name}
                            price={p.price}
                            desc={p.desc}
                            img={p.img}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;
