require('dotenv').config();
const express = require('express');
const app = express();
const connectDatabase = require('./database/db')
const uploadRoutes = require('./routes/uploadRoutes');

app.use(express.json());
app.use('/upload', uploadRoutes);

connectDatabase()
  .then(() => app.listen(3000, () => console.log(`Server running on: http://localhost:3000`)))
  .catch((err) => console.log('Error: ', err));