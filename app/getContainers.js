const express = require('express');

const router     = express.Router();

// route middleware that will happen on every request
router.use((req, res, next) => {
    // log each request to the console
    console.log(req.method, req.url);

    // continue doing what we were doing and go to the route
    next();
});

router.get('/', (req, res) => {
    console.log("get all containers");

    let output = null;
    docker.listContainers((err, containers) => {
        output = [];
        containers.forEach((info) => {
            console.log(info);
            output.push(info.id);
        }, this);
    });
    res.json({ containers: output });
});

module.exports = router;
