var fs = require("fs");
const express = require('express');
const app = express();
app.get('/', (req, res) => {
    fs.readFile('Hello.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
      });
  });
const server = app.listen(8080, () => {
    console.log(`Express running → PORT ${server.address().port}`);
  });