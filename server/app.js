    
if(process.env.NODE_ENV !== 'production'){
  require('dotenv').config()
} 
//DEPENDECIES

const http = require('http');  
const createError = require('http-errors');
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const passport = require ('passport');
 
//Routes
const registerRouter = require('./routes/register');
const loginRouter = require('./routes/login');
const dashboardRouter = require('./routes/dashboard');
const authrouter = require('./routes/authentication')
const editHours = require('./routes/editHours')
//configurations
const db = require("./database/configurationSequelize")
require('./Configurations/helper/passportConfig')(passport)
db.connector.sync();
require('./Configurations/googleAuth/passportGoogleConfig')(passport)


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());
app.use(cookieParser());
app.use(cors())
app.use('/', registerRouter);
app.use('/', loginRouter);
app.use('/', authrouter);
app.use('/', dashboardRouter);
app.use('/', editHours);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});




// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
console.log(err.message)
  // render the error page
  res.status(err.status || 500);
  res.json('error');
});

module.exports = app;
