const express    = require('express');

const app        = express();

const path       = require('path');

const getC       = require('./getContainers');

app.use(express.static('public'));
app.use(express.static('node_modules'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/view/index.html'));
});

app.use('/getContainers', getC);

app.listen(3000, () => {
    console.log("Listening to port 3000");
});
