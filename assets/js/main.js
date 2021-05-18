function toggleBacktotop() {
  if (window.scrollY > 100) {
    $('#backToTop').addClass('active')
  } else {
    $('#backToTop').removeClass('active')
  }
}


$(document).ready(function() {
  toggleBacktotop();
  
  $('.mobile-nav-toggle').click(function() {
    $('#navbar').toggleClass("navbar-mobile");
    $(this).toggleClass("bi-list");
    $(this).toggleClass("bi-x");
  });
});

$(document).scroll(function() {
  toggleBacktotop();
});

$(window).on('load', function () {
  $('#preloader').remove();
});