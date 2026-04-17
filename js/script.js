// ================= Calling NAVBAR =================
fetch("navbar.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("navbar-container").innerHTML = data;

    const toggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.sidebar');

    if (toggle && sidebar) {

      // Clique no botão (hambúrguer)
      toggle.addEventListener('click', (e) => {
        e.stopPropagation(); // evita fechar imediatamente

        sidebar.classList.toggle('active');
        toggle.classList.toggle('open'); // classe para mudar o ícone
      });

      // Clique fora da navbar
      document.addEventListener('click', (e) => {
        const isClickInside = sidebar.contains(e.target) || toggle.contains(e.target);

        if (!isClickInside) {
          sidebar.classList.remove('active');
          toggle.classList.remove('open');
        }
      });

    }
  });


// ================= Calling FOOTER =================
fetch("footer.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("footer").innerHTML = data;
  });


// ================= SWIPER - CAROUSEL =================
new Swiper('.swiper-hero', {
  loop: true,
  effect: 'fade',
  fadeEffect: { crossFade: true },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
});

// ================= SWIPER - CARDS - MY JOBS =================

let swiperTrabalhos = null;

function initSwiperTrabalhos() {
  if (window.innerWidth <= 841 && !swiperTrabalhos) {
    // Ativa o Swiper em telas pequenas
    swiperTrabalhos = new Swiper('.swiper-trabalhos', {
      slidesPerView: 1.15,
      spaceBetween: 12,
      grabCursor: true,
      pagination: {
        el: '.swiper-trabalhos .swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        480: { slidesPerView: 1.5, spaceBetween: 14 },
        640: { slidesPerView: 2.2, spaceBetween: 16 },
      },
    });
  } else if (window.innerWidth > 824 && swiperTrabalhos) {
    // Destroi o Swiper em telas grandes
    swiperTrabalhos.destroy(true, true);
    swiperTrabalhos = null;
  }
}

initSwiperTrabalhos();
window.addEventListener('resize', initSwiperTrabalhos);


