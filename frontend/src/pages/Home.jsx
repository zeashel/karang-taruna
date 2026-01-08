import { Link } from "react-router-dom";
import Carousel from "../components/Carousel";

export default function Home() {
    return (
        <div className="text-center">
            <h1 className="display-1 fw-bold text-decoration-underline link-underline-primary mb-2">
                Recompiled.
            </h1>
            <p className="text-muted lead mb-4">
                Retro technology, carefully{" "}
                <span className=" text-body">recompiled</span> for today.
            </p>
            <div className="btn-home-parent d-flex justify-content-center align-items-center gap-2 mb-3 w-100">
                <Link
                    className="btn-home btn btn-primary btn-lg hover-btn"
                    to="/products"
                >
                    Browse Inventory
                </Link>
                <button
                    className="btn-home btn btn-outline-primary btn-lg hover-btn"
                    to="/products"
                >
                    Create Account
                </button>
            </div>
            <Carousel />
        </div>
    );
}
