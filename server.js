const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var mongoose = require('mongoose');
var dbURI;
const config = require('./src/config/database'); // get db config file
const device = require('./src/controllers/deviceDataController');

const router = express.Router();


const forceSSL = function() {
    return function(req, res, next) {
        if (req.headers['x-forwarded-proto'] !== 'https') {
            return res.redirect(['https://', req.get('Host'), req.url].join(''));
        }
        next();
    }
}


//app.use(forceSSL());//use when pushing code to heroku

app.use(express.static(__dirname + '/dist'));

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());

app.use(function(req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.get('/', function(req, res) {
    res.send('Hello! The API is at http://localhost:' + 8080 + '/api');
});

// if(process.env.NODE_ENV =='Development'){
//     dbURI = config.development.db;
// }else{
//     dbURI = config.local.db;
// }
dbURI = config.development.db;
console.log('dbURI' + dbURI);
mongoose.connect(dbURI);



//wont work in office as wirelessDnet blocks mlabs

//have to move it to local mongo



//******************************Start of API Calls*****************************************

// Get a list of all registered leaders
router.use('/api/deviceData', device.getDeviceData);
router.use('/api/requestDevice', device.requestDevice);
//******************************End of API Calls*****************************************

app.use('/', router);


console.log(process.env.NODE_ENV);

// For all GET requests, send back index.html
// so that PathLocationStrategy can be used
// app.get('/*', function(req, res) {
//     res.sendFile(path.join(__dirname + '/dist/index.html'));
// });

// Start the app by listening on the default
// Heroku port
app.listen(process.env.PORT || 8080);
console.log(process.env.PORT)