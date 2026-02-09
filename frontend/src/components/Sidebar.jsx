const categories = ["All", "Technology", "Design", "Business", "Science"];

export default function Sidebar({ activeCategory, onSelect }) {
    return (
        <aside className="border-end p-3" style={{ width: "220px" }}>
            <h6 className="text-uppercase text-muted mb-3">Categories</h6>

            <ul className="nav nav-pills flex-column gap-1">
                {categories.map((cat) => (
                    <li key={cat} className="nav-item">
                        <button
                            className={`nav-link text-start ${
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
