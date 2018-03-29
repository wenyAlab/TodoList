var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry:{
        entry:'./src/index.js'
    },
    output:{
        filename:'main.js',
        path:path.resolve(__dirname,'dist')
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:/(node_midules)/,
                loader:'babel-loader',
                options:{
                    presets:['react','es2015']
                }
            },
            {
                test:/\.css$/,
                loader:'style-loader!css-loader'
            },
            {
                test:/\.(png|svg|jpg|gif)$/,
                use:[
                    'file-loader'
                ]
            }
        ]
    },
    devServer:{
        contentBase:'./',
        inline:true
    }
    
}