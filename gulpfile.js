const gulp          = require('gulp');
const gls           = require('gulp-live-server');
const run           = require('gulp-run');
const sync          = require('browser-sync').create();

gulp.task('default', ['serve', 'browser-sync', 'watch:babel'], () => {
    console.log("Starting up server and watchers...");
});

// Start the express server and watch if primary files change.
gulp.task('serve', () => {
    console.log("Serving ./app/server.js...");
    const server = gls.new('./app/server.js');
    server.start();
    // Reload server is primary files change
    gulp.watch('./app/*.js', () => {
        console.log('./app/server.js changed; restarting...');
        server.stop();
        server.start();
        console.log("server restarted");
    });
});
