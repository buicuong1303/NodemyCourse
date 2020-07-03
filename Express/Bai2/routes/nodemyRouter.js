const express = require('express');
const route = express.Router();

route.get('/:tenCourse/:tenBai', (req, res, next) => {
  const { tenCourse, tenBai } = req.params;
  res.send(`Welcome to ${tenCourse} ${tenBai}`);
});
// route.get('/javascript/bai2', (req, res, next) => {
//   res.send('Welcome to javascript 2');
// });
// route.get('/html/bai1', (req, res, next) => {
//   res.send('Welcome to html 1');
// });

module.exports = route;
