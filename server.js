const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/order-app'));

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname+'/dist/order-app/index.html'));
});

// Start the app by listening on the port provided by the environment
app.listen(process.env.PORT || 8080);