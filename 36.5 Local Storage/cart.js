const addProduct = () => {
    const productName = document.getElementById("product-name");
    const productQuantity = document.getElementById("product-quantity");

    const product = productName.value;
    const quantity = productQuantity.value;

    productName.value = '';
    productQuantity.value = '';

    console.log(product, quantity);
    displayProduct(product, quantity);
    saveLocalStorage(product, quantity);
}

const displayProduct = (product, quantity) => {

    const ul = document.getElementById("product-container");
    const li = document.createElement("li");
    li.innerText = `${product} : ${quantity}`;
    ul.appendChild(li);
}


const getStoredCart = () => {

    let cart = {}
    const storedCart = localStorage.getItem('cart');
    if(storedCart){
        cart = JSON.parse(storedCart)
    }
    return cart;

}


const saveLocalStorage = (product, quantity) => {

    const cart = getStoredCart();
    cart[product] = quantity;
    
    const cartStringify = JSON.stringify(cart);
    console.log(cartStringify);
    localStorage.setItem('cart', cartStringify);
}

const displayStorageProducts = () => {

    const savedCart = getStoredCart();
    // console.log(savedCart);

    for(const product in savedCart)
    {
        const quantity = savedCart[product]
        // console.log(product, quantity);
        displayProduct(product, quantity);
    }
}
displayStorageProducts();