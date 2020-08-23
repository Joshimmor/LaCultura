//loader query

$(window).on("load", function(){
  $('#loadingScreen').fadeOut(5000);
  
})

function deferVideo() {

  //defer html5 video loading
$("video source").each(function() {
  var sourceFile = $(this).attr("src");
  $(this).attr("src", sourceFile);
  var video = this.parentElement;
  video.load();
  
});

}
window.onload = deferVideo;



// scroll animations 
  const controller = new ScrollMagic.Controller();  
  const headLine = new TimelineMax();
  headLine.from("#tags",5,{y:100,opacity:0,duration:1,ease: "elastic.out(1, 1)" })
  .from(".dl",{y:100,opacity:0,duration:1,ease: "elastic.out(1, 1)"},"-=2")

  const timeLine = new TimelineMax ();
  
  
    timeLine.from("#sideBar",{y:300,duration:1.5,ease: "elastic.out(1, 1)" })
    .from("#row1",{x:100,duration:1.5,ease: "elastic.out(1, 1)"} ,"-=1.5" )
    .from("#row2",{x:100,duration:1.9,ease: "elastic.out(1, 1)"},"-=1.5")
    .from("#row3",{x:100,duration:1.5,ease: "elastic.out(1, 1)"},"-=1.5")
    .from("#row4",{x:100,duration:1.9,ease: "elastic.out(1, 1)"},"-=1.5");

    timeLine.pause();
     /*
       const tl1= TweenMax.from("#sideBar",{y:300,duration:2,ease: "elastic.out(1, 1)" } );
       const tl2= TweenMax.from("#row1",{x:100,duration:2,ease: "elastic.out(1, 1)",});
       const tl3= TweenMax.from("#row2",1,{x:100,duration:2,ease: "elastic.out(1, 1)"});
       const tl4= TweenMax.from("#row3",1.5,{x:100,duration:2,ease: "elastic.out(1, 1)"});
       const tl5= TweenMax.from("#row4",2,{x:100,duration:2,ease: "elastic.out(1, 1)"});
     */         
    
  const scene = new ScrollMagic.Scene({
    triggerElement: '#about',
    triggerHook: 0.75,
  })
  .on("enter",(e)=> timeLine.play())
  .on("leave", (e)=> timeLine.reverse())
  .addTo(controller);
 
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
/*

    $("#sideBar").click(function(){
     window.location = "#call"
    });

*/
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
  // Programs
  $("#sideBar").click(function goToURL() {
    location.href = '/Program.html';
});

  // groupClasses
  $("#row1").click(function goToURL() {
      location.href = '/groupClass.html';
  });
  
   // onlineCoaching
   $("#row3").click(function goToURL() {
    location.href = '/onlineCoaching.html';
  });
   // consulation
   $("#row4").click(function(){
    $("#emailer").modal("show")
  });
   // personalTraining
   $("#row2").click(function goToURL() {
    location.href = '/personalTraining.html';
  });
   //emailer sub
   $("#emailer").submit(function (e) { 
    e.preventDefault();
    $('#emailer').modal('hide');
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
    formData.append("userName",document.getElementById("userName").value);
    formData.append("userEmail",document.getElementById("userEmail").value);
    var ajax = new XMLHttpRequest();
    ajax.open("POST","../emailer.php");
    ajax.onreadystatechange = function(){
      if (ajax.readyState === 4 && ajax.status === 200){
        if(ajax.responseText ==="success"){
        console.log("hello idiot")
        }
        }else{
          console.log("hello idiot")
        }
      }
  
    ajax.send(formData);
    $("#dlContent").css("display","none");
    
  });
})