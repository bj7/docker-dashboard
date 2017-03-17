var gulp    = require('gulp');
// var express = require('./app/server');
var gls     = require('gulp-live-server');

gulp.task('default', function() {
    console.log("doing nothing...");
    return;
});
gulp.task('serve', function() {
    var server = gls.new('./app/server.js');
    server.start();
    return;
});
// gulp.task('stop', function() {
//     server.stop();
//     return;
// })