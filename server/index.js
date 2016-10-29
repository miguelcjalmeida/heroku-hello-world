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
  response.send(cool());
});

app.listen(app.get('port'), function(){
    console.log('app is running on port', app.get('port'))
})
