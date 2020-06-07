//@ts-nocheck
const path = require('path');
const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();

const newsRoutes = require('./api/news');

app.use(helmet());

app.use(express.static('public'));

const options = {
  setHeaders: function (res, path, stat) {
    res.set('x-timestamp', Date.now());
  },
};

app.use(express.static(path.join(__dirname, 'public'), options));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, PATCH, DELETE, OPTIONS'
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use(newsRoutes);

app.use((req, res, next) => {
  res.status(404).send('<h1>Page not found</h1>');
});

let PORT = process.env.PORT || 4010;

app.listen(PORT);

console.log(`App starting on port ${PORT}`);
