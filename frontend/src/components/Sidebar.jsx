const categories = [
    "All",
    "Kayu",
    "Listrik",
    "Bangunan",
    "Perbaikan Rumah",
    "Lainnya",
];

export default function Sidebar({ activeCategory, onSelect }) {
    return (
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
                                activeCategory === cat ? "active" : "text-body"
                            }`}
                            onClick={() => onSelect(cat)}
                        >
                            {cat}
                        </button>
                    </li>
                ))}
            </ul>
        </aside>
    );
}
