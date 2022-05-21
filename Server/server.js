console.log('In the server!');

const express = require('express');
//const bodyParser = require('body-parser');

// This must be added before GET & POST routes.
// app.use(bodyParser.urlencoded({extended:true}))
// app.use(bodyParser.json());

// Serve up static files (HTML, CSS, Client JS)
app.use(express.static());

const PORT = 5000;
app.listen(PORT, () => {
    console.log ('Server is running on port', PORT)
  });