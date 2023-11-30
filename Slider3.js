// Aguarde o carregamento completo do DOM
document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll('.slider img');
    const navLinks = document.querySelectorAll('.slider-nav a');

    // Função para mudar o slide
    function changeSlide(slideIndex) {
        slides.forEach(slide => {
            slide.classList.remove('active');
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
        });

        slides[slideIndex].classList.add('active');
        navLinks[slideIndex].classList.add('active');
    }

    // Adicionar evento de clique aos links de navegação
    navLinks.forEach((link, index) => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            changeSlide(index);
        });
    });
});
