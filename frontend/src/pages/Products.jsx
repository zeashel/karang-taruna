import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import "../scss/product-grid.scss";

function Products() {
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
            },
        ];
        setProducts(data);
    }, []);

    return (
        <div className="container py-4">
            <h1 className="mb-4">Daftar Produk</h1>

            <div className="product-grid">
                {products.map((p) => (
                    <ProductCard
                        name={p.name}
                        price={p.price}
                        desc={p.desc}
                        img={p.img}
                        discount={p.discount}
                    />
                ))}
            </div>
        </div>
    );
}

export default Products;
