
document.addEventListener('DOMContentLoaded', () => {
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.animate-on-scroll');
        const triggerBottom = window.innerHeight * 0.85;

        elements.forEach(el => {
            const boxTop = el.getBoundingClientRect().top;
            if (boxTop < triggerBottom) {
                el.classList.add('animate__fadeInUp');
                el.classList.add('animate__animated');
            }
        });
    };

    animateOnScroll(); // Ejecutar al cargar
    window.addEventListener('scroll', animateOnScroll);
});
 // Mostrar u ocultar el botón de volver arriba
window.addEventListener("scroll", function () {
    const btn = document.getElementById("backToTop");
    if (window.scrollY > 300) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  });

  
  // Mostrar sección cuando entra al viewport
function revealOnScroll() {
    const reveals = document.querySelectorAll(".reveal");
  
    reveals.forEach(function (element) {
      const windowHeight = window.innerHeight;
      const elementTop = element.getBoundingClientRect().top;
      const revealPoint = 100; // cuanto antes querés que aparezca
  
      if (elementTop < windowHeight - revealPoint) {
        element.classList.add("active");
      }
    });
  }
  
  window.addEventListener("scroll", revealOnScroll);
  window.addEventListener("load", revealOnScroll); // Para cargar lo visible al principio
  