// Suavizar o scroll nos links do menu
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('header nav ul li a');

    for (const link of links) {
        link.addEventListener('click', smoothScroll);
    }

    function smoothScroll(event) {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
            top: targetElement.offsetTop - 70, // Ajuste para o header fixo
            behavior: 'smooth'
        });
    }
});