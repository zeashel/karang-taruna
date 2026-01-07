import { Link } from "react-router-dom";
import "../scss/product-card.scss";

function ProductCard({ id, name, price, desc, img, discount }) {
    let priceElem = null;

    if (discount !== null && discount !== undefined) {
        priceElem = (
            <>
                <span
                    className="position-absolute badge rounded-pill bg-primary z-3"
                    style={{ top: "5px", right: "5px" }}
                >
                    {discount}% OFF
                </span>
                <p className="card-text text-primary mb-1">
                    Rp{price * (discount / 100)}{" "}
                    <small className="text-muted opacity-50 text-decoration-line-through">
                        Rp{price}
                    </small>
                </p>
            </>
        );
    } else {
        priceElem = <p className="card-text mb-1">Rp{price}</p>;
    }

    return (
        <Link to={`/products/${id}`} className="card-link">
            <div className="card product-card h-100" id={id}>
                <div className="product-image-wrapper">
                    <img
                        src={img}
                        className="card-img-top img-fluid"
                        alt={name}
                    />
                </div>

                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    {priceElem}
                    <p className="card-text">
                        <small className="text-muted">{desc}</small>
                    </p>
                </div>
            </div>
        </Link>
    );
}

export default ProductCard;
