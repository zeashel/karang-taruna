// utils/resolveImageUrl.js
import { API_URL } from "../config";

export const resolveImageUrl = (img) => {
    if (!img) return "/img/default.svg";

    // already absolute (http / https)
    if (img.startsWith("http://") || img.startsWith("https://")) {
        return img;
    }

    // relative path → backend image
    return `${API_URL}${img}`;
};