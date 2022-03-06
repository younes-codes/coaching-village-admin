const express = require('express');
const path = require('path');

const app = express();
app.use(express.static(__dirname + '/dist/coaching-village-admin'));
app.get('/*', (req, res, next) => {
  res.sendFile(path.join(__dirname + '/dist/coaching-village-admin/index.html'));
})
app.listen(process.env.PORT || 8080);
