import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductById } from "../services/productService";
import { addToCart } from "../services/cartService";
import { resolveImageUrl } from "../utils/resolveImageUrl";
import { isLoggedIn } from "../utils/authHelper";

import BackButton from "../components/BackButton";
import Alert from "../components/Alert";
import Loading from "../components/Loading";

export default function ProductDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [alertMessage, setAlertMessage] = useState("");

    useEffect(() => {
        getProductById(id).then((data) => setProduct(data));
    }, [id]);

    if (!product) return <Loading />;

    const priceStr = product.price.toLocaleString("id-ID");

    // handle discounts
    const discountPercent = product.discount ?? 0; // treats null/undefined as 0
    const priceDiscounted = product.price * (1 - discountPercent / 100);
    const priceDiscountedStr = priceDiscounted.toLocaleString("id-ID");

    function addToCartButton() {
        addToCart({
            productId: product._id,
            name: product.name,
            price: product.price,
            img: product.img,
            discount: product.discount,
            priceDiscounted: priceDiscounted,
        });
        addToCartAlert();
    }

    function addToCartAlert() {
        setAlertMessage(`${product.name} added to cart.`);
    }

    const priceElem =
        product.discount !== null && product.discount !== undefined ? (
            // if discounted
            <>
                <h2 className="text-primary">Rp{priceDiscountedStr} </h2>
                <p>
                    <small className="alert alert-primary p-1">
                        {product.discount}% OFF
                    </small>{" "}
                    <span className="text-muted opacity-50 text-decoration-line-through">
                        Rp{priceStr}
                    </span>
                </p>
            </>
        ) : (
            // if no discount
            <h2>Rp{priceStr}</h2>
        );

    const bookmarkSvg = (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
                margin: "0px",
                marginBottom: "3px",
                marginRight: "0.3em",
            }}
            className="lucide lucide-bookmark-icon lucide-bookmark"
        >
            <path d="M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z" />
        </svg>
    );

    return (
        <div>
            <Alert
                message={alertMessage}
                type="success"
                duration={3000}
                onClose={() => setAlertMessage("")}
            />

            <BackButton />

            <div className="row">
                <div className="col-md-4">
                    <img
                        className="rounded img-fluid"
                        src={resolveImageUrl(product.img)}
                    />
                    <div className="d-flex gap-2 my-3 w-100">
                        {isLoggedIn() ? (
                            // if logged in, add item to cart
                            <button
                                className="btn btn-primary btn-lg hover-btn"
                                onClick={() => addToCartButton()}
                                title="Bookmark This Lesson"
                            >
                                {bookmarkSvg}Bookmark
                            </button>
                        ) : (
                            // if not logged in, direct to /login (/bookmarks protected) with error message
                            <Link
                                className="btn btn-primary btn-lg hover-btn"
                                to="/bookmarks"
                                title="Bookmark This Lesson"
                            >
                                {bookmarkSvg}Bookmark
                            </Link>
                        )}
                        <button
                            className="btn btn-outline-primary btn-lg hover-btn"
                            title="Give Rating"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="square"
                                strokeLinejoin="square"
                                className="lucide lucide-heart-icon lucide-heart"
                                style={{
                                    marginBottom: "5px",
                                }}
                            >
                                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="col-md-8">
                    <h3 className="mb-0">{product.name}</h3>
                    <p className="text-muted mb-3">{product.desc}</p>
                    {priceElem}
                    <hr />
                    <h4>Description</h4>
                    <p>{product.long_desc}</p>
                    <h4 className="mt-3">Details</h4>
                    <p>{product.details}</p>
                </div>
            </div>
        </div>
    );
}
