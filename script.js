$(document).ready(function() {
  const $slider = $('.produk-container');
  const $cards = $('.produk-card');
  const cardWidth = $cards.outerWidth(true); // lebar termasuk margin
  const visibleCards = 3; // hanya tampil 3 card
  let scrollPosition = 0;

  $('.next').on('click', function() {
    const maxScroll = ($cards.length - visibleCards) * cardWidth;
    if (scrollPosition < maxScroll) {
      scrollPosition += cardWidth * visibleCards; // geser 3 per klik
      if (scrollPosition > maxScroll) scrollPosition = maxScroll;
      $slider.animate({ scrollLeft: scrollPosition }, 400);
    }
  });

  $('.prev').on('click', function() {
    if (scrollPosition > 0) {
      scrollPosition -= cardWidth * visibleCards;
      if (scrollPosition < 0) scrollPosition = 0;
      $slider.animate({ scrollLeft: scrollPosition }, 400);
    }
  });
});

