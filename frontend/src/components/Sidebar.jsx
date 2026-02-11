const categories = [
    "All",
    "Kayu",
    "Listrik",
    "Bangunan",
    "Perbaikan",
    "Lainnya",
];

export default function Sidebar({ activeCategory, onSelect }) {
    return (
        <>
            {/* mobile dropdown */}
            <div className="d-sm-none mb-3">
                <div className="dropdown w-100">
                    <button
                        className="btn btn-outline-primary dropdown-toggle w-100 text-start text-truncate"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        // style={{
                        //     maxWidth: "100px",
                        // }}
                    >
                        {`Category: ${activeCategory}`}
                    </button>

                    <ul className="dropdown-menu w-100">
                        {categories.map((cat) => (
                            <li key={cat}>
                                <button
                                    className={`dropdown-item ${
                                        activeCategory === cat ? "active" : ""
                                    }`}
                                    onClick={() => onSelect(cat)}
                                >
                                    {cat}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* desktop sidebar */}
            <aside
                className="card p-3 d-none d-sm-block"
                style={{ minWidth: "150px" }}
            >
                <h6 className="text-uppercase text-muted mb-3">Categories</h6>

                <ul className="nav nav-pills flex-column gap-1">
                    {categories.map((cat) => (
                        <li key={cat} className="nav-item">
                            <button
                                className={`nav-link text-start px-2 py-1 ${
                                    activeCategory === cat
                                        ? "active"
                                        : "text-body"
                                }`}
                                onClick={() => onSelect(cat)}
                            >
                                {cat}
                            </button>
                        </li>
                    ))}
                </ul>
            </aside>
        </>
    );
}
