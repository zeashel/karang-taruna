const mongoose = require("mongoose");

const tutorialSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            enum: ["article", "video"],
            required: true
        },
        category: {
            type: String,
            enum: ["Kayu", "Listrik", "Bangunan", "Perbaikan Rumah", "Lainnya"],
            default: "Lainnya"
        },
        desc: {
            type: String,
            default: "No description given.",
        },
        content: {
            type: String,
            default: "No description given.",
        },
        details: {
            type: String,
            default: "No details given.",
        },
        img: {
            type: String,
            default: "/img/default.svg",
        },
        createdAt: {
            type: Date,
            default: Date.now
        }
    }
);

module.exports = mongoose.model("Tutorial", tutorialSchema);
