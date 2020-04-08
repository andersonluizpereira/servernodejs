'use strinct';

const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

mongoose.connect('mongodb://localhost:27017/ads')

const app = express();
const bodyParser = require('body-parser');

//Carrega as rotas
const index = require('./routes/index-route');
const products = require('./routes/product-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));



app.use('/', index);
app.use('/products', products);

module.exports = app;