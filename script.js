// local reviews data
const reviews = [
  {
    id: 1,
    name: 'Malu Barros',
    job: 'Quem sou eu no mundo de Produto Digital?',
    img: 'malu3.png',
    text: "Uma garota extrovertida que, aos poucos, descobriu que a linha de código mais cara é a que precisa ser deletada por não atender à expectativa da pessoa usuária.",
  },
  {
    id: 2,
    name: " Análise de Requisitos - UX - PO - PM ",
    job: "O que eu faço hoje dentro desse vasto universo?",
    img: 'malu4.jpeg',
    text: 'Bacharela em TI, atuo como Analista de Requisitos na ZG SOLUÇÕES e, cada vez mais, sigo mergulhando nesse mundo vasto de Produto Digital.',
  },
  {
    id: 3,
    name: 'Trajetória em TI',
    job: 'Como tudo começou?',
    img: 'malu4.jpeg',
    text: 'A minha jornada na área de Tecnologia da Informação começou em 2012, com o início da formação técnica em Informática e teve continuidade com a graduação. Desde então, vivo em constante evolução, entendendo sempre que o produto não é o fim, mas o meio de se vivenciar experiências incríveis. ',
  },
  {
    id: 4,
    name: 'Outras experiências...',
    job: 'O que já fiz desde que ingressei no mercado de trabalho?',
    img: 'malu.jpeg',
    text: 'Já atuei na área de Redes e Telecomunicações, como líder de equipe de atendimento e gerente de TI, mas minha familiaridade e maior afeição é com Product Management, com foco nos segmentos e etapas do processo de design, especialmente com base no Design Thinking. É bom lembrar que os anseios por trás dos problemas do usuário é peça-chave para a experimentação de soluções inovadoras. ',
  },
  {
    id: 5,
    name: 'Sobre Produto Digital...',
    job: 'O que não posso esquecer?',
    img: 'malu.jpeg',
    text: 'Os anseios por trás dos problemas do usuário é peça-chave para a experimentação de soluções inovadoras. ',
  },
];
// select items
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener('DOMContentLoaded', function() {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
});

// show person based on item
function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}
// show next person
nextBtn.addEventListener('click', function() {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});
// show prev person
prevBtn.addEventListener('click', function() {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});
// show random person
randomBtn.addEventListener('click', function() {
  console.log('hello');

  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
});
