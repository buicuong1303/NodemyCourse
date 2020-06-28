const express = require('express');
const route = express.Router();
route.get('/books/:id', (req, res) => {
  const { id } = req.params;
  res.json();
});

route.get('/books', (req, res) => {
  const { type } = req.query;
  res.json();
});

module.exports = route;
