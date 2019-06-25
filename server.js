const express = require('express');
const helmet = require('helmet');
const path = require('path');
const app = express();

app.use(helmet({
  hsts: false,
  dnsPrefetchControl: { allow: true }
}));

const basePath = path.join(__dirname, '/build');
app.use(express.static(basePath));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build/index.html'));
});

app.listen(3000);