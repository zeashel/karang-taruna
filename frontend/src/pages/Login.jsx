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
            setError("Email or password incorrect");
        }
    };

    return (
        <div className="container mt-5" style={{ maxWidth: 450 }}>
            <h1 className="mb-3">Login</h1>

            {error && <div className="alert alert-danger">{error}</div>}

            <form onSubmit={handleSubmit}>
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

                <button className="btn btn-primary w-100">Login</button>
            </form>
        </div>
    );
}
