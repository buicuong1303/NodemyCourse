// let max = 100;
// let min = 1

// let a = Math.floor(Math.random() * 10) + 1; // returns a random integer from 1 to 10
// console.log(a);

// let b = Math.floor(Math.random() * 101) + 1; // returns a random integer from 1 to 100
// console.log(b);

// let c = Math.floor(Math.random() * (101 - 50)) + 50; // returns a random integer from 50 to 100
// console.log(c);

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
console.log('random:', getRndInteger(1, 3));

let num = 7.434345;
let a = '8',
  b = '5';
console.log('round', Math.round(num));
console.log('ceil', Math.ceil(num));
console.log('floor', Math.floor(num));
console.log('round two precis', Math.round(num * 100) / 100);
console.log('sum:', parseInt(a) + parseInt(b));
console.log('pow', Math.pow(2, 10));
