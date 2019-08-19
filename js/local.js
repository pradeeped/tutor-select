
$(document).ready(function() {
    $('.nav-link').click(function(){
      $(".nav-link i").toggleClass('iconG-menu iconG-close');
      $("#navbar-fixed").toggleClass("stickybg");
  });

  $('#navbar-fixed .dropdown-menu').click(function(event){
    event.stopPropagation();
 });

  $(document).click(function(e) {

      // get the clicked element
    $clicked = $(e.currentTarget);
    //e.stopPropagation();
    // if the clicked element is not a descendent of the dropdown
    if ($clicked.closest('.dropdown-menu').length === 0) {
      
      // close the dropdown
      $('.dropdown').removeClass('show');
      $(".nav-link i").removeClass('iconG-close');
      $(".nav-link i").addClass('iconG-menu');
      $("#navbar-fixed").removeClass("stickybg");
    }
  });

  
  $('#country-codes button').on('click', function() {
    $('#country-codes .dropdown-menu').addClass('show');
  });   
  $('#country-codes li a').on('click', function() {
    $('#country-codes button span.value').text($(this).attr('value'));
    $('.dropdown-menu').removeClass('show');
  });

  $(document).click(function(e) {
    // get the clicked element
  $clicked = $(e.currentTarget);
  // if the clicked element is not a descendent of the dropdown
  if ($clicked.closest('#country-codes').length === 0) {
    // close the dropdown
    $('#country-codes .dropdown-menu').removeClass('show');
  }
});

// Back to top show button

var btn = $('.backtotop');
$(window).scroll(function() {
  if ($(window).scrollTop() > 200) {
    btn.addClass('backtoshow');
  } else {
    btn.removeClass('backtoshow');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '200');
});

});

//HEADER STICKY JS
window.onscroll = function() {myFunction()};
// Get the header
var header = document.getElementById("navbar-fixed");
// Get the offset position of the navbar
var sticky = header.offsetTop;
// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}


