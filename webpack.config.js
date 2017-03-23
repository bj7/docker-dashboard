var path = require('path');

module.exports = {
    entry: './src/react_src/src/react_vendor/main_react.js',
    output: {
        filename: 'main_react_bundle.js',
        path: path.resolve(__dirname, './public/js/')
    }
};
