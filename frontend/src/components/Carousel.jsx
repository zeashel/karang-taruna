function Carousel() {
    return (
        <div
            id="carousel"
            className="carousel slide p-0 mx-3 mx-lg-5 my-5"
            data-bs-ride="carousel"
        >
            <div className="carousel-indicators">
                <button
                    type="button"
                    data-bs-target="#carousel"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                />
                <button
                    type="button"
                    data-bs-target="#carousel"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                />
                <button
                    type="button"
                    data-bs-target="#carousel"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                />
            </div>

            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img
                        src="img/randy-fath-ymf4_9Y9S_A-unsplash.jpg"
                        className="d-block w-100"
                        alt="..."
                    />
                </div>
                <div className="carousel-item">
                    <img
                        src="img/maxim-hopman-s4d_ESS0ylA-unsplash.jpg"
                        className="d-block w-100"
                        alt="..."
                    />
                </div>
                <div className="carousel-item">
                    <img
                        src="img/rineshkumar-ghirao-UdDjFekHQuk-unsplash.jpg"
                        className="d-block w-100"
                        alt="..."
                    />
                </div>
            </div>

            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carousel"
                data-bs-slide="prev"
            >
                <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                />
                <span className="visually-hidden">Previous</span>
            </button>

            <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carousel"
                data-bs-slide="next"
            >
                <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                />
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default Carousel;
