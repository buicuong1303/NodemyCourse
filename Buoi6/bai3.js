let obj = [
  {
    name: 'Trung',
    class: 'Nodemy01',
    dateJoin: '05-02-2020',
    age: 20,
  },
  {
    name: 'Phong',
    class: 'Nodemy01',
    dateJoin: '06-01-2020',
    age: 19,
  },
  {
    name: 'Nam',
    class: 'Nodemy02',
    dateJoin: '25-01-2020',
    age: 21,
  },
];

console.log(
  'Tăng:',
  obj.sort((a, b) => a.age - b.age),
);
console.log(
  'Giảm:',
  obj.sort((a, b) => (a.age - b.age) * -1),
);
console.log(
  'trước tháng 2:',
  obj.filter((item) => Number(item.dateJoin.split('-')[1]) < 2),
);
console.log(
  'IN HOAHOA',
  obj.map((item) => ({ ...item, name: item.name.toUpperCase() })),
);
