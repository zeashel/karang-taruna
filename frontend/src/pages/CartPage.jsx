// src/pages/CartPage.jsx
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCart, removeFromCart, clearCart } from "../services/cartService";
import { resolveImageUrl } from "../utils/resolveImageUrl";

import BackButton from "../components/BackButton";

export default function CartPage() {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        setCart(getCart()); // product.ATTR from ProductDetail.jsx
    }, []);

    const total = cart.reduce(
        (sum, product) => sum + product.priceDiscounted * product.quantity,
        0
    );

    return (
        <div className="px-lg-5 mx-lg-5 px-1">
            <BackButton />
            <h1 className="mb-4">My Cart</h1>

            {cart.length === 0 ? (
                <div className="card">
                    <p className="text-muted text-center h3 fw-light mt-5">
                        Your cart is empty.
                    </p>
                    <Link to="/products">
                        <p className="text-center h5 fw-light mb-5">
                            Shop for Products
                        </p>
                    </Link>
                </div>
            ) : (
                <>
                    {cart.map((product) => (
                        <div
                            key={product.productId}
                            className="card mb-3 shadow-sm"
                        >
                            <div className="card-body d-flex align-items-center justify-content-between p-0">
                                {/* product image */}
                                <img
                                    src={resolveImageUrl(product.img)}
                                    alt={product.name}
                                    className="img-fluid rounded-start"
                                    style={{
                                        width: "100px",
                                        height: "100px",
                                        objectFit: "cover",
                                    }}
                                />

                                {/* product info */}
                                <div className="flex-grow-1 ms-3">
                                    <h6 className="mb-1">{product.name}</h6>
                                    <small className="text-muted">
                                        Qty: {product.quantity}
                                    </small>
                                </div>

                                {/* price */}
                                <div className="text-end me-3">
                                    <p className="lh-xs mb-1">
                                        {product.discount !== null &&
                                        product.discount !== undefined ? (
                                            // if discounted
                                            <>
                                                <strong className="text-primary-emphasis">
                                                    Rp
                                                    {(
                                                        product.priceDiscounted *
                                                        product.quantity
                                                    ).toLocaleString(
                                                        "id-ID"
                                                    )}{" "}
                                                </strong>
                                                <br />
                                                <span className="text-smallest text-muted text-decoration-line-through">
                                                    Rp
                                                    {(
                                                        product.price *
                                                        product.quantity
                                                    ).toLocaleString("id-ID")}
                                                </span>
                                            </>
                                        ) : (
                                            // if no discount
                                            <strong className="lh-base">
                                                Rp
                                                {(
                                                    product.priceDiscounted *
                                                    product.quantity
                                                ).toLocaleString("id-ID")}
                                            </strong>
                                        )}
                                    </p>
                                    {/* actions */}
                                    <div>
                                        <button
                                            className="btn btn-sm btn-outline-danger"
                                            style={{
                                                padding: "0.05rem 0.5rem",
                                            }}
                                            onClick={() => {
                                                removeFromCart(
                                                    product.productId
                                                );
                                                setCart(getCart());
                                            }}
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* cart summary */}
                    <div className="mt-4">
                        <div className="d-flex justify-content-between align-items-center">
                            <h5 className="mb-0">
                                Total:{" "}
                                <strong>
                                    Rp{total.toLocaleString("id-ID")}
                                </strong>
                            </h5>

                            <div className="d-flex gap-2">
                                <button
                                    className="btn btn-outline-secondary hover-btn"
                                    onClick={() => {
                                        clearCart();
                                        setCart(getCart());
                                    }}
                                >
                                    Clear Cart
                                </button>

                                <button
                                    className="btn btn-primary hover-btn"
                                    onClick={() => {
                                        // placeholder
                                        alert("Checkout clicked (Demo)");
                                    }}
                                >
                                    Checkout
                                </button>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
