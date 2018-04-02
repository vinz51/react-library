const path = require('path')

module.exports = {
    output : {
        library      : "react-library",
        libraryTarget: "commonjs2"
    },
    module: {
        rules: [
            {
                test: /\.js|\.jsx$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            'env',
                            'react',
                            'stage-0'
                        ]
                    }
                }
            }
        ]
    },
    resolve : {
        extensions : ['.js','.jsx'],
        alias: {
            'react-library': path.resolve(__dirname, './dist/main.js'),
        }
    }
}
