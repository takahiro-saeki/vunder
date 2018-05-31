module.exports = {
  entry: 'src/index.js',
  output: 'dist/app.bundle.min.js',
  minify: false,
  server: {
    root: 'src/index.html'
  }
}