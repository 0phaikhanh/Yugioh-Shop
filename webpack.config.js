const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js", // Dẫn tới file index.js ta đã tạo
  output: {
    path: path.join(__dirname, "/build"), // Thư mục chứa file được build ra
    filename: "bundle.js", // Tên file được build ra
    publicPath: "/", // Đảm bảo tài nguyên được tải đúng đường dẫn
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Sẽ sử dụng babel-loader cho những file .js
        exclude: /node_modules/, // Loại trừ thư mục node_modules
        use: ["babel-loader"],
      },
      {
        test: /\.css$/, // Sử dụng style-loader, css-loader cho file .css
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(jpg|jpeg|png|gif|svg)$/i, // Các loại hình ảnh cần xử lý
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[hash:8].[ext]", // Đặt tên tệp hình ảnh sau khi Webpack xử lý
              outputPath: "assets/", // Đặt đường dẫn đầu ra
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html", // Chỉ ra tệp HTML của bạn
    }),
  ],
  devServer: {
    static: path.join(__dirname, "build"), // Đảm bảo các tài nguyên tĩnh được phục vụ đúng
    historyApiFallback: true, // Chuyển hướng tất cả yêu cầu không phải tệp tĩnh về index.html
    port: 8080, // Cổng mà Webpack dev server sẽ chạy
  },
};
