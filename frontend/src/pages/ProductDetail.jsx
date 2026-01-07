import { useParams } from "react-router-dom";

function ProductDetail() {
    const { id } = useParams();

    return (
        <div className="container py-4">
            <h1>Detail Produk</h1>
            <p>ID Produk: {id}</p>
        </div>
    );
}

export default ProductDetail;
