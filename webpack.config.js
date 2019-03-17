
const HtmlWebPackPlugin = require("html-webpack-plugin");
module.exports = {
    entry:'./src/index.js',
    output:{
        filename:'main.js',
        path: __dirname + '/dist'
    },
    module: {
        rules:[{
            test:/\.(jsx|js)$/,
            exclude:'/node-modules/',
            use:['babel-loader']
        },
        {
            test:/\.css$/,
            use:['style-loader', 'css-loader']
        },
        {
            test:/\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        }
        ]
    },
    devServer: {
        contentBase: './dist',
        hot: true
    },
    plugins:[
        new HtmlWebPackPlugin({
            template:'./src/index.html',
          
        })
    ]
}