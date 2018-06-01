# vunder
vunder is a bundler library.  

## in development
current status is in development, so if you want to use this library, be careful to use.

## feature
- bundling javascript files.
- generate html file from ejs template.
- launching local dev server.

## future plan
- [ ] bug fix of bundling javascript correctly.
- [ ] to enable css bundling feature.
- [ ] to enable image bundling feature.
- [ ] to be able to use .babelrc.
- [ ] to enable Hot Module Replacement.

## Get Started
first step is clone this repository, then type this command to your terminal.
```
$ npm i or yarn
```

then, type this command too.
```
$ npm run vunder or yarn vunder
```

## config
vunder has a specific config, you need to edit `vunder.config.js` .

### vunder.config.js
type: `object`

example
```js
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
```