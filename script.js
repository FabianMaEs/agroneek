// script.js
document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".carousel-slide");
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove("active");
      if (i === index) {
        slide.classList.add("active");
      }
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  }

  // Navegación con los botones
  nextButton.addEventListener("click", nextSlide);
  prevButton.addEventListener("click", prevSlide);

  // Cambio automático de diapositivas
  setInterval(nextSlide, 5000); // Cambiar cada 5 segundos
});

// Galería de productos: Efecto de hover en imágenes
const productItems = document.querySelectorAll('.product-card');

productItems.forEach(item => {
  item.addEventListener('mouseover', () => {
    item.style.transform = 'scale(1.05)';
  });

  item.addEventListener('mouseout', () => {
    item.style.transform = 'scale(1)';
  });
});


// Carrito de compras

let cart = JSON.parse(localStorage.getItem('cart')) || [];
const cartCountElement = document.getElementById('cart-count');

// Función para actualizar el contador de productos en el carrito
function updateCartCount() {
  const totalItems = cart.reduce((acc, product) => acc + product.quantity, 0);
  cartCountElement.textContent = totalItems;
}

// Inicializar el contador del carrito al cargar la página
updateCartCount();
