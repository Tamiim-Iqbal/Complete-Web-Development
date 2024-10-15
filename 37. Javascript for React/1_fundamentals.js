// Six JS fundamentals that you must know

// 1. How to declare a variable using let & const 
const name = "Tamim";
let season = "Summer";
season = "Winter"

// 2. Conditions
// Six basic condition : >, <, ===, <=, >=, !==
// Multiple condition : &&, ||

// 3. Array
// index, length, push
const numbers = [89, 35, 33, 10];
numbers[0] = 56;

// 4. Loops
for(let i = 0; i<numbers.length; i++)
{
    let number = numbers[i];
    console.log(number);
}

// 5. Functions
function multi(num1, num2)
{
    const result = num1 * num2;
    return result;
}

const multiply = multi(8, 6);
console.log(multiply);

// 6. Objects
// 3 ways to access property
const student = {
    name : "tamim",
    age : 22,
}
console.log(student.age);              // direct by property
console.log(student["name"]);          // access via property name string
const myVar = 'age';
console.log(student[myVar]);           // access via property name in a variable