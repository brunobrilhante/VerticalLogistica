require('dotenv').config();
const express = require('express');
const app = express();
const uploadRoutes = require('./routes/uploadRoutes');

app.use(express.json());
app.use('/', uploadRoutes);

module.exports = app;