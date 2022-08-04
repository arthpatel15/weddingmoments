/*!
 * Start Bootstrap - Agency v7.0.6 (https://startbootstrap.com/theme/agency)
 * Copyright 2013-2021 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
 */
//
// Scripts
//

window.addEventListener("DOMContentLoaded", (event) => {
  // Navbar shrink function
  var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector("#mainNav");
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove("navbar-shrink");
    } else {
      navbarCollapsible.classList.add("navbar-shrink");
    }
  };

  // Shrink the navbar
  navbarShrink();

  // Shrink the navbar when page is scrolled
  document.addEventListener("scroll", navbarShrink);

  // Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector("#mainNav");
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#mainNav",
      offset: 74,
    });
  }

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector(".navbar-toggler");
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll("#navbarResponsive .nav-link")
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });
});


(function($) {

  $.fn.menumaker = function(options) {

      var cssmenu = $(this),
          settings = $.extend({
              title: "Menu",
              format: "dropdown",
              sticky: false
          }, options);

      return this.each(function() {
          cssmenu.prepend('<div id="menu-button">' + settings.title + '</div>');
          $(this).find("#menu-button").on('click', function() {
              $(this).toggleClass('menu-opened');
              var mainmenu = $(this).next('ul');
              if (mainmenu.hasClass('open')) {
                  mainmenu.hide().removeClass('open');
              } else {
                  mainmenu.show().addClass('open');
                  if (settings.format === "dropdown") {
                      mainmenu.find('ul').show();
                  }
              }
          });

          cssmenu.find('li ul').parent().addClass('has-sub');

          multiTg = function() {
              cssmenu.find(".has-sub").prepend('<span class="submenu-button"></span>');
              cssmenu.find('.submenu-button').on('click', function() {
                  $(this).toggleClass('submenu-opened');
                  if ($(this).siblings('ul').hasClass('open')) {
                      $(this).siblings('ul').removeClass('open').hide();
                  } else {
                      $(this).siblings('ul').addClass('open').show();
                  }
              });
          };

          if (settings.format === 'multitoggle') multiTg();
          else cssmenu.addClass('dropdown');

          if (settings.sticky === true) cssmenu.css('position', 'fixed');

          resizeFix = function() {
              if ($(window).width() > 768) {
                  cssmenu.find('ul').show();
              }

              if ($(window).width() <= 768) {
                  cssmenu.find('ul').hide().removeClass('open');
              }
          };
          resizeFix();
          return $(window).on('resize', resizeFix);

      });
  };
})(jQuery);

(function($) {
  $(document).ready(function() {

      $("#cssmenu").menumaker({
          title: "Menu",
          format: "multitoggle"
      });


  });
})(jQuery);


$(document).ready(function() {
  $('[data-toggle="tooltip"]').tooltip();
  $('#testimonial').carouFredSel({
      responsive: true,
      circular: false,
      auto: false,
      prev: '#prev_testimonial',
      next: '#next_testimonial'

  });

  $('#testimonial2').carouFredSel({
      responsive: true,
      circular: false,
      auto: true,
      prev: '#prev_testimonial2',
      next: '#next_testimonial2'
  });

  $('#team').accordion({
      heightStyle: "content"
  });

  $('.fancybox').fancybox();
});