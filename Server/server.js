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
    mathCalculations(req.body);
    showAnswer.push(req.body)
    console.log(showAnswer)
    // status code created request and fulfilled what it asked
      res.sendStatus(201);
})

function mathCalculations(object) {
  if (object.mathType === '+') {
    // Add number to convert only on addition 
    object.mathAnswer = Number(object.firstNum) + Number(object.secondNum);
  } 
  else if (object.mathType === '-') {
    object.mathAnswer = object.firstNum - object.secondNum;
  }
  else if (object.mathType === '*') {
    object.mathAnswer = object.firstNum * object.secondNum;
  }
  else if (object.mathType === '/') {
    object.mathAnswer = object.firstNum / object.secondMNum;
  }
  else {
    return false;
  }
}

app.listen(PORT, () => {
    console.log ('Server is running on port', PORT)
  });