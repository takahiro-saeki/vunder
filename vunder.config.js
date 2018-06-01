module.exports = {
  entry: 'src/index.js',
  output: 'dist/app.bundle.min.js',
  minify: false,
  server: {
    root: '/index.html'
  },
  template: {
    format: 'ejs',
    entry: './index.ejs',
    option: {
      title: 'this is example'
    }
  }
}