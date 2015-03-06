$(document).ready(function() {

  var myFirebaseRef = new Firebase("https://flickering-inferno-9766.firebaseio.com/");

  function validateEmail(email) { 
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  $('#email_input').keypress(function () {
    var email = $(this).val();
    if (validateEmail(email)) {
      $(this).removeClass('error').addClass('success');
    }
    else {
      $(this).removeClass('success').addClass('error');
    }  
  });

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
    $('#alert_placeholder').empty()
      .append('Thanks for signing up: ' + email);
  }
  function displayFailureMessage(email) {
    $('#alert_placeholder').empty()
      .append('We\'re sorry \"' + email + '\" doesn\'t look quite right to us.');
  } 
});
