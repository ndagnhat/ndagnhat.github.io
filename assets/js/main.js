function toggleBacktotop() {
  if (window.scrollY > 100) {
    $('#backToTop').addClass('active')
  } else {
    $('#backToTop').removeClass('active')
  }
}

function setActiveNavbar() {
  {% if page.menu %}
  let currentMenu = "/{{page.menu}}";
  {% else %}
  let currentMenu = "/";
  {% endif %}
  let currentPathname = window.location.pathname;
  $("#navbar .nav-link").each(function (index) {
    let pathname = $(this).prop("pathname");
    if (currentMenu == pathname) {
      $(this).addClass('active');
    }
  });
}

$(document).ready(function () {
  toggleBacktotop();
  setActiveNavbar();

  $('.mobile-nav-toggle').click(function () {
    $('#navbar').toggleClass("navbar-mobile");
    $(this).toggleClass("bi-list");
    $(this).toggleClass("bi-x");
  });
});

$(document).scroll(function () {
  toggleBacktotop();
});

$(window).on('load', function () {
  $('#preloader').remove();
});
