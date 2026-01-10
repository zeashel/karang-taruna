import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import BackButton from "../components/BackButton";
import { getProductById } from "../services/productService";
import { resolveImageUrl } from "../utils/resolveImageUrl";

export default function ProductDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        getProductById(id).then((data) => setProduct(data));
    }, [id]);

    if (!product) return <p className="display-5 text-center">Loading...</p>;

    const priceStr = product.price.toLocaleString("id-ID");

    const priceElem =
        // if discounted
        product.discount !== null && product.discount !== undefined ? (
            <>
                <h2 className="text-primary">
                    Rp
                    {(
                        product.price *
                        (1 - product.discount / 100)
                    ).toLocaleString("id-ID")}{" "}
                </h2>
                <p>
                    <small class="alert alert-primary p-1">
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

    return (
        <div>
            <BackButton />
            <div className="row">
                <div className="col-md-4">
                    <img
                        className="rounded img-fluid"
                        src={resolveImageUrl(product.img)}
                    />
                    <div className="d-flex gap-2 my-3 w-100">
                        <button className="btn btn-primary btn-lg hover-btn">
                            Add to Cart
                        </button>
                        <button
                            className="btn btn-outline-primary btn-lg hover-btn"
                            title="Add to Wishlist"
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
                                <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" />
                            </svg>
                        </button>
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
