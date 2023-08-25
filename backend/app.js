const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');
const hbs = require('hbs');
const fileUpload = require('express-fileupload');
const cors = require('cors');

require('dotenv').config();


const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');
hbs.registerHelper('json', function(data){return JSON.stringify(data);})
hbs.registerHelper('selected', function (id1, id2){  if(parseInt(id1) === parseInt(id2)){return 'selected'}})
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));  
app.use(session({
  secret: '65dfs6d5f5s4df65956s2d32f1',
  resave: false,
  saveUninitialized: true
}));

app.use(fileUpload({
  useTempFiles : true,
  tempFileDir : '/tmp/'
}));

//Session handler
app.use(function(req, res, next) {
  res.locals.session = req.session;
  next();
});

//Rutes
app.use('/', require('./routes/index'));
app.use('/usuarios', require('./routes/usuarios'));
app.use('/clientes', require('./routes/clientes'));
app.use('/peds', require('./routes/peds'));
app.use('/auth', require('./routes/auth'));
app.use('/api', cors(), require('./routes/api'));



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});





module.exports = app;
