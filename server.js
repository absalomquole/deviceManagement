const path = require('path');
const express = require('express');
const app = express();

// If an incoming request uses
// a protocol other than HTTPS,
// redirect that request to the
// same url but with HTTPS
const router = express.Router();
const forceSSL = function() {
    return function(req, res, next) {
        if (req.headers['x-forwarded-proto'] !== 'https') {
            return res.redirect(['https://', req.get('Host'), req.url].join(''));
        }
        next();
    }
}

// Instruct the app
// to use the forceSSL
// middleware
app.use(forceSSL());

// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/dist'));

// For all GET requests, send back index.html
// so that PathLocationStrategy can be used
app.get('/sendMail', router);

router.use('/', handleSayHello);

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
});

function handleSayHello(eq, res, next) {
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'ddblrdevicelab@gmail.com',
            pass: 'Deloitte_1234'
        }
    });
    var text = 'Hello world from \n\n';

    var mailOptions = {
        from: 'ddblrdevicelab@gmail.com', // sender address
        to: 'shubhampramanick93@gmail.com', // list of receivers
        subject: 'Email Example', // Subject line
        text: text //, // plaintext body
            // html: '<b>Hello world ✔</b>' // You can choose to send an HTML body instead
    };
    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log(error);
            res.json({ yo: 'error' });
        } else {
            console.log('Message sent: ' + info.response);
            res.json({ yo: info.response });
        };
    });
    next();

}

// Start the app by listening on the default
// Heroku port
app.listen(process.env.PORT || 8080);