//Scroll Suave
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

//Modal
 function initModal() {
    
    const botaoAbrir = document.querySelector('[data-modal="abrir"]');
    const botaoFechar = document.querySelector('[data-modal="fechar"]');
    const containerModal = document.querySelector('[data-modal="container"]');

    if(botaoAbrir && botaoFechar && containerModal){
    function abrirModal(event) {
    event.preventDefault();
    containerModal.classList.add('ativo');
}

function fecharModal(event){
    event.preventDefault();
    containerModal.classList.remove('ativo');
}

function cliqueForaModal(event) {
    if(event.target === this){
    fecharModal(event);
    }
}

botaoAbrir.addEventListener('click', abrirModal);
botaoFechar.addEventListener('click', fecharModal);
containerModal.addEventListener('click', cliqueForaModal);
}
 }
initModal();

