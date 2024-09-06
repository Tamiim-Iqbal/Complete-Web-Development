const date = new Date('2062-10-1')             
console.log(date.getMonth());                  //month index 0 to 11

const specificDate = new Date(2091, 0, 26)
console.log(specificDate)

specificDate.setMonth(10);
console.log(specificDate);

const today = new Date();
console.log(today);
console.log(today.toLocaleString('en-GB'));