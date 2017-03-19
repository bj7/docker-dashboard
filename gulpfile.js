var gulp    = require('gulp');
// var express = require('./app/server');
var gls     = require('gulp-live-server');

gulp.task('default', function() {
    console.log("doing nothing...");
    return;
});
gulp.task('serve', function() {
    console.log("Serving ./app/server.js...");
    var server = gls.new('./app/server.js');
    server.start();

    gulp.watch('./app/server.js', function() {
        console.log('./app/server.js changed; restarting...');
        server.stop();
        server.start();
        console.log("server restarted");
    })
});
// gulp.task('stop', function() {
//     server.stop();
//     return;
// })