import { useState, useEffect } from "react";
import { getTutorials } from "../services/tutorialService";
import "../scss/product-grid.scss";
import TutorialCard from "../components/TutorialCard";
import Loading from "../components/Loading";
import Sidebar from "../components/Sidebar";

function Tutorials() {
    const [tutorials, setTutorials] = useState(null);
    const [category, setCategory] = useState("All");

    useEffect(() => {
        // useEffect: run this code after React renders
        getTutorials()
            .then((data) => setTutorials(data))
            .catch((err) => console.error(err));
        console.log("fetched tutorial objects from API");
    }, []);

    if (!tutorials) return <Loading />;

    return (
        <div>
            <h1 className="mb-4">Tutorials</h1>

            <div className="d-flex flex-row gap-3">
                <Sidebar activeCategory={category} onSelect={setCategory} />

                <div className="product-grid">
                    {tutorials.map((p) => (
                        <TutorialCard
                            key={p._id} // react only prop
                            id={p._id}
                            name={p.name}
                            desc={p.desc}
                            img={p.img}
                            type={p.category}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Tutorials;
