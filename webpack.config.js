var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry:{
        app:'./src/index.js'
    },
    output:{
        filename:'[name].js',
        path:path.resolve(__dirname,'dist')
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:/(node_midules)/,
                loader:'babel-loader',
                query:{
                    presets:['react','es2015']
                }
            },
            {
                test:/\.css$/,
                loader:'style-loader!css-loader'
            }
        ]
    },
    devServer:{
        contentBase:'./',
        inline:true
    }
    
}