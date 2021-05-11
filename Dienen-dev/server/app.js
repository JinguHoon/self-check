const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const path = require('path');
const url = require('url');


app.set('view engine', 'ejs');
app.set('views', __dirname + '/../view');

app.use(express.static(__dirname + '/../public')); //use -> 미들웨어를 등록해주는 매소드
app.use(bodyParser.json());
const home = require('../routes');
app.use("/", home);

module.exports = app;