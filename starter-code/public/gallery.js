$(document).on('ready', function(){

  $('#new-artwork').on('submit', function(event){
    event.preventDefault();
    $.ajax({
      method: 'POST',
      url: '/artworks',
      data: $('#new-artwork').serialize(),
      success: onSuccess,
      error: onError
    })
  })

  function onSuccess(response){
    console.log(response);
  }

  function onError(){
    console.log('uh oh');
  }

})
