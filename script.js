$(document).ready(function () {
  /* ===== NAVBAR SCROLL EFFECT ===== */
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 50) {
      $(".navbar").css({
        "background": "rgba(0, 0, 0, 0.6)",
        "backdrop-filter": "blur(10px)",
      });
    } else {
      $(".navbar").css({
        "background": "transparent",
        "backdrop-filter": "none",
      });
    }
  });

  /* ===== SMOOTH SCROLL ===== */
  $(".nav-links a").on("click", function (e) {
    e.preventDefault();
    const target = $(this).attr("href");
    $("html, body").animate(
      {
        scrollTop: $(target).offset().top - 70, // agar tidak ketutup navbar
      },
      800
    );

    // Tutup menu di mobile setelah klik link
    $("#nav-links").removeClass("active");
    $("#hamburger").removeClass("active");
  });

  /* ===== HAMBURGER MENU TOGGLE ===== */
  $("#hamburger").on("click", function () {
    $(this).toggleClass("active");
    $("#nav-links").toggleClass("active");
  });

  /* ===== PRODUK SLIDER ===== */
  const $slider = $(".produk-container");
  const $cards = $(".produk-card");
  const cardWidth = $cards.outerWidth(true); // termasuk margin
  const visibleCards = 3; // hanya tampil 3 card
  let scrollPosition = 0;

  $(".next").on("click", function () {
    const maxScroll = ($cards.length - visibleCards) * cardWidth;
    if (scrollPosition < maxScroll) {
      scrollPosition += cardWidth * visibleCards; // geser 3 per klik
      if (scrollPosition > maxScroll) scrollPosition = maxScroll;
      $slider.animate({ scrollLeft: scrollPosition }, 400);
    }
  });

  $(".prev").on("click", function () {
    if (scrollPosition > 0) {
      scrollPosition -= cardWidth * visibleCards;
      if (scrollPosition < 0) scrollPosition = 0;
      $slider.animate({ scrollLeft: scrollPosition }, 400);
    }
  });
});
