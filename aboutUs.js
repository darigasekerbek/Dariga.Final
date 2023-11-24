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

  function playSound() {
    const soundFileURL = 'synthesize.mp3';
    const audio = new Audio(soundFileURL);
    audio.play();
}
