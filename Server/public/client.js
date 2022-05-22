console.log('In JS');

$(document).ready(onReady);

let mathType = '';

function onReady() {
    console.log("jquery is loaded!");
    $('#get-result').on('click', calcAnswer);
    $('.math-symbol').on('click', getMathType);
    $('#clear-result').on('click', clearResults);
    fetchCalculate();
}

function getMathType(evt) {
    evt.preventDefault();
    mathType = $(this).text()
    console.log(mathType)
}

function calcAnswer(evt) {
    evt.preventDefault();
    let calculate = {
        firstNum: $('#value-one').val(),
        secondNum: $('#value-two').val(),
        mathAnswer: 0,
        mathType: mathType
    };
    console.log('Calculate first & second numbers');

$.ajax({
url: '/calculate',
method: 'POST',
data: calculate
}).then((response) => {
    console.log(
    'POST request works',
    response
    );
    // if our then did not work
  }).catch((error) => {
      alert('Sorry, error!');
      console.log('oops, error!', error);
  });
    fetchCalculate();
}

function fetchCalculate() {
    $.ajax({
        url: '/calculate',
        metho1d: 'GET'
    }).then((response) => {
      console.log('GET request, works!', response);
      
      
      renderCalculate(response);
    }).catch((err) => {
      //This function is called for any errors
      console.log('GET /calculate failed', err);
    
      alert('oh no...')
    
      $('body').html(`
          <h1>
          Service is temporarily unavailable.
          </h1>
      `);
    });
    
    console.log('after the ajax command');
}

function renderCalculate(calculates) {
    console.log('calculates is', calculates);
    $('#result-list').empty();
    
    for (let calc of calculates) {
      console.log('calculate is working', calc.firstNum)
      $('#result-list').append(
        `
        <h2>${calc.mathAnswer}</h2>
        <li> ${calc.firstNum} ${calc.mathType} ${calc.secondNum} = ${calc.mathAnswer}</li>
        `);
    }
        $('#current-answer').empty();
    }

// Created button to clear input values
function clearResults(evt) {
    evt.preventDefault();
    let calculate = {
        firstNum: $('#value-one').val(''),
        secondNum: $('#value-two').val(''),
    };
    console.log('Clear first & second numbers');
}
