console.log('app.js connected');
$(document).ready(function(){

$('#guess-number-form').on('submit', function(event){
  $.ajax({
    method: 'GET',
    url: '/pick-a-number',
    data: $('#guess-number-form').serialize(),
    success: onSuccessGuess,
    error: onErrorGuess
  })
})

  $('#target-number-form').on('submit',function(event){
      $.ajax({
        method:'POST',
        url: '/pick-a-number',
        data: $('#target-number-form').serialize(),
        success: onSuccessTarget,
        error: onErrorTarget
      })
  })

});

function onSuccessGuess(){
  console.log('success!');
}

function onErrorGuess(){
  console.log('uh oh');
}

function onSuccessTarget(){
  console.log('success!');
}

function onErrorTarget(){
  console.log('uh oh');
}
