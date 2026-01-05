import React from "react";

function ProductCard({ name, price, desc }) {
    return (
        <div
            style={{
                border: "1px solid #ccc",
                padding: "12px",
                marginBottom: "12px",
            }}
        >
            <h3>{name}</h3>
            <p>Price: Rp {price}</p>
            <small>{desc}</small>
        </div>
    );
}

export default ProductCard;
