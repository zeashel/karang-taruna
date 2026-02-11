import { Link } from "react-router-dom";
import { isLoggedIn } from "../utils/authHelper";
import { useState } from "react";

import Carousel from "../components/Carousel";
import Alert from "../components/Alert";
import Logo from "../components/Logo";

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

            <div className="text-center p-1 d-lg-none">
                <Logo height="auto" width="100px" />
            </div>
            <div className="d-flex align-items-center justify-content-center gap-3">
                <div className="d-none d-lg-inline">
                    <Logo height="auto" width="75px" />
                </div>
                <h1 className="display-1 mb-2 mt-2 fw-bold">
                    D.Y.
                    <span className="text-primary">
                        D<span className="text-body">.</span>A
                        <span className="text-body">.</span>
                    </span>
                </h1>
            </div>
            <p className="text-muted small lead mb-4 mx-2">
                <span className="text-body">Digital Youth Desa Anggrek,</span>{" "}
                platform digital panduan bertukang untuk pemuda Karang Taruna
                Anggrek.
            </p>
            <div className="btn-home-parent d-flex justify-content-center align-items-center gap-2 mb-3 w-100">
                <Link
                    className="btn-home btn btn-primary btn-lg hover-btn"
                    to="/tutorials"
                >
                    Lihat Tutorials
                </Link>
                {isLoggedIn() ? (
                    // if user is logged in, disable button
                    <button
                        className="btn-home btn btn-outline-primary btn-lg hover-btn"
                        aria-disabled="true"
                        onClick={() => loggedInAlert()}
                    >
                        Buat Akun
                    </button>
                ) : (
                    // if user is not logged in, enable button
                    <Link
                        className="btn-home btn btn-outline-primary btn-lg hover-btn"
                        to="/register"
                    >
                        Buat Akun
                    </Link>
                )}
            </div>
            <Carousel />
        </div>
    );
}
