var path = require('path');
var SpritesmithPlugin = require('webpack-spritesmith');

module.exports = {
    entry: path.resolve(__dirname, 'js/index.js'),
    output: {
        path: path.resolve(__dirname, 'assets'),
        filename: "bundle.js"
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    plugins: [
        new SpritesmithPlugin({
            src: {
                cwd: path.resolve(__dirname, 'images/sprites/'),
                glob: '*.png'
            },
            target: {
                image: path.resolve(__dirname, 'assets/sprite.png'),
                css: path.resolve(__dirname, 'css/sprite.scss')
            },
            apiOptions: {
                cssImageRef: "../assets/sprite.png"
            }
        })
    ]
};