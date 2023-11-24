// Wrap every letter in a span
var textWrapper = document.querySelector('.header_name');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline()
  .add({
    targets: '.header_name .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 150 * (i+1)
  });

  function toggleCategories() {
    var categoryList = document.getElementById('categoryList');
    categoryList.style.display = (categoryList.style.display === 'block') ? 'none' : 'block';
}

$('input').on('change', function() {
    $('body').toggleClass('blue');
  });

  (function () {
    "use strict";
  
    var carousels = function () {
      $(".owl-carousel1").owlCarousel({
        loop: true,
        center: true,
        margin: 0,
        responsiveClass: true,
        nav: false,
        responsive: {
          0: {
            items: 1,
            nav: false
          },
          680: {
            items: 2,
            nav: false,
            loop: false
          },
          1000: {
            items: 3,
            nav: true
          }
        }
      });
    };
  
    (function ($) {
      carousels();
    })(jQuery);
  })();

  const carousel = document.getElementById('carousel');
    const playButton = document.getElementById('play-button');

    // Replace the soundFileURL with the actual path to your sound file
    const soundFileURL = 'path/to/sound.mp3';
    const audio = new Audio(soundFileURL);

    playButton.addEventListener('click', () => {
      audio.play();
    });

    // Function to rotate the carousel
    function rotateCarousel() {
      const firstItem = carousel.firstElementChild;
      carousel.style.transition = 'transform 0.5s ease-in-out';
      carousel.style.transform = 'translateY(-' + firstItem.clientHeight + 'px)';
      setTimeout(() => {
        carousel.appendChild(firstItem);
        carousel.style.transition = 'none';
        carousel.style.transform = 'translateY(0)';
      }, 500);
    }
    setInterval(rotateCarousel, 3000);