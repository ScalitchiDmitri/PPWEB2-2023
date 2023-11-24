const express = require('express');
require('dotenv').config();
const app = express();
const router = require('./api/routes/index');
const database = require('./database');

app.use(express.json());
app.use('/', router);

database.init().then(() => {
  app.listen(process.env.SERVER_PORT, process.env.SERVER_URL, () => {
    console.log(`Example app listening on port ${process.env.SERVER_PORT}`);
  });
}).catch((error) => {
  console.error('Error initializing database:', error);
});
