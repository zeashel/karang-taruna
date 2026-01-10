import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const pageVariants = {
    initial: { opacity: 0, y: 10 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -10 },
};

const pageTransition = { duration: 0.25, ease: "easeOut" };

function PageWrapper({ children }) {
    return (
        <motion.div
            variants={pageVariants}
            initial="initial"
            animate="in"
            exit="out"
            transition={pageTransition}
            style={{ width: "100%" }}
        >
            {children}
        </motion.div>
    );
}

function App() {
    const location = useLocation();
    return (
        <>
            <Navbar />
            <div className="container py-lg-4 py-2">
                <AnimatePresence mode="wait">
                    <Routes location={location} key={location.pathname}>
                        <Route
                            path="/"
                            element={
                                <PageWrapper>
                                    <Home />
                                </PageWrapper>
                            }
                        />
                        <Route
                            path="/products"
                            element={
                                <PageWrapper>
                                    <Products />
                                </PageWrapper>
                            }
                        />
                        <Route
                            path="/products/:id"
                            element={
                                <PageWrapper>
                                    <ProductDetail />
                                </PageWrapper>
                            }
                        />
                    </Routes>
                </AnimatePresence>
            </div>
            <Footer />
        </>
    );
}

export default App;
