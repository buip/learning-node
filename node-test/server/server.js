const express = require('express');

let app = express();

app.get('/', (req, res) => {
  res.status(404).send({
    error: 'Page not found',
    name: 'My App'
  });
});

app.get('/user', (req, res) => {
  res.send([
    {
      name: 'Phuong',
      age: 20
    },
    {
      name: 'Zowie',
      age:21
    }
  ]);
});

app.listen(3000);

module.exports.app = app;
