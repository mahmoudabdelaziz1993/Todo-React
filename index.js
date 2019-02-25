const indexRouter = require('./routes/index');
const authRouter = require('./routes/auth');
const apiRouter = require('./routes/api');
const passportSteup = require('./services/passport');
const passport = require('passport');
var session = require('express-session');
const keys = require('./config/keys');
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
const express = require('express');


const app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
var SessionMiddleware = session({
    secret: keys.session_secret,
    resave: false,
    saveUninitialized: true,
    // store: new MongoStore({
    //     mongooseConnection: mongoose.connection
    // })
});
app.use(SessionMiddleware);
app.use(passport.initialize());
app.use(passport.session());
app.use('/',indexRouter);
app.use('/auth',authRouter);
app.use('/api',apiRouter);
if (process.env.NODE_ENV === "production"){
    // express will serve production assets
    app.use(express.static('client/build'));
    // if it doesn't recognize the route 
    const path = require('path');
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'));
    });
}

app.listen(port, () => console.log(` app on port ${port}!`));
