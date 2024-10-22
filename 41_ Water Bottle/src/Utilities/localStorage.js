//Check if any data is available in local storage. If it exists, retrieve it
const getStoredCart = () => {
    const storedCardString = localStorage.getItem('cart');

    if(storedCardString)
    {
        return JSON.parse(storedCardString);
    }
    return [];
}

// Save to local storage
const SaveCartToLocalStorage = cart => {
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
}

// Add to local storage
const addToLocalStorage = id => {
    const cart = getStoredCart();
    cart.push(id);

    SaveCartToLocalStorage(cart);
}

// Remove from local storage
const removeFromLocalStorage = id => {
    const cart = getStoredCart();

    // remove every id
    const remaining = cart.filter(ids => ids !== id);
    SaveCartToLocalStorage(remaining);
}


export { addToLocalStorage, getStoredCart, removeFromLocalStorage}