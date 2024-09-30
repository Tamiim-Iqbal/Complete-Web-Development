const user = {id: 1023, name: 'Tamim', job: 'Student'};
// Javascript Object Notation (JSON)

const stringified = JSON.stringify(user);
// console.log(user);
// console.log(stringified);

const shop = {
    owner : 'Alia',
    address : {
        city : 'Dhaka',
        country : 'Bangladesh',
    },
    products : ['laptop', 'monitor', 'keyboard'],
    revenue : 45000,
    isOpen : true,
    isNew : false, 
}

console.log(shop);
console.log(typeof shop);

const shopJson = JSON.stringify(shop);
console.log(shopJson);
console.log(typeof shopJson);

const shopObj = JSON.parse(shopJson);
console.log(shopObj);
console.log(typeof shopObj);