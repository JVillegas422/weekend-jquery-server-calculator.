console.log('In JS');

$(document).ready(onReady);

function onReady() {
    console.log("jquery is loaded!");
    $('#answer-list').on('click', calcAnswer);
}

function calcAnswer(evt) {
    evt.preventDefault;
    let calculate = {
        firstNum: $('#first-input').val(),
        secondNum: $('#second-input').val(),
        getAnswer: $('#get-answer').val()
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
    fetch();
  }).catch((error) => {
      alert('Sorry, error!');
      console.log('oops, error!', error);
  });
    fetchCalculate();
}

function fetchCalculate() {
    $.ajax({
        url: '/calculate',
        method: 'GET'
    }).then((response) => {
      console.log('GET request, works!', response);
      
      
      renderCalculate(response);
    }).catch((err) => {
      // This function is called for any errors
      console.log('GET /calculate failed', err);
    
      // alert('oh no...')
    
      $('body').html(`
          <h1>
          Service is temporarily unavailable.
          </h1>
      `);
    });
    
    console.log('after the ajax command');
    $('#answer-list').text('Loading.....');
}

// function renderCalculate(calculate) {
//     console.log('calculate is', calculate);
//     $('#answer-list').empty();
    
//     for (let calculates of calculate) {
//       console.log('this is working', calculates.firstNum)
//       $('#answer-list').append(
//         `
//          <li> ${calculates.firstNum} ${calculates.secondNum}</li>
//       `);
//     }
//     }