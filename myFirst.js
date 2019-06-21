const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Homepage'
    });
      });
app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));
const server = app.listen(8080, () => {
    console.log(`Express running → PORT ${server.address().port}`);
  });