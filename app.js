var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./src/routes/index');
var usersRouter = require('./src/routes/users');
var ownerRouter= require('./src/routes/owner.routes');
var serviceRouter= require('./src/routes/service.routes');
var saleRouter = require ('./src/routes/sale.routes');
var petOwnerRouter = require('./src/routes/petOwner.routes');
var petRouter = require('./src/routes/pet.routes');
var localRouter = require('./src/routes/local.routes');
var productRouter = require('./src/routes/product.routes');
var inventoryRouter = require('./src/routes/inventory.routes');

// Add cors to allow cross-origin requests
var cors = require('cors');

var app = express();
const db= require('./src/models');
db.sequelize.sync({force:  true});

// view engine setup
app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(cors())

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'src/public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/owner',ownerRouter);
app.use('/service',serviceRouter);
app.use('/sale',saleRouter);
app.use('/petOwner', petOwnerRouter);
app.use('/pet', petRouter);
app.use('/local', localRouter);
app.use('/product', productRouter);
app.use('/inventory',inventoryRouter);

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
