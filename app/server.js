let express = require('express');
let app     = express();
let path    = require('path');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000, function() {
    console.log('docker-dashboard listening on port 3000');
});