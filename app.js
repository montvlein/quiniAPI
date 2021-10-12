const express = require('express')
const config = require('./config')
const app = express()

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
