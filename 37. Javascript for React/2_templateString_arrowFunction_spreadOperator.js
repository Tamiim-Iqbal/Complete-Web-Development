// Template String
const ids = [89, 35, 23, 10];

const student = {
    name : "tamim",
    age : 22,
    hobbies : ["Movies", "Sports", "Games"]
}

const about = `My name is ${student.name}. My id is ${ids[2]}. My favourite hobby is ${student.hobbies[0]}`;
console.log(about);


// Arrow Function
const getFifty = () => 50;
const addSixty = num => num + 60;
const isEven = x => x%2 == 0;
const addTwo = (a, b) => a+b;
const multiLine = (x, y) => {
    const sum = x + y;
    return sum;
}

// Spread Operator
const numbers = [1, 4, 8, 3, 0];
const newNumbers = [...numbers];
const currentNumbers = [...numbers, 33];

numbers.push(11)
newNumbers.push(22)

console.log(numbers);
console.log(newNumbers);
console.log(currentNumbers);
