$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 1000,
  nav: false,
  dots: false,
  items: 1,
  autoplay: true,
  autoplayTimeout: 3000,
});

$(window).scroll(function(){
  if ($(this).scrollTop() > 200) {
      $('.sticky').addClass('fixed');
  } else {
      $('.sticky').removeClass('fixed');
  }
});

$(document).ready(function () {
    
  setTimeout(function(){ // allowing 3 secs to fade out loader
  $('#preloader').fadeOut('slow');
  },2000);
  
}); 