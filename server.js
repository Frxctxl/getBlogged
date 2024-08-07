const express = require('express');
const session = require('express-session');
const { engine } = require('express-handlebars');

const client = require('./config/connection');
const view_routes = require('./routes/view_routes');

const app = express();
const PORT = 3001;

app.use('/', view_routes)
