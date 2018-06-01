const express = require('express');
const app = express();
const openurl = require("openurl");

const localServer = ({server}) => {
  const options = {
    extensions: ['htm', 'html'],
    index: ['index.html'],
  }

  app.use(express.static(server.root, options))
  app.listen(server.port, () => console.log(`Example app listening on port: ${ server.port }`));
  if(server.open) {
    openurl.open(`http://localhost:${server.port}`)
  }
}

module.exports = localServer;
