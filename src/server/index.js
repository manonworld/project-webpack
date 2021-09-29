var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')

const app = express()

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

let port = process.env.PORT || 5000;

app.listen(port, function () {
    console.log('App is listening on port ' + port + ' by default!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
