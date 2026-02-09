import { useState, useEffect } from "react";
import { getProducts } from "../services/productService";
import "../scss/product-grid.scss";
import ProductCard from "../components/ProductCard";
import Loading from "../components/Loading";

function Products() {
    const [tutorials, setTutorials] = useState(null);

    useEffect(() => {
        // useEffect: run this code after React renders
        getProducts()
            .then((data) => setTutorials(data))
            .catch((err) => console.error(err));
        console.log("fetched tutorial objects from API");
    }, []);

    if (!tutorials) return <Loading />;

    return (
        <div>
            <h1 className="mb-4">Tutorials</h1>

            <div className="product-grid">
                {tutorials.map((p) => (
                    <ProductCard
                        key={p._id} // react only prop
                        id={p._id}
                        name={p.name}
                        desc={p.desc}
                        img={p.img}
                        type={p.type}
                    />
                ))}
            </div>
        </div>
    );
}

export default Products;
