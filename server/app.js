/*******************
 * TO RUN:
 * Be in the server directory.
 * In the terminal, type: npm run start
 * 
 * By default, access http://localhost:3000 in your browser to see Hello World
 */

require('dotenv').config();
const createError = require('http-errors');
const express = require('express');
const logger = require('morgan');
const helmet = require('helmet');
const cors = require("cors");
const indexRouter = require('./routes/index');

const app = express();

app.use(logger('common'));

app.use(helmet()); // Some security stuff
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// UNCOMMENT FOR MORE IN-DEPTH LOGGING
// logger.token("req", (req, res) => JSON.stringify(req.headers))
// logger.token("res", (req, res) => {
//     const headers = {}
//     res.getHeaderNames().map((h) => (headers[h] = res.getHeader(h)))
//     return JSON.stringify(headers)
// })


// SET ROUTES
app.use('/api/index', indexRouter);


// UNCOMMENT FOR VARIOUS OTHER ERROR HANDLING
// catch 404 and forward to error handler
// app.use(function (req, res, next) {
//     next(createError(404));
// });
// // error handler
// app.use(function (err, req, res, next) {
//     // set locals, only providing error in development
//     res.locals.message = err.message;
//     res.locals.error = req.app.get('env') === 'development' ? err : {};

//     // render the error page
//     res.status(err.status || 500);
//     res.render('error');
// });


// START SERVER
app.listen(process.env.PORT || 5000, () => {
    console.log(`Server running at ${process.env.ADDRESS}:${process.env.PORT}`)
})

module.exports = app;
