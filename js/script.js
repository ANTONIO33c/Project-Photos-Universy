// ================= NAVBAR =================
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


// ================= FOOTER =================
fetch("footer.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("footer").innerHTML = data;
  });


// ================= SWIPER =================
new Swiper('.swiper', {
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