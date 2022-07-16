const click = document.querySelector('.click')
const list = document.querySelector('.lang-dropdown')
list.style.display = 'none'
click.addEventListener('click',()=>{
   if(list.style.display == "none"){
    list.style.display = "block"
   }else{
    list.style.display= "none"
   }
})

const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.menu-list')

menu.addEventListener('click',function() {
   menu.classList.toggle('is-active');
   menuLinks.classList.toggle('active')
})


$(".carousel").owlCarousel({
   margin: 20,
   loop: true,
   // autoplay: true,
   autoplayTimeout: 2000,
   autoplayHoverPause: true,
   responsive: {
       0: {
           items: 1,
           nav: false
       },
       600: {
           items: 2,
           nav: false
       },
       1000: {
           items: 3,
           nav: false
       }
   }
});

const backToTopButton = document.querySelector("#back-to-top-btn");

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
  if (window.pageYOffset > 300) { // Show backToTopButton
    if(!backToTopButton.classList.contains("btnEntrance")) {
      backToTopButton.classList.remove("btnExit");
      backToTopButton.classList.add("btnEntrance");
      backToTopButton.style.display = "block";
    }
  }
  else { // Hide backToTopButton
    if(backToTopButton.classList.contains("btnEntrance")) {
      backToTopButton.classList.remove("btnEntrance");
      backToTopButton.classList.add("btnExit");
      setTimeout(function() {
        backToTopButton.style.display = "none";
      }, 250);
    }
  }
}

backToTopButton.addEventListener("click", smoothScrollBackToTop);

// function backToTop() {
//   window.scrollTo(0, 0);
// }

function smoothScrollBackToTop() {
  const targetPosition = 0;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const duration = 750;
  let start = null;
  
  window.requestAnimationFrame(step);

  function step(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
    if (progress < duration) window.requestAnimationFrame(step);
  }
}

function easeInOutCubic(t, b, c, d) {
	t /= d/2;
	if (t < 1) return c/2*t*t*t + b;
	t -= 2;
	return c/2*(t*t*t + 2) + b;
};




$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

     //>=, not <=
    if (scroll >= 200) {
        //clearHeader, not clearheader - caps H
        $("header").addClass("fixed");
       
    }else{
        $("header").removeClass("fixed");
    }
}); //missing );
$(window).resize(function () {
    var widthWindow = $(window).width();
    if (widthWindow <= '960') {
        $('header').addClass('mobile');
    }
    else
    {
        $('header').removeClass('mobile');
    }
});
$(window).trigger('resize');
