let array = [1, 5, 7, 8, 9, 15];

let eventArray = array.filter((item) => item % 2 === 0);

let oddArray = array.filter((item) => item % 2 !== 0);

let divisible = array.filter((item) => item % 5 === 0);

let largerOrEq5 = array.filter((item) => item >= 5);

let increase = array.map((item) => {
  return item > 5 ? item + 1 : item;
});

let stt = 3;
let slice = array.slice(stt - 1);

let start = 0;
let deleteCount = 1;
array.splice(start, deleteCount);

array.push(100);
console.log(array);

console.log(array.map((item) => item * 2));
