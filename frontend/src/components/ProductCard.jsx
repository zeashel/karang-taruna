import React from "react";

function ProductCard({ name, price, desc, img }) {
    return (
        <div className="card h-100">
            <img src={img} className="card-img-top img-fluid" alt={name} />

            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text mb-1">Rp{price}</p>
                <p className="card-text">
                    <small className="text-muted">{desc}</small>
                </p>
            </div>
        </div>
    );
}

export default ProductCard;
