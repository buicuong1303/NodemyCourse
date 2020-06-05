let array = [1, 5, 7, 8, 9, 15];
console.log(
  'Tăng:',
  array.sort((a, b) => a - b),
);
console.log(
  'Giảm:',
  array.sort((a, b) => -1 * (a - b)),
);
