"use strict";

let express = require('express')
let app = express()
let cool = require('cool-ascii-faces')

app.set('port', (process.env.PORT || 5000))

app.get('/', function(request, response) {
    response.send('Hello World Heroku!')
})

app.get('/json', function(request, response) {
    response.send({message: 'Hello World Heroku!'})
})

app.get('/cool', function(request, response) {
    response.send(cool())
})

app.get('/times', function(request, response) {
    let result = ''
    let times = process.env.TIMES || 5
    for (let i=0; i < times; i++)
      result += i + ' ' + process.env.DEFAULT_TEXT + ' ';
    response.send(result)
})

app.listen(app.get('port'), function(){
    console.log('app is running on port', app.get('port'))
})