const dotenv = require('dotenv');
dotenv.config();

const path = require('path');
const express = require('express');
const MeaningCloudApi = require('./MeaningCloudApi.js');
const favicon = require('serve-favicon')

const app = express();

app.use(express.static('dist'));
app.use(favicon(path.join(__dirname, 'favicon.ico')));

app.get('/', function (req, res) {
    res.sendFile('dist/index.html');
});

const api = new MeaningCloudApi();
app.get('/query', function (req, res) {
    api.query(req.query.text, req.query.lang)
        .then((data) => (
            res.send({ response: data })
        )).catch((error) => (
            console.log(JSON.stringify(error))
        ));
});

let port = process.env.PORT || 5000;

app.listen(port, function () {
    console.log('Serving on port ' + port);
});
