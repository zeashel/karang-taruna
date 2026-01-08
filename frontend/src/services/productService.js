const API_URL = "http://localhost:8000/api/products";

export const getProducts = async () => {
    const res = await fetch(API_URL);
    return res.json();
};

export const getProductById = async (id) => {
    const res = await fetch(`${API_URL}/${id}`);
    return res.json();
};
