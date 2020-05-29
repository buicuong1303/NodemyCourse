const array = [1, 5, 7, 8, 9, 15, 8];

let eventArray = array.filter((item) => item % 2 === 0);
let oddArray = array.filter((item) => item % 2 !== 0);
let sumOfDivisible = array.reduce((total, item) => {
  if (item % 5 === 0) return (total = total + item);
  return total;
}, 0);
let mulThree = 1;
for (let i = 0; i < 3; i++) {
  mulThree *= array[i];
}
let sumTree = 0;
for (let i = array.length - 1; i >= array.length - 3; i--) {
  sumTree += array[i];
}
let countNumber8 = array.reduce((total, item) => {
  if (item === 8) return (total += 1);
  return total;
}, 0);
console.log(`Mảng số chẵn:${eventArray}`);
console.log(`Mảng số lẻ:${oddArray}`);
console.log(`Tổng các số chia hết cho 5:${sumOfDivisible}`);
console.log(`Tích 3 số đầu tiên:${mulThree}`);
console.log(`Tổng 3 số cuối:${sumTree}`);
console.log(`Số phần tử có giá trị là 8:${countNumber8}`);
console.log(`Mảng có tồn tại số 5 hay không?${array.includes(5)}`);
