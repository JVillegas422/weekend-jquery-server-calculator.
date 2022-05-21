console.log('In JS');

$(document).ready(onReady);

function onReady() {
    console.log("jquery is loaded!");
    $('#calc-answer').on('click', calcAnswer);
}

function calcAnswer(evt) {
    evt.preventDefault;
    let calculate = {
        firstNum: $('#first-input').val(),
        secondNum: $('#second-input').val()
    };
    console.log('Calculate first & second numbers');

$.ajax({
url: '/guess',
method: 'POST',
data: calculate
}).then((response) => {
    console.log(
    'POST request works',
    response
    );
  });
}