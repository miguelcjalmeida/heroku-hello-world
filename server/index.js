"use strict";

let express = require('express')
let app = express()
let cool = require('cool-ascii-faces')
let pg = require('pg');

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

app.get('/db', function (request, response) {
  pg.connect(process.env.DATABASE_URL, function(err, client, done) {
    client.query('SELECT * FROM test_table', function(err, result) {
      done();

      if (err) {
          console.error(err);
          response.send({error: err});
          return;
      }

      response.send(result);
    });
  });
});

app.listen(app.get('port'), function(){
    console.log('app is running on port', app.get('port'))
})