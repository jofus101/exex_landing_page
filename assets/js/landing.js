$(document).ready(function() {

  var myFirebaseRef = new Firebase("https://flickering-inferno-9766.firebaseio.com/");


  function submitForm() {
    var email = $('#email_input').val().trim();

    if (!email) { return; }

    if (validateEmail(email)) {
      myFirebaseRef.push({email: email});
      displaySuccessMessage(email);
      $('#email_input').val('');
    }
    else {
      displayFailureMessage(email);
    }
  }

  function validateEmail(email) { 
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  $('#email_input').keyup(function (event) {
    var email = $(this).val().trim();

    if (!email) {
      $(this).removeClass('error success');
      $('#alert_placeholder').empty();
    } 
    else if (validateEmail(email)) {
      $(this).removeClass('error').addClass('success');
    }
    else {
      $(this).removeClass('success').addClass('error');
    }

    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13') {
      submitForm();    
    }
  });

  $('#fire_submit').click(submitForm());

  function displaySuccessMessage(email) {
    $('#alert_placeholder').empty()
      .append('Thanks for signing up: ' + email);
  }
  function displayFailureMessage(email) {
    $('#alert_placeholder').empty()
      .append('We\'re sorry \"' + email + '\" doesn\'t look quite right to us.');
  } 
});
