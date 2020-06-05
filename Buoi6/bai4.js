var doan = {
  name: 'Doan',
  age: 22,
  salary: 1000,
};
var trung = {
  ...doan,
  clone: 'true',
};

console.log(trung);
trung.salary = 3000;
console.log({ trung, doan });
