import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { login } from "../services/authService";
import Alert from "../components/Alert";
import Logo from "../components/Logo";

export default function Login() {
    const navigate = useNavigate();
    const location = useLocation();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    // If redirected from ProtectedRoute, show alert
    useEffect(() => {
        if (location.state?.alert) {
            // Force a state update so Alert runs animation properly
            setError("");
            requestAnimationFrame(() => {
                setError(location.state.alert);
            });

            // Remove the state so it doesn't re-trigger on refresh
            navigate(location.pathname, { replace: true, state: {} });
        }
    }, [location, navigate]);

    async function handleSubmit(e) {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            await login(username, password);
            navigate("/products");
        } catch (err) {
            setError(err.message || "Login failed");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="container py-5">
            <div className="row justify-content-center align-items-center gap-5">
                <div className="col-auto d-flex align-items-center mx-3 d-none d-lg-block text-primary">
                    <Logo
                        width="300px"
                        height="300px"
                        viewBox="1.5 1.9 21 21"
                        strokeWidth="1"
                        stroke="currentColor"
                    />
                </div>
                <div className="col-lg-5">
                    <h1 className="mb-4 text-center display-3 fw-normal">
                        Welcome Back
                    </h1>

                    <Alert
                        message={error}
                        type="danger"
                        onClose={() => setError("")}
                    />

                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Username</label>
                            <input
                                type="text"
                                className="form-control"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="btn btn-primary w-100 py-2"
                            disabled={loading}
                        >
                            {loading ? (
                                <>
                                    <span
                                        className="spinner-border spinner-border-sm"
                                        aria-hidden="true"
                                    ></span>{" "}
                                    <span>Logging in...</span>
                                </>
                            ) : (
                                "Login"
                            )}
                        </button>
                    </form>

                    <p className="mt-3 text-center">
                        Don't have an account?{" "}
                        <Link to="/register">Register</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
