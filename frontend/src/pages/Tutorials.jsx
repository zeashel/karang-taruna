import { useState, useEffect } from "react";
import { getTutorials } from "../services/tutorialService";
import { motion, AnimatePresence } from "framer-motion";
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

    const filteredTutorials =
        category === "All"
            ? tutorials
            : tutorials.filter((p) => p.category === category);

    if (!tutorials) return <Loading />;

    return (
        <div>
            <h1 className="mb-4">Tutorials</h1>

            <div className="d-flex flex-column flex-sm-row gap-0 gap-sm-3">
                <Sidebar activeCategory={category} onSelect={setCategory} />

                <AnimatePresence mode="wait">
                    <motion.div
                        key={category}
                        className="product-grid"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                    >
                        {filteredTutorials.map((p) => (
                            <TutorialCard
                                key={p._id}
                                id={p._id}
                                name={p.name}
                                desc={p.desc}
                                img={p.img}
                                category={p.category}
                                type={p.type}
                            />
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}

export default Tutorials;
