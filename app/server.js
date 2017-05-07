const express    = require('express');

const app        = express();

const server     = require('http').Server(app);

const path       = require('path');

const getC       = require('./getContainers');

const io         = require('socket.io')(server);

const Docker = require('dockerode');

const docker = new Docker({
    socketPath: '/var/run/docker.sock'
});

function refreshContainers() {
    console.log("getting container list");
    docker.listContainers({ all: true }, (err, containers) => {
        io.emit('containers.list', containers);
    });
}

function stopContainers(c) {
    console.log("Stopping container: ", c);
    let container = docker.getContainer(c.Id);
    container.stop(() => {
        refreshContainers();
    });
}

function startContainers(c) {
    console.log("Starting container: ", c);
    let container = docker.getContainer(c.Id);
    container.start(() => {
        refreshContainers();
    });
}

app.use(express.static('public'));
app.use(express.static('node_modules'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/view/index.html'));
});

app.use('/getContainers', getC);

io.on('connection', (socket) => {
    console.log("Initial socket connection successful");
    socket.on('containers.list', () => {
        refreshContainers();
    });
    socket.on('containers.stop', (c) => {
        stopContainers(c);
    });
    socket.on('containers.start', (c) => {
        startContainers(c);
    })
});

server.listen(3000, () => {
    console.log("Listening to port 3000");
});
