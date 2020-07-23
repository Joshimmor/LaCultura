
    (function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 72)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 75
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-scrolled");
    } else {
      $("#mainNav").removeClass("navbar-scrolled");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Magnific popup calls
  $('#portfolio').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    }
  });

})(jQuery); // End of use strict
 
// modal functionality 

$(function(){
  $("#emailer").modal("show");
  $("#emailer").submit(function (e) { 
    e.preventDefault();
    $("#myBtn").prop('disabled', true);
    var formData = new FormData();
    formData.append("userName",("userName").value);
    formData.append("userEmail",("userEmail").value);
    var ajax = new XMLHttpRequest();
    ajax.open("POST","emailer.php");
    ajax.onreadystatechange = function(){
      if (ajax.readyState === 4 && ajax.status === 200){
        if(ajax.responseText ==="success"){
          $("#emailer").modal('hide');
        }else{
          $("#emailer").modal('hide');
        }
      }
    }
    ajax.send(formData)
    
  });
  //downloadable content 
  $("#dlContent").submit(function (e) { 
    e.preventDefault();
    $("#dlBtn").prop('disabled', true);
    var formData = new FormData();
    formData.append("userName",("userName").value);
    formData.append("userEmail",("userEmail").value);
    var ajax = new XMLHttpRequest();
    ajax.open("POST","emailer.php");
    ajax.onreadystatechange = function(){
      if (ajax.readyState === 4 && ajax.status === 200){
        if(ajax.responseText ==="success"){
            let a = document.createElement('a');
            a.href = item.url;
            a.download = item.url.split('/').pop();
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        }else{
            let a = document.createElement('a');
            a.href = "local.txt";
            a.download = item.url.split('/').pop();
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        }
      }
    }
    ajax.send(formData);
    $("#dlContent").css("display","none");
    
  });
})