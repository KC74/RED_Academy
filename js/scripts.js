// subscription alert
$('.btn[type=submit]').on('click', function() {
  // check for validation
  if (!$('input[type=email]').val()) {
    alert('Please provide your email address');
  } else {
    // thank user for subbing
    alert('Thanks for subscribing!');
    // reset value
    $('input[type=email]').val('');
  }
});

// cart scripts

var itemCounter = 0;

$('.add-to-cart').on('click', function() {
  itemCounter++;
  $('.item-counter').html('<p>' + itemCounter + '</p>');
  $('.item-counter').css('display', 'block');
});