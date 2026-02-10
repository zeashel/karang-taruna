import { Link } from "react-router-dom";
import "../scss/product-card.scss";
import { resolveImageUrl } from "../utils/resolveImageUrl";

function TutorialCard({ id, name, desc, img, category, type }) {
    return (
        <Link to={`/tutorials/${id}`} className="card-link">
            <div className="card product-card h-100" id={id}>
                <span
                    className="position-absolute badge rounded-pill bg-primary z-3 shadow"
                    style={{ top: "5px", right: "5px" }}
                >
                    {type.toUpperCase()}
                </span>
                <div className="product-image-wrapper">
                    <img
                        src={resolveImageUrl(img)}
                        className="card-img-top img-fluid"
                        alt={name}
                    />
                </div>

                <div className="card-body">
                    <h5 className="card-title mb-1">{name}</h5>
                    <p className="card-text small my-2">{`Category: ${category}`}</p>
                    <p className="card-text">
                        <small className="text-muted">{desc}</small>
                    </p>
                </div>
            </div>
        </Link>
    );
}

export default TutorialCard;
