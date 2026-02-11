// api/auth/register.js
import connectDB from "../../src/db";
import User from "../../src/models/User";
import bcrypt from "bcryptjs";

export default async function handler(req, res) {
    await connectDB();

    res.setHeader("Access-Control-Allow-Origin", process.env.CLIENT_URL);
    res.setHeader("Access-Control-Allow-Methods", "POST,OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type,Authorization");
    if (req.method === "OPTIONS") return res.status(200).end();

    if (req.method !== "POST") {
        res.setHeader("Allow", ["POST"]);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }

    const { username, password } = req.body;
    if (!username || !password)
        return res.status(400).json({ message: "Username and password required" });

    try {
        const existing = await User.findOne({ username });
        if (existing) return res.status(400).json({ message: "Username taken" });

        const hashed = await bcrypt.hash(password, 10);
        const user = new User({ username, password: hashed });
        await user.save();

        return res.status(201).json({ message: "Registration success" });
    } catch (err) {
        return res.status(500).json({ message: "Server error" });
    }
}
