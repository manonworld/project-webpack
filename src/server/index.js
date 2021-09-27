var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')

const app = express()

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(process.env.PORT || 5000, function () {
    console.log('Example app listening on port ' + process.env.PORT + ' by default!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
