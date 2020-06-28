const express = require('express');
const route = express.Router();

route.get('/login', (req, res) => {
  const { username, pwd } = req.body;
  res.render('login');
});

route.get('/register', (req, res) => {
  res.json();
});

module.exports = route;
