import { API_URL } from "../config";

const TUTORIAL_API = `${API_URL}/api/tutorials`;

export const getTutorials = async () => {
    const res = await fetch(TUTORIAL_API);
    return res.json();
};

export const getTutorialById = async (id) => {
    const res = await fetch(`${TUTORIAL_API}/${id}`);
    return res.json();
};
