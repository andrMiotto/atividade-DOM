const adicionar = document.getElementById('adicionar');
const subtrair = document.getElementById('subtrair');
const contador = document.getElementById('contador');
let count = 0;

adicionar.addEventListener('click', () => {
    count++;
    contador.textContent = count;
});

subtrair.addEventListener('click', () => {
    count--;
    contador.textContent = count;
});

const conteudo = document.getElementById('conteudo');
const titulo = document.getElementById('titulo');
const paragrafo = document.getElementById('paragrafo');

function corAleatoria() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

document.getElementById('btnCorFundo').addEventListener('click', () => {
    conteudo.style.backgroundColor = corAleatoria();
});

document.getElementById('btnCorTitulo').addEventListener('click', () => {
    titulo.style.color = corAleatoria();
});

document.getElementById('btnCorParagrafo').addEventListener('click', () => {
    paragrafo.style.color = corAleatoria();
});

const fontes = [
    'Roboto', 'Open Sans', 'Lato', 'Montserrat', 'Oswald',
    'Raleway', 'Merriweather', 'PT Sans', 'Ubuntu', 'Nunito',
    'Playfair Display', 'Roboto Slab', 'Source Sans Pro', 'Fira Sans', 'Indie Flower'
];

document.getElementById('btnFonteTitulo').addEventListener('click', () => {
    const fonteRandom = fontes[Math.floor(Math.random() * fontes.length)];
    titulo.style.fontFamily = `'${fonteRandom}', sans-serif`;
});

document.getElementById('btnFonteParagrafo').addEventListener('click', () => {
    const fonteRandom = fontes[Math.floor(Math.random() * fontes.length)];
    paragrafo.style.fontFamily = `'${fonteRandom}', sans-serif`;
});
