const path = require("path");
module.exports = {
  entry: "./main.js",
  output: {
    path: path.resolve(__dirname, "build"), // dist/build in build folder I want result
    filename: "main.bundle.js", // o/p file name
  },
  mode: "production", // development/production
};

//npm run script-name
//npm run build
