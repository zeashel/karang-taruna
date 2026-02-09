import { API_URL } from "../config";

const PRODUCT_API = `${API_URL}/api/tutorials`;

export const getProducts = async () => {
    const res = await fetch(PRODUCT_API);
    return res.json();
};

export const getProductById = async (id) => {
    const res = await fetch(`${PRODUCT_API}/${id}`);
    return res.json();
};
