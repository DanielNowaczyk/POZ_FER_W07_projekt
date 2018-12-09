

module.exports={
    entry:"./src/index.js",
    output:{
        filename:"app.js",
        path:__dirname+"/docs"
    },
    resolve:{
        extensions:[".js",".jsx"]
    },
    devServer:{
      contentBase:__dirname+"/docs"
    },
    module:{
        rules:[
            {
            test:/.jsx?/,
            loader:"babel-loader",
            exclude:/node_modules/,
            options:{
                presets:["@babel/preset-react"],
                plugins: ["@babel/plugin-proposal-class-properties"]
                }
            },
            {
                test:/.s?css$/,
                exclude: /node_modules/,
                use:[
                    {loader:"style-loader"},
                    {
                    loader:"css-loader",
                    options:{
                        modules:true,
                        localIdentName: '[name]__[local]--[hash:base64:5]'
                        }
                    },
                    {loader:"sass-loader"}
                ]
            },
            {
                test:/node_modules\/.*.s?css$/,
                use:[
                    {loader:"style-loader"},
                    { loader:"css-loader" },
                    {loader:"sass-loader"}
                ]
            },
            {
                test:/\.(png|jpg|gif|txt)$/i,
                use:[
                    {
                        loader:"url-loader"
                    }
                ]

            }

    ]

    }
};

