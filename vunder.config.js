module.exports = {
  entry: 'src/index.js',
  output: 'dist/app.bundle.min.js',
  minify: false,
  server: {
    root: './dist',
    port: 8080,
    open: false
  },
  template: {
    format: 'ejs',
    entry: './index.ejs',
    option: {
      title: 'this is example'
    }
  }
}