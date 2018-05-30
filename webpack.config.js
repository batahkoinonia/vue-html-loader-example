const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
  entry: "./src/main.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "babel-preset-env",
                {
                  targets: {
                    browsers: ["last 2 versions", "> 1% in US", "not dead"]
                  }
                }
              ]
            ]
          }
        }
      },
      {
        test: /\.vue$/,
        exclude: /(node_modules|bower_components)/,
        loader: "vue-loader"
      },
      {
        test: /\.(html)$/,
        exclude: /(node_modules|bower_components|dist)/,
        use: {
          loader: "html-loader",
          options: {
            attrs: [":data-src"]
          }
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin(), new VueLoaderPlugin()],
  resolve: {
    alias: {
      vue: "vue/dist/vue.js"
    }
  }
};
