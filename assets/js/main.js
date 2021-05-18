function toggleBacktotop() {
  if (window.scrollY > 100) {
    $('#backToTop').addClass('active')
  } else {
    $('#backToTop').removeClass('active')
  }
}

function changeNavbarlinksActiveScroll() {
  let currentPathname = window.location.pathname;
  var rootHash;
  var hasActive = false;
  let position = window.scrollY + 200
  $("#navbar .homescrollto").each(function (index) {
    let pathname = $(this).prop("pathname");
    if (pathname == currentPathname) {
      var hash = $(this).prop("hash");
      if (hash != null && hash != "") {
        let section = $(hash);
        if (section.length > 0) {
          if (position >= section.offset().top && position <= (section.offset().top + section.outerHeight())) {
            hasActive = true;
            $(this).addClass('active');
          } else {
            $(this).removeClass('active');
          }
        } else {
          $(this).removeClass('active');
        }
      } else {
        rootHash = this;
      }
    } 
  });
  if(rootHash != null) {
    if(hasActive) {
      $(rootHash).removeClass('active');
    } else {
      $(rootHash).addClass('active');
    }
  }
}

function scrolltoSection(sectionId) {
  let offset = $("#header").outerHeight();
  let section = $(sectionId);
  if (section.length > 0) {
      let elementPos = section.offset().top;
      window.scrollTo({
          top: elementPos - offset,
          behavior: 'smooth'
      });
  } else {
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      });
  }
}

$(document).ready(function () {
  toggleBacktotop();

  $('.mobile-nav-toggle').click(function () {
    $('#navbar').toggleClass("navbar-mobile");
    $(this).toggleClass("bi-list");
    $(this).toggleClass("bi-x");
  });

  let currentPathname = window.location.pathname;
  var isScrollNavbar = false;
  $("#navbar .nav-link").each(function (index) {
    let pathname = $(this).prop("pathname");
    if (pathname == currentPathname) {
      if ($(this).hasClass("homescrollto")) {
        isScrollNavbar = true;
      } else {
        $(this).addClass('active');
      }
    }
  });
  if(isScrollNavbar) {
    changeNavbarlinksActiveScroll();
    $(document).scroll(function () {
      changeNavbarlinksActiveScroll();
    });

    if (window.location.hash != null && window.location.hash != "") {
      scrolltoSection(window.location.hash);
    }
    $('.homescrollto').click(function (event) {
        event.preventDefault();
        if ($('#navbar').hasClass('navbar-mobile')) {
            $('#navbar').removeClass('navbar-mobile')
            $('.mobile-nav-toggle').toggleClass('bi-list')
            $('.mobile-nav-toggle').toggleClass('bi-x')
        }
        scrolltoSection($(this).prop("hash"));
    });
  }
});

$(document).scroll(function () {
  toggleBacktotop();
});

$(window).on('load', function () {
  $('#preloader').remove();
});