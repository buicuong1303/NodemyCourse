const express = require('express');
const app = express();
const routeNodemy = require('./routes/nodemyRouter');

app.use('/nodemy', routeNodemy);
app.listen(8000, () => console.log(`server start at port `));
