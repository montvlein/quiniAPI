const serverless = require('serverless-http')
const express = require('express')
const config = require('./config')
const app = express()
const game = require('./controllers/game')

app.listen(config, () => {
    console.log(`\nserver is running on ${config.host}:${config.port}`);
})

// parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Root endpoint
const RouterIndex = require('./router/router');
app.use('/API/v0.1/', RouterIndex)

// Default response for any other request
app.use(function(err, req, res, next) {
     res.status(err.status || 500).send(err);
     res.end();
});

let date

setInterval( () => {
    date = `${new Date().getUTCHours()}:${new Date().getUTCMinutes()}:${new Date().getUTCSeconds()}`
    if (date === '12:0:0' || date === '15:0:0' || date === '17:30:0' || date === '21:0:0') { game() } 
}, 1000)

module.exports.handler = serverless(app)
