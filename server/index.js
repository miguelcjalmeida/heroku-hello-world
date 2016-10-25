let express = require('express')
let app = express()

app.get('/', function(req, res) {
    res.send('Hello World Heroku!')
})

app.get('/json', function(req, res) {
    res.send({message: 'Hello World Heroku!'})
})

app.listen(3000)