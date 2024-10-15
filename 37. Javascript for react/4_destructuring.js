// Array destructuring
const number = [42, 65]
const [x, y] = number;
// console.log(x,y);

const numbers = [12, 55, 98, 23, 53, 45, 72]
const [a, b, ...remaining] = numbers
// console.log(a, b, remaining);

// Object destructuring
const student ={
    name : 'Tamim',
    id : 23,
    age: 22,
    dept : 'Cse',
    batch : 52,
    section : 'A',
    marks : {
        math : 82,
        english : 80,
        physics : 85,
    }
}

const {name, id} = student
console.log(name, id);

const {dept, batch, ...rest} = student
console.log(dept, batch, rest);

const marks = student?.marks;
console.log(marks);