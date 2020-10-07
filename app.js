// ExpressJS Setup
const express = require('express');
const app = express();
var bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const apiRouter = require('./routes/Router')
// Constants
const PORT = 8800;
const HOST = "0.0.0.0";

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', apiRouter);
// ejs view template
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// server start
app.listen(PORT, HOST, ()=>{
    console.log(`Running on http://${HOST}:${PORT}`);
});

