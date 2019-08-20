const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const server = require('./server');
const app = express();

app.use(morgan('dev'));
app.use(cors());