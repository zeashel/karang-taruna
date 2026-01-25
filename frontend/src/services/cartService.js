const CART_KEY = "cart";

function emitCartUpdate() {
    window.dispatchEvent(new Event("cartUpdated"));
}

export function getCart() {
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
}

export function addToCart(product) {
    const cart = JSON.parse(localStorage.getItem(CART_KEY)) || [];
    const existing = cart.find(p => p.productId === product.productId);

    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    emitCartUpdate();
}

export function removeFromCart(productId) {
    const cart = JSON.parse(localStorage.getItem(CART_KEY)) || [];
    const updated = cart.filter(p => p.productId !== productId);
    localStorage.setItem(CART_KEY, JSON.stringify(updated));
    emitCartUpdate();
}

export function clearCart() {
    localStorage.removeItem(CART_KEY);
    emitCartUpdate();
}

export function getCartCount() {
    const cart = JSON.parse(localStorage.getItem(CART_KEY)) || [];
    return cart.reduce((sum, item) => sum + item.quantity, 0);
}