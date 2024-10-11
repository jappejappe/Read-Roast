const cartas = document.querySelectorAll('.carta');
const seta = document.getElementById('seta');
const ver_mais = document.getElementById('ver_mais');
const backgrounds = [
    'url("./media/cardapio/bolo_de_chocolate.jpg")',
    'url("./media/cardapio/cafe_caramelizado.jpg")',
    'url("./media/cardapio/chocolate_quente.jpg")',
    'url("./media/cardapio/cafe_com_baunilha.jpg")',
    'url("./media/cardapio/coxinha.jpg")',
    'url("./media/cardapio/cupcake.jpg")',
    'url("./media/cardapio/mini_croissant.jpg")',
    'url("./media/cardapio/panquecas.jpg")',
    'url("./media/cardapio/pao_de_queijo.jpg")'
];

const textos = [
    'Bolo de Chocolate',
    'Café Caramelizado',
    'Chocolate Quente',
    'Café com Baunilha',
    'Coxinha',
    'Cupcake',
    'Mini Croissant',
    'Panquecas',
    'Pão de Queijo'
];

const paragrafo = document.getElementById('nome_maior');

const menuBackground = document.getElementById('item_1');

let indiceAtual = 0;

function trocarBackground() {
    menuBackground.style.backgroundImage = backgrounds[indiceAtual];
    paragrafo.textContent = textos[indiceAtual];
    
    indiceAtual = (indiceAtual + 1) % backgrounds.length;
}
setInterval(trocarBackground, 3500);

cartas.forEach(carta => {
    carta.addEventListener('mousemove', (event) => {
        const cartaRect = carta.getBoundingClientRect();
        const xCenter = cartaRect.left + cartaRect.width / 2;
        const yCenter = cartaRect.top + cartaRect.height / 2;

        const xOffset = (event.clientX - xCenter) / 20;
        const yOffset = (event.clientY - yCenter) / 20;

        carta.style.transform = `rotateX(${-yOffset}deg) rotateY(${xOffset}deg) translateZ(-20px)`;
    });

    carta.addEventListener('mouseleave', () => {
        carta.style.transform = 'rotateX(0) rotateY(0) translateZ(0)';
    });

    carta.addEventListener('click', () => {
        const innerCarta = carta.querySelector('.carta_inner');
        innerCarta.classList.toggle('is-flipped');
    });

seta.addEventListener('click', () => {
    document.getElementById('gen').scrollIntoView({ 
        behavior: 'smooth'
    });
});

ver_mais.addEventListener('click', () => {
    document.getElementById('gen').scrollIntoView({ 
        behavior: 'smooth'
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const esquerda = document.querySelector('.entrar_esquerda');
    const direita = document.querySelector('.entrar_direita');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            console.log('Verificando interseção:', entry.target.id);
            if (entry.isIntersecting) {
                console.log('Elemento visível:', entry.target.id);
                entry.target.classList.add('ativo');
            }
        });
    }, {

    });

    observer.observe(esquerda);
    observer.observe(direita);
});


})

function scrollToSection(sectionId) {
    const targetElement = document.getElementById(sectionId);
    targetElement.scrollIntoView({
        behavior: 'smooth' // Define o comportamento do scroll
    });
}
