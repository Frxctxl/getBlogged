require('dotenv').config();
const express = require('express');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const { engine } = require('express-handlebars');

const client = require('./config/connection');
const view_routes = require('./routes/view_routes');
const user_routes = require('./routes/user_routes')

const app = express();
const PORT = 3001;

app.use(express.static('./public'));
app.use(express.urlencoded({ extended: false }));

app.engine('.hbs', engine({ extname: '.hbs' }))
app.set('view engine', '.hbs');

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    store: new SequelizeStore({
      db: client,
    }),
    saveUninitialized: false,
    resave: false,
    proxy: true,
    cookie: {
      httpOnly: true
    }
  })
);

app.use('/', [view_routes, user_routes]);

client.sync({ force: false })
  .then(() => {
    app.listen(PORT, () => {
      console.log('Listening on PORT', PORT);
    })
  })

