const path = require('path')
const ExtractTextPlugin = require('mini-css-extract-plugin')

module.exports = (env, options) => {

    const isProduction = options.env.production === true;
    //console.log("options",options.env.production)

    return {
        entry : './src/app.js',
        output : {
            path : path.join(__dirname, 'public', 'dist'),
            filename : 'bundle.js'
        },
        module : {
            rules : [{
                loader : 'babel-loader',
                test : /\.js$/,
                exclude : /node_modules/
            }, {
                test : /\.s?css$/,
                use: [ExtractTextPlugin.loader, 
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    }, 
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }],
            }
        ]
        },
        plugins: [
            new ExtractTextPlugin({filename: 'styles.css'})
        ],
        devtool : isProduction ? 'source-map' : 'eval-cheap-module-source-map',
        devServer : {
            static: {
                directory: path.join(__dirname, 'public'),
            },
            historyApiFallback: true,
            
        },
        mode: 'production'
    };
};
