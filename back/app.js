const express = require('express');
const app = express();


app.use(express.json());

const productos = require("./routes/products")
const usuarios = require("./routes/users")

//app.use('/api', productos)
app.use('/api', usuarios)

module.exports = app;