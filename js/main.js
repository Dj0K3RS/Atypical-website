/**
 * Akina Heroes
 *
 * @category    Front end
 * @package     Main js
 * @copyright   Copyright (c) 2022 Akina Heroes. 
 * @author      Akina Heroes
 */


var $ = jQuery.noConflict();


$(document).ready(function () {
  $("[href^='#']").click(function() {
    id=$(this).attr("href")
    $('html, body').animate({
        scrollTop: $(id).offset().top
    }, 100);
});

  
  $('.collapse').on('show.bs.collapse', function (e) {
    $('.collapse').collapse("hide")
  });
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,

    autoplayHoverPause: true,
    animateOut: 'fadeOut',
    autoPlayTimeout: 100,
    autoplaySpeed: 6000,
    responsive: {
      0: {
        items: 2
      },
      600: {
        items: 4
      },
      1000: {
        items: 7
      }
    }
  });


  /*Roadmap*/
  /*roadmap*/
  function qs(selector, all = false) {
    return all ? document.querySelectorAll(selector) : document.querySelector(selector)
  }

  const sections = qs('.section', true);
  const timeline = qs('.timeline');
  const line = qs('.line');
  line.style.bottom = `calc(100% - 20px)`;
  let prevScrollY = window.scrollY;
  let up, down;
  let full = false;
  let set = 0;
  const targetY = window.innerHeight * 0.8;

  function scrollHandler(e) {
    const {
      scrollY
    } = window;
    up = scrollY < prevScrollY;
    down = !up;
    const timelineRect = timeline.getBoundingClientRect();
    const lineRect = line.getBoundingClientRect(); //CONST LINEHEIGHT = lineRect.bottom - lineRect.top

    const dist = targetY - timelineRect.top
    //  console.log(dist);

    if (down && !full) {
      set = Math.max(set, dist);
      line.style.bottom = `calc(100% - ${set}px)`
    }

    if (dist > timeline.offsetHeight + 50 && !full) {
      full = true;
      line.style.bottom = `-50px`
    }

    sections.forEach(item => {
      //console.log(items);
      const rect = item.getBoundingClientRect();

      if (rect.top + item.offsetHeight / 5 < targetY) {
        item.classList.add('show-me')
      }
    });

    prevScrollY = window.scrollY;
  }

  scrollHandler();
  line.style.display = 'block';
  window.addEventListener('scroll', scrollHandler);




 

 


  /*MENU HOVER*/

  // When the user scrolls the page, execute myFunction
  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      document.getElementById("myHeader").style.background = "#0b111b";
    } else {
      document.getElementById("myHeader").style.background = "transparent";
    }
  }
  // When the user scrolls the page, execute myFunction








});



/*carousel*/
