import { Link } from "react-router-dom";
import Carousel from "../components/Carousel";

export default function Home() {
    return (
        <div className="container pt-4 text-center">
            <h1 className="display-1 fw-bold text-decoration-underline link-underline-primary mb-2">
                Recompiled.
            </h1>
            <p className="text-muted lead mb-3">
                Retro technology, carefully{" "}
                <span className=" text-body">recompiled</span> for today.
            </p>
            <Carousel />
            <Link
                className="btn btn-primary btn-lg hover-btn my-2"
                to="/products"
            >
                Browse Inventory
            </Link>
        </div>
    );
}
