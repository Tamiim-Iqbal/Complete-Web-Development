const products = [
    {name: 'laptop', price: '90000', brand: 'lenovo', color: 'silver'},
    {name: 'mobile', price: '60000', brand: 'samsung', color: 'black'},
    {name: 'monitor', price: '30000', brand: 'msi', color: 'white'},
    {name: 'keyboard', price: '10000', brand: 'monka', color: 'lavender'},
    {name: 'mouse', price: '5000', brand: 'ajazz', color: 'white'}
];

// map : loop & returns 
const brands = products.map(product => product.brand);
const prices = products.map(product => product.price);
console.log(brands); 
console.log(prices);


// forEach : loop & no return
products.forEach(product => console.log(product.color))


// filter : condition true & returns
const cheap = products.filter(product => product.price < 20000);
console.log(cheap);

const specificName = products.filter(product => product.name.includes("l"))
console.log(specificName);

const white = products.filter(product => product.color === "white")
console.log(white);

// find : condition true & returns 1st element
const cheapPrice = products.filter(product => product.price < 20000);
console.log(cheapPrice);