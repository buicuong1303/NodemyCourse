var person = {
  name: 'Nam',
  job: 'Dev',
  phone: 0866633805,
  company: 'Nodemy',
  group: ['Nodejs.vn', 'Nodejs Viet Nam'],
  website: 'http://nodemy.vn',
};

for (const key in person) {
  console.log(key);
}
