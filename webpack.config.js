var path = require('path');

module.exports = {
    entry: {
        main: './src/react_src/src/react_vendor/main_react.js',
        card: './src/react_src/src/react_vendor/card.js'
    },
    output: {
        filename: '[name]_react_bundle.js',
        path: path.resolve(__dirname, './public/js/')
    }
};
