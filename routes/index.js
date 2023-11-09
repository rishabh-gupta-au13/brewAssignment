const express = require('express');
const app = express();
let apiPath = '/api/v1';
app.use(`${apiPath}/books`, require("./books/books"));
module.exports = app;