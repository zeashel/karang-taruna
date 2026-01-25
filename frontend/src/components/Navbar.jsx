import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-sm bg-body-secondary shadow mb-3 sticky-top z-100">
            <div className="container-fluid">
                <NavLink className="navbar-brand fw-bold" to="/">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1.25em"
                        height="1.25em"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide text-primary"
                        style={{
                            marginInlineEnd: "0.25em",
                            marginBottom: "0.15em",
                        }}
                    >
                        <path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" />
                        <path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7" />
                        <path d="M7 3v4a1 1 0 0 0 1 1h7" />
                    </svg>
                    Recompiled.
                </NavLink>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav me-auto mb-2 mb-sm-0">
                        <li className="nav-item">
                            <NavLink
                                to="/"
                                end
                                className={({ isActive }) =>
                                    `nav-link ${isActive ? "active" : ""}`
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/products"
                                className={({ isActive }) =>
                                    `nav-link ${isActive ? "active" : ""}`
                                }
                            >
                                Products
                            </NavLink>
                        </li>
                    </ul>

                    {/* Right-aligned buttons */}
                    <div className="d-flex ms-auto">
                        <NavLink
                            to="/login"
                            className="btn btn-outline-primary me-2"
                        >
                            Login
                        </NavLink>
                        <NavLink
                            to="/register"
                            className="btn btn-outline-primary"
                        >
                            Register
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
