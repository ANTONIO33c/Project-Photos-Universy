// function exibição trabalho - Galeria

function initGalleryFilter() {

  const buttons = document.querySelectorAll(".gallery-categories a");
  const images = document.querySelectorAll(".gallery-grid img");

  if (!buttons.length || !images.length) return;

  buttons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();

      const filter = btn.dataset.filter;

      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      images.forEach(img => {
        const category = img.dataset.category;

        if (filter === "all" || category === filter) {
          img.style.display = "block";
        } else {
          img.style.display = "none";
        }
      });
    });
  });

  // inicia mostrando tudo com segurança
  const defaultBtn = document.querySelector('[data-filter="all"]');
  if (defaultBtn) {
    defaultBtn.click();
  }
  console.log("buttons:", document.querySelectorAll(".gallery-categories a").length);
console.log("images:", document.querySelectorAll(".gallery-grid img").length);
}

window.addEventListener("load", () => {
  initGalleryFilter();
});

// Abrir imagem grande ao clicar

const lightbox = document.getElementById("lightbox");
const lightboxImg = lightbox.querySelector("img");

const images = document.querySelectorAll(".gallery-grid img");

images.forEach(img => {
  img.addEventListener("click", () => {
    lightboxImg.src = img.src;
    lightbox.classList.add("active");
  });
});

// fechar clicando fora
lightbox.addEventListener("click", () => {
  lightbox.classList.remove("active");
});