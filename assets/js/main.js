function toggleBacktotop() {
  if (window.scrollY > 100) {
    $('#backToTop').addClass('active')
  } else {
    $('#backToTop').removeClass('active')
  }
}


$(document).ready(function() {
  toggleBacktotop();
});

$(document).scroll(function() {
  toggleBacktotop();
});

$(window).on('load', function () {
  $('#preloader').remove();
});