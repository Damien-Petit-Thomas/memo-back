const path = require('path');
const express = require('express');
const cors = require('cors');
const multer = require('multer');
const router = require('./routers');

const app = express();



const bodyParser = multer();

app.use(bodyParser.none());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use(router);

module.exports = app;
