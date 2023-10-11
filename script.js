function initScrollSuave () {
const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const div = document.querySelector(href);
    const topo = div.offsetTop;

    window.scrollTo({
        top: topo,
        behavior:'smooth',
    });
}

linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection);
}); 
}
initScrollSuave();