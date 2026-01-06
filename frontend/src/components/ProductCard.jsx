function ProductCard({ name, price, desc, img, discount }) {
    let priceElem = null;

    if (discount !== null && discount !== undefined) {
        priceElem = (
            <>
                <span
                    class="position-absolute translate-middle badge rounded-pill bg-primary"
                    style={{ top: "5%", left: "82%" }}
                >
                    {discount}% OFF
                </span>
                <p className="card-text text-primary mb-1">
                    Rp{price * (discount / 100)}{" "}
                    <small className="text-muted opacity-50">
                        <s>Rp{price}</s>
                    </small>
                </p>
            </>
        );
    } else {
        priceElem = <p className="card-text mb-1">Rp{price}</p>;
    }

    return (
        <div className="card h-100">
            <img src={img} className="card-img-top img-fluid" alt={name} />

            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                {priceElem}
                <p className="card-text">
                    <small className="text-muted">{desc}</small>
                </p>
            </div>
        </div>
    );
}

export default ProductCard;
