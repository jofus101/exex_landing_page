$(document).ready(function() {

  var myFirebaseRef = new Firebase("https://flickering-inferno-9766.firebaseio.com/");

  function validateEmail(email) { 
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  $('#fire_submit').click(function () {
    var email = $('#email_input').val();
    if (validateEmail(email)) {
      myFirebaseRef.push({email: email});
      displaySuccessMessage(email);
      $('#email_input').val('');
    }
    else {
      displayFailureMessage(email);
    }
  });

  function displaySuccessMessage(email) {
    $('#message_out').removeAttr( 'style' ).addClass( "alert-box success" );
    $('#message_out').text("Thanks for signing up: " + email);
    $('#message_out').fadeOut(2000, function() {
      $('#message_out').empty().removeClass();
    });
  }
  function displayFailureMessage(email) {
    $('#message_out').removeAttr( 'style' ).addClass( "alert-box alert" );
    $('#message_out').text("We're sorry \"" + email + "\" doesn't look quite right to us. Maybe you missed a letter");
    $('#message_out').fadeOut(2000, function() {
      $('#message_out').empty().removeClass();
    });
  } 
});
