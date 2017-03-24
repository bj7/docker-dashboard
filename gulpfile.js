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
    gulp.watch('./app/server.js', () => {
        console.log('./app/server.js changed; restarting...');
        server.stop();
        server.start();
        console.log("server restarted");
    });
});

// Build typescript source via npm
gulp.task('build:ts', () => {
    console.log("Building typescript sources...");
    run("npm run build").exec();
});

// watch ts files
gulp.task('watch:ts', () => {
    gulp.watch('./src/**/*.ts', ['build:ts']);
});

// auto-refresh browser upon file system change
gulp.task('browser-sync', () => {
    sync.init({
        proxy: "localhost:3000",
        files: "./public/**/*"
    });
});

// build jsx files via babel and webpack
gulp.task('build:babel', () => {
    // console.log("Building babel files...");
    // run("babel './src/react_vendor/*.jsx' -d './src/react_src/'").exec();
    console.log("bundling with webpack...");
    // setTimeout(() => {
    run("webpack --config webpack.config.js").exec();
    // }, 500);
});

// watch jsx files
gulp.task('watch:babel', () => {
    gulp.watch('./src/**/*.jsx', ['build:babel']);
});

// get running gulp processes
gulp.task('ls', () => {
    run("ps -v | grep 'gulp'").exec();
});

gulp.task('flow', () => {
    run("./node_modules/.bin/flow ./src/react_vendor/*.jsx").exec();
});
