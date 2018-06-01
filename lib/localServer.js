const express = require('express');
const app = express();

const options = {
  extensions: ['htm', 'html'],
  index: ['index.html'],
}

app.use(express.static('./dist', options))

app.listen(3000, () => console.log('Example app listening on port 3000!'));