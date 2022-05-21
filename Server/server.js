console.log('In the server!');

const express = require('express');
//const bodyParser = require('body-parser');

// This must be added before GET & POST routes.
// app.use(bodyParser.urlencoded({extended:true}))
// app.use(bodyParser.json());

// Serve up static files (HTML, CSS, Client JS)
app.use(express.static());

let calcAnswer = [];

app.get('/calculate', (req, res) => {
    console.log('Calculate is working.');
    res.send(calcAnswer);
})

app.post('/calculate', (req, res) => {
    console.log('Made it to post /calculate.');
    calcAnswer.push(req.body)
    console.log(calcAnswer)
      res.sendStatus(201);
})

const PORT = 5000;
app.listen(PORT, () => {
    console.log ('Server is running on port', PORT)
  });