const gulp          = require('gulp');
const gls           = require('gulp-live-server');
const run           = require('gulp-run');
const sync          = require('browser-sync').create();

gulp.task('default', () => {
    console.log("doing nothing...");
});
gulp.task('serve', () => {
    console.log("Serving ./app/server.js...");
    const server = gls.new('./app/server.js');
    server.start();

    gulp.watch('./app/server.js', () => {
        console.log('./app/server.js changed; restarting...');
        server.stop();
        server.start();
        console.log("server restarted");
    });
});
gulp.task('build:ts', () => {
    console.log("Building typescript sources...");
    run("npm run build").exec();
});
gulp.task('watch:ts', () => {
    gulp.watch('./src/**/*.ts', ['build:ts']);
});
gulp.task('browser-sync', () => {
    sync.init({
        proxy: "localhost:3000",
        files: "./public/**/*"
    });
});
