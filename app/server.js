const express = require('express');

const app     = express();

const path    = require('path');

const debug   = require('debug')('docker-dashboard:server');


app.use(express.static('public'));
app.use(express.static('node_modules'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/view/index.html'));
});

app.listen(3000, () => {
    debug("Server listening on port 3000");
});
