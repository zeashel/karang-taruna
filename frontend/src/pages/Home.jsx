import { Link } from "react-router-dom";
import { isLoggedIn } from "../utils/authHelper";
import { useState } from "react";

import Carousel from "../components/Carousel";
import Alert from "../components/Alert";

export default function Home() {
    const [alertMessage, setAlertMessage] = useState("");

    function loggedInAlert() {
        setAlertMessage("You are already logged in.");
    }

    return (
        <div className="text-center">
            <Alert
                message={alertMessage}
                type="success"
                duration={3000}
                onClose={() => setAlertMessage("")}
            />

            <h1 className="display-3 mb-2">Digital Youth Desa Anggrek</h1>
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
                {isLoggedIn() ? (
                    // if user is logged in, disable button
                    <button
                        className="btn-home btn btn-outline-primary btn-lg hover-btn"
                        aria-disabled="true"
                        onClick={() => loggedInAlert()}
                    >
                        Create Account
                    </button>
                ) : (
                    // if user is not logged in, enable button
                    <Link
                        className="btn-home btn btn-outline-primary btn-lg hover-btn"
                        to="/register"
                    >
                        Create Account
                    </Link>
                )}
            </div>
            <Carousel />
        </div>
    );
}
