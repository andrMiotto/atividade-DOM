

const adicionar = document.getElementById('adicionar');
const subtrair = document.getElementById('subtrair')
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


const btnCorFundo = document.getElementById('btnCorFundo');

let conteudo = document.getElementById('conteudo')


btnCorFundo.addEventListener('click', function () {

    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    conteudo.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

});


const btnCorTitulo = document.getElementById('btnCorTitulo');

const titulo = document.getElementById('titulo')

btnCorTitulo.addEventListener('click', function () {

    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    titulo.style.color = `rgb(${r}, ${g}, ${b})`;

});

const btnCorParagrafo = document.getElementById('btnCorParagrafo');

const paragrafo = document.getElementById('paragrafo')

btnCorParagrafo.addEventListener('click', function () {

    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    paragrafo.style.color = `rgb(${r}, ${g}, ${b})`;

});



const btnFonteTitulo = document.getElementById('btnFonteTitulo');


const fontes = [
    'Roboto', 'Open Sans', 'Lato', 'Montserrat', 'Oswald',
    'Raleway', 'Merriweather', 'PT Sans', 'Ubuntu', 'Nunito',
    'Playfair Display', 'Roboto Slab', 'Source Sans Pro', 'Fira Sans', 'Indie Flower'
];

btnFonteTitulo.addEventListener('click', function () {

    const fonteRandom = fontes[Math.floor(Math.random() * fontes.length)];


    titulo.style.fontFamily = `'${fonteRandom}', sans-serif`;
});





const btnFonteParagrafo = document.getElementById('btnFonteParagrafo');


btnFonteParagrafo.addEventListener('click', function () {

    const fonteRandom = fontes[Math.floor(Math.random() * fontes.length)];


    paragrafo.style.fontFamily = `'${fonteRandom}', sans-serif`;
});






