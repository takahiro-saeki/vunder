const UglifyJS = require("uglify-es");

const isMinify = (flag = false, code) => {
  if(flag) {
    return UglifyJS.minify(code).code
  }
  return code
}

module.exports = isMinify;