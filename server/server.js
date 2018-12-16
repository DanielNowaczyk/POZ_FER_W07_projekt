const express = require("express");
const app = express();
const fetch = require("node-fetch");

app.use('/', express.static(__dirname + "/../docs"));

app.use("/api", function (req, res) {
  fetch(`http://pl21.grepolis.com/data/${req.path}`)
    .then(_res => _res.text())
    .then(text => res.status(200).send(text));
});

const port = 5050;

app.listen(port, function() {
    console.log('Express server listening on port ' + port);
});
