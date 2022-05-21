console.log('In the server!');

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;

// This must be added before GET & POST routes.
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());

// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));

let showAnswer = [];

app.get('/calculate', (req, res) => {
    console.log('Calculate is working.');
    res.send(showAnswer);
})

app.post('/calculate', (req, res) => {
    console.log('Made it to post /calculate.');
    showAnswer.push(req.body)
    console.log(showAnswer)
      res.sendStatus(201);
})

app.listen(PORT, () => {
    console.log ('Server is running on port', PORT)
  });