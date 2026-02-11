// api/tutorials/index.js
import connectDB from "../../src/db";
import Tutorial from "../../src/models/Tutorial";
import authMiddleware from "../../src/middleware/authMiddleware";
import adminMiddleware from "../../src/middleware/adminMiddleware";

export default async function handler(req, res) {
    await connectDB();

    // CORS headers
    res.setHeader("Access-Control-Allow-Origin", process.env.CLIENT_URL);
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type,Authorization");
    if (req.method === "OPTIONS") return res.status(200).end();

    if (req.method === "GET") {
        const tutorials = await Tutorial.find().sort({ _id: 1 });
        return res.status(200).json(tutorials);
    }

    if (req.method === "POST") {
        try {
            await authMiddleware(req, res);
            await adminMiddleware(req, res);

            const tutorial = new Tutorial(req.body);
            const saved = await tutorial.save();
            return res.status(201).json(saved);
        } catch (err) {
            return res.status(400).json({ message: err.message });
        }
    }

    res.setHeader("Allow", ["GET", "POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
}
