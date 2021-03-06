const express  = require('express');
const app      = express();
const port     = process.env.PORT || 3000;
const mongoose = require('mongoose');
const passport = require('passport');
const flash    = require('connect-flash');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const path = require('path');

const mongodb = require('./config/mongodb.js');

mongoose.connect(mongodb.url);

require('./config/passport')(passport);

app.use(logger('dev'));
app.use(cookieParser());
app.use(bodyParser());

app.set('view engine', 'twig');

app.use(session({ secret: 'SiTuYCroisTresFortEtQueTonCoeurEstPurIlPeutArriverDesChosesMerveilleuses' }));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.use(express.static(path.join(__dirname, 'public')));

// Routing
require('./app/routes/indexRoute.js')(app, passport);
// \Routing

app.listen(port);
console.log('Server listening on port ' + port);
