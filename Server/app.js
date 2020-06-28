const express = require('express');
const app = express();
const routeUser = require('./routes/routesUser');
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
  session({
    resave: true,
    saveUninitialized: true,
    secret: 'somesecret',
    cookie: { maxAge: 60000 },
  }),
);
app.use('/api/users', routeUser);
app.get('/login', (req, res, next) => {
  res.render('login');
});
app.post('/login', (req, res, next) => {
  const { username, password } = req.body;

  if (username === 'admin' && password === 'admin') {
    req.session.username = username;
    console.log(req.session.username, 'abc');
    res.redirect('/home');
  } else res.statusCode(403);
});
app.get('/register', (req, res, next) => {
  res.render('register');
});
app.get('/home', (req, res, next) => {
  if (req.session.username === 'admin') {
    res.render('home', { username: req.session.username });
  } else res.redirect('/login');
});
app.listen(3000, () => console.log(`server start at port `));
