import React from "react";

function ProductCard({ name, price, desc, img }) {
    return (
        <div
            style={{
                border: "1px solid #ccc",
                padding: "12px",
                marginBottom: "12px",
                fontSize: "1.2rem",
            }}
        >
            <img
                style={{
                    width: "200px",
                    height: "auto",
                }}
                src={img}
            />
            <h3>{name}</h3>
            <p>Price: Rp{price}</p>
            <small>{desc}</small>
        </div>
    );
}

export default ProductCard;
