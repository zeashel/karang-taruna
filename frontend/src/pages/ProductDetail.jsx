import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductById } from "../services/productService";

export default function ProductDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        getProductById(id).then((data) => setProduct(data));
    }, [id]);

    if (!product) return <p className="display-5 text-center">Loading...</p>;

    return (
        <div className="container py-4">
            <h2>{product.name}</h2>
            <p>Harga: Rp {product.price}</p>
            <p>{product.desc}</p>
        </div>
    );
}
