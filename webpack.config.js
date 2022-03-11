const path = require("path")

module.exports ={
    mode: "production",
    entry: {
        index : "./src/index.js"
    },
    output : {
        path : path.resolve(__dirname ,  'build'),
        filename : "js/main.js",
        // publicPath : "/assets/"
        publicPath : "/"
    },
    devServer : {
        port: 3000,
        static: path.join(__dirname , 'dist')
    }
}