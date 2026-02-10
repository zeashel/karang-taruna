// src/pages/Bookmarks.jsx
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCart, removeFromCart, clearCart } from "../services/cartService";
import { resolveImageUrl } from "../utils/resolveImageUrl";

import BackButton from "../components/BackButton";

export default function Bookmarks() {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        setCart(getCart()); // tutorial.ATTR from TutorialDetail.jsx
    }, []);

    return (
        <div className="px-lg-5 mx-lg-5 px-1">
            <BackButton />
            <h1 className="mb-4">My Bookmarks</h1>

            {cart.length === 0 ? (
                <div className="card">
                    <p className="text-muted text-center h3 fw-light mt-5">
                        You don't have any bookmarks.
                    </p>
                    <Link to="/tutorials">
                        <p className="text-center h5 fw-light mb-5">
                            Check out tutorials.
                        </p>
                    </Link>
                </div>
            ) : (
                <>
                    {cart.map((tutorial) => (
                        <div
                            key={tutorial.tutorialId}
                            className="card mb-3 shadow-sm"
                        >
                            <div className="card-body bookmark-card d-flex flex-column flex-md-row align-items-left align-items-md-center justify-content-between p-0">
                                {/* tutorial image */}
                                <img
                                    src={resolveImageUrl(tutorial.img)}
                                    alt={tutorial.name}
                                    className="img-fluid rounded-start"
                                />

                                {/* tutorial info */}
                                <div className="flex-grow-1 ms-md-3 px-2">
                                    <Link
                                        to={`/tutorials/${tutorial.tutorialId}`}
                                    >
                                        <h5 className="mb-1 mt-2">
                                            {tutorial.name}
                                        </h5>
                                    </Link>
                                    <div>
                                        <span className="badge rounded-pill bg-primary me-2">
                                            {tutorial.category}
                                        </span>
                                        <span className="badge rounded-pill bg-primary">
                                            {tutorial.type}
                                        </span>
                                    </div>
                                    <small className="text-muted">
                                        {tutorial.desc}
                                    </small>
                                    <div className="mt-2 d-flex justify-content-end justify-content-md-start">
                                        <button
                                            className="btn btn-sm btn-outline-danger mb-2"
                                            onClick={() => {
                                                removeFromCart(
                                                    tutorial.tutorialId
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
                            <div className="d-flex gap-2">
                                <button
                                    className="btn btn-outline-secondary hover-btn"
                                    onClick={() => {
                                        clearCart();
                                        setCart(getCart());
                                    }}
                                >
                                    Clear All Bookmarks
                                </button>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
