import React from "react";

function ProductCard({ name, price, desc, img }) {
    return (
        <div className="card mb-3" style={{ maxWidth: 540 }}>
            <div className="row g-0">
                <div className="col-md-4 d-flex align-items-center justify-content-center">
                    <img
                        src={img}
                        className="img-fluid rounded-start"
                        alt={name}
                    />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text mb-1">
                            <strong>Price:</strong> Rp{price}
                        </p>
                        <p className="card-text">
                            <small className="text-muted">{desc}</small>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
