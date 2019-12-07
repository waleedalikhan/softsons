$(function() {
  $(" .navbar-toggler ").click(function() {
    $(" .navbar-toggler ").toggleClass(" change ");
  });
});

$(window).scroll(function() {
  let position = $(this).scrollTop();
  if (position >= 160) {
    $("nav")
      .addClass("custom-navbar")
      .removeClass("nav-menu");
  } else {
    $("nav")
      .addClass("nav-menu")
      .removeClass("custom-navbar");
  }
});

$(document).ready(function() {
  $(".nav-link").click(function() {
    $(".nav-link").removeClass("active");
    $(this).addClass("active");
  });
});

$(document).ready(
  (function() {
    $(".client-single").on("click", function(event) {
      event.preventDefault();

      var active = $(this).hasClass("active");

      var parent = $(this).parents(".testi-wrap");

      if (!active) {
        var activeBlock = parent.find(".client-single.active");

        var currentPos = $(this).attr("data-position");

        var newPos = activeBlock.attr("data-position");

        activeBlock
          .removeClass("active")
          .removeClass(newPos)
          .addClass("inactive")
          .addClass(currentPos);
        activeBlock.attr("data-position", currentPos);

        $(this)
          .addClass("active")
          .removeClass("inactive")
          .removeClass(currentPos)
          .addClass(newPos);
        $(this).attr("data-position", newPos);
      }
    });
  })(jQuery)
);

$("a[href^='#']").click(function(e) {
  e.preventDefault();

  var position = $($(this).attr("href")).offset().top;

  $("body, html").animate(
    {
      scrollTop: position
    },
    460
  );
});

$(document).ready(function() {
  $('[data-toggle="tooltip"]').tooltip();
});

$("figure").mouseleave(function() {
  $(this).removeClass("hover");
});

console.clear();

Splitting({
  target: ".tiler",
  by: "cells",
  rows: 3,
  columns: 3,
  image: true
}); //Image('.tiler-overlay', { rows: 3, cols: 3 });
