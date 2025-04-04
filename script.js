// Carrossel Automático
let index = 0;
const images = document.querySelectorAll(".carousel img");

function changeImage() {
    images[index].classList.remove("active");
    index = (index + 1) % images.length;
    images[index].classList.add("active");
}
setInterval(changeImage, 3000);

// Atualizar ano do rodapé
document.getElementById("current-year").textContent = new Date().getFullYear();

// Scroll suave para os links do menu
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});