$(document).ready(function(){

  // email validator
  function isValidEmailAddress(emailAddress) {
      var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
      return pattern.test(emailAddress);
  };

  // subscription alert
  $('.btn[type=submit]').on('click', function(event) {
    event.preventDefault();

    // check for validation
    if (!isValidEmailAddress($('input[type=email]').val())) {
      alert('Please provide a valid email address.');
    } else {
      // thank user for subbing
      alert('Thanks for subscribing!');
      // reset value
      $('input[type=email]').val('');
    }
  });

  // cart scripts

  var itemCounter = 0;

  $('.add-to-cart').on('click', function(event) {
    event.preventDefault();

    itemCounter++;
    $('.item-counter').html('<p>' + itemCounter + '</p>');
    $('.item-counter').css('display', 'block');
  });

  // smooth scroll
  $(document).on('click', 'a', function(event){
    // Get the height of the header
    var headerHeight = $('header').height();

    event.preventDefault();

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top - $('header').height() + 5
    }, 500);
  });

    // Fix "Skip Link" Focus in Webkit
  $(function() {
    $("a[href^='#']").not("a[href='#']").click(function() {
        $("#"+$(this).attr("href").slice(1)+"").focus();
    });
  });
});