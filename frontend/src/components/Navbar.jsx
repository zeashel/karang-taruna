import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { isLoggedIn, logout } from "../utils/authHelper";
import { getCartCount } from "../services/cartService";
import Logo from "./Logo";

function Navbar() {
    const navigate = useNavigate();
    const loggedIn = isLoggedIn();
    const [cartCount, setCartCount] = useState(0);

    const MAX_DISPLAY = 99; // if the cart count exceeds 99, show just "99+"
    const displayCount =
        cartCount > MAX_DISPLAY ? `${MAX_DISPLAY}+` : String(cartCount);

    useEffect(() => {
        setCartCount(getCartCount());

        function syncCart() {
            setCartCount(getCartCount());
        }

        window.addEventListener("cartUpdated", syncCart);
        return () => window.removeEventListener("cartUpdated", syncCart);
    }, []);

    function handleLogout() {
        logout();
        navigate("/login");
    }

    function cartButton(isDesktop = true) {
        return (
            <NavLink
                to="/cart"
                // if desktop / if mobile
                className={`btn btn-outline-primary me-2 position-relative ${
                    isDesktop ? "d-none d-sm-block" : "d-sm-none"
                }`}
                // if desktop / if mobile
                title={`My Cart ${isDesktop ? "Desktop" : "Mobile"}`}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.5em"
                    height="1.5em"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{
                        marginBottom: "2px",
                        marginRight: "2px",
                    }}
                    className="lucide lucide-shopping-cart-icon lucide-shopping-cart"
                >
                    <circle cx="8" cy="21" r="1" />
                    <circle cx="19" cy="21" r="1" />
                    <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                </svg>
                {cartCount > 0 && loggedIn && (
                    <span
                        className="position-absolute top-0 start-0 translate-middle badge rounded-pill text-bg-light"
                        style={{
                            fontSize: "0.6rem",
                        }}
                        aria-live="polite"
                    >
                        {displayCount}
                        <span className="visually-hidden">items in cart</span>
                    </span>
                )}
            </NavLink>
        );
    }

    return (
        <nav className="navbar navbar-expand-sm bg-body-secondary shadow mb-3 sticky-top z-100">
            <div className="container-fluid">
                {/* BRAND */}
                <NavLink className="navbar-brand fw-bold" to="/">
                    <span className=" text-primary">
                        <Logo
                            width="20em"
                            height="20em"
                            strokeWidth="1.5"
                            className="text-primary"
                            style={{
                                marginRight: "0.25em",
                                marginBottom: "0.25em",
                            }}
                        />
                    </span>
                    DYDA
                </NavLink>

                <div className="d-flex align-items-stretch">
                    {/* CART (MOBILE) */}
                    {cartButton(false)}
                    {/* MOBILE MENU */}
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
                </div>

                {/* left collapse */}
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

                    {/* right collapse */}
                    <div className="d-flex ms-auto">
                        {/* CART (DESKTOP) */}
                        {cartButton(true)}
                        {/* AUTH BUTTONS */}
                        {loggedIn ? (
                            <>
                                <button
                                    onClick={handleLogout}
                                    className="btn btn-outline-primary w-100"
                                >
                                    Logout
                                </button>
                            </>
                        ) : (
                            <>
                                <NavLink
                                    to="/login"
                                    className="btn btn-outline-primary me-2 w-100"
                                >
                                    Login
                                </NavLink>
                                <NavLink
                                    to="/register"
                                    className="btn btn-outline-primary w-100"
                                >
                                    Register
                                </NavLink>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
