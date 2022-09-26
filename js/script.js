//<![CDATA[
$(window).on('load', function () {
  $('.preloader .inner').fadeOut();
  $('.preloader').delay(10).fadeOut('slow');
  $('body').delay(10).css({ 'overflow': 'visible' });
})

$("svg").click(function () {
  $("ul").toggleClass("open");
});

var mainListDiv = document.getElementById("mainListDiv"),
mediaButton = document.getElementById("mediaButton");
mediaButton.onclick = function () {
"use strict";
mainListDiv.classList.toggle("show_list");
mediaButton.classList.toggle("active");
};
//]]>


