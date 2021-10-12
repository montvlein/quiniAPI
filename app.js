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

// Handle production
if (process.env.NODE_ENV === 'production') {
    // Static folder
    app.use(express.static(__dirname + '/public/'))

    // Handle Single Page Aplication
    app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'))
}