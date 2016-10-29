"use strict";

let express = require('express')
let app = express()

app.set('port', (process.env.PORT || 5000))

app.get('/', function(req, res) {
    res.send('Hello World Heroku!')
})

app.get('/json', function(req, res) {
    res.send({message: 'Hello World Heroku!'})
})

app.listen(app.get('port'), function(){
    console.log('app is running on port', app.get('port'))
})
