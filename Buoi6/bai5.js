var greeting = ' Welcome to Nodemy, Nodemy is stand for Nodejs Academy ';
console.log('Số kí tự:', greeting.length);
console.log(greeting.indexOf('Academy'));
console.log(greeting.startsWith('Welcome'));
console.log(greeting.substring(greeting.indexOf('Academy'), greeting.indexOf('Academy') + greeting.length));
console.log(greeting.trim());
console.log(greeting.includes('Nodemy'));
console.log(greeting.replace('Nodemy', 'NODEMY'));
console.log(greeting.charAt(4));
