// api/tutorials/[id].js
import connectDB from "../../src/db";
import Tutorial from "../../src/models/Tutorial";
import authMiddleware from "../../src/middleware/authMiddleware";
import adminMiddleware from "../../src/middleware/adminMiddleware";

export default async function handler(req, res) {
    await connectDB();

    res.setHeader("Access-Control-Allow-Origin", process.env.CLIENT_URL);
    res.setHeader("Access-Control-Allow-Methods", "GET,PUT,DELETE,OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type,Authorization");
    if (req.method === "OPTIONS") return res.status(200).end();

    const { id } = req.query;

    try {
        if (req.method === "GET") {
            const tutorial = await Tutorial.findById(id);
            if (!tutorial) return res.status(404).json({ message: "Not found" });
            return res.status(200).json(tutorial);
        }

        if (req.method === "PUT") {
            await authMiddleware(req, res);
            await adminMiddleware(req, res);

            const updated = await Tutorial.findByIdAndUpdate(id, req.body, { new: true });
            if (!updated) return res.status(404).json({ message: "Not found" });
            return res.status(200).json(updated);
        }

        if (req.method === "DELETE") {
            await authMiddleware(req, res);
            await adminMiddleware(req, res);

            const deleted = await Tutorial.findByIdAndDelete(id);
            if (!deleted) return res.status(404).json({ message: "Not found" });
            return res.status(200).json({ message: "Deleted" });
        }

        res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    } catch (err) {
        return res.status(400).json({ message: "Invalid ID" });
    }
}
