import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/authService";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        if (!error) return;
        const id = setTimeout(() => setError(""), 5000); // 5 seconds
        return () => clearTimeout(id);
    }, [error]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = await login(email, password);
            localStorage.setItem("token", data.token);
            navigate("/products");
        } catch (err) {
            const msg =
                err?.response?.data?.message || "Email or password incorrect";
            setError(msg);
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center h-100 my-5">
            <div className="container" style={{ maxWidth: 450 }}>
                {error && (
                    <div className="position-fixed top-0 start-50 translate-middle-x mt-5 z-100">
                        <div className="alert alert-danger mt-4">{error}</div>
                    </div>
                )}
                <h1 className="mb-3">Login</h1>

                <form onSubmit={handleSubmit} style={{ marginBottom: 0 }}>
                    <input
                        type="email"
                        className="form-control mb-2"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <input
                        type="password"
                        className="form-control mb-3"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <button type="submit" className="btn btn-primary w-100">
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}
