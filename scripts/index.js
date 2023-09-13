const editar = document.querySelector(".editar");
const acrescentar = document.querySelector(".acrescentar");
const acrescentarCard = document.querySelector(".popup__acrecentar");
const fechar = document.querySelector(".popup__fechar");
const salvar = document.querySelector(".salvar");
const criar = document.querySelector(".criar");
const inputNome = document.querySelector(".input__text_type_nome");
const inputSobreMim = document.querySelector(".input__text_type_sobre_mim");
const title = document.querySelector(".profile__title");
const subtitle = document.querySelector(".profile__subtitle");
const popup = document.querySelector(".popup");
const formElement = document.querySelector("#form");
const formCard = document.querySelector("#formCard");
const popupFundo = document.querySelector(".popup__fundo");
const popupAcrescentar = document.querySelector(".popup__acrescentar");
const botoesCurtir = document.querySelectorAll(".elements__like");
const botoesDescartar = document.querySelectorAll('.elements__descartar');
const botoesAtivaFoto = document.querySelectorAll('.elements__img');
const modelo = document.querySelector(".molde");

const initialCards = [
  {
    name: "Vale de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg"
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg"
  },
  {
    name: "Montanhas Carecas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg"
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg"
  },
  {
    name: "Parque Nacional da Vanoise ",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg"
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg"
  }
]; 



function abrePopup () {
  const popupFundo = document.querySelector('.popup__fundo');
  popupFundo.classList.add('popup__fundo-visivel');
}

function fecharPopup () {
  const popupFundo = document.querySelector('.popup__fundo');
  popupFundo.classList.remove('popup__fundo-visivel');
}

function preencherFormulario() {
  const title = document.querySelector(".profile__title").textContent;
  const subtitle = document.querySelector(".profile__subtitle").textContent;
  popup.querySelector("input#nome").value = title;
  popup.querySelector("input#sobre_mim").value = subtitle;
}
function salvarDados(event) {
  event.preventDefault();
  title.textContent = inputNome.value;
  subtitle.textContent = inputSobreMim.value;
  fecharPopup();
}
function limparCampos() {
  formElement.reset();
  // popup.querySelector('input#nome').value = '';
  // popup.querySelector('input#sobre_mim').value = '';
}
function toggleCurtir(event) { 
  const curtir = event.target
  curtir.classList.toggle("curtido");
}
function descartarCard(event) {
  const card = document.querySelector(".elements__iten");
  card.remove();
}
function acrescentarcard() {
  popupAcrescentar.classList.add("popup__acrescentar-visivel");
}


function createCard (Card){
const cardTemplate = document.querySelector('#cardtemplate').content;
const cardElement = cardTemplate.querySelector('.elements__iten').cloneNode(true);
cardElement.querySelector('.elements__img').setAttribute('src', Card.link)
cardElement.querySelector('.elements__img').setAttribute('alt', Card.name)
cardElement.querySelector('.elements__title').textContent =Card.name;
cardElement.querySelector('.elements__descartar').addEventListener('click',  (event) => {
  event.target.parentElement.remove();
})
cardElement.querySelector('.elements__like').addEventListener('click',  (event) => {
  event.target.parentElement.toggleCurtir();
})
return cardElement
}

for (const initialCard of initialCards){
  const Card = createCard(initialCard)
  modelo.prepend(Card)

}

function checkBannerImages() {
  if (modelo.children.length) {
  }
  }
  checkBannerImages()

function addNewCard() {
  const inputTitle = document.querySelector('#titulo')
  const inputImage = document.querySelector('#Link_imagem')  
  if (inputTitle.value == '' || inputImage =='') {
    alert('Por favor preencha os campos corretammente')
    return
  }
  const Card = createCard({
    name: inputTitle.value,
    link: inputImage.value
  })
  modelo.append(Card)
  inputTitle.value = ''
  inputImage.value = ''
}

formCard.addEventListener('submit', (event) => {
  console.log(formCard)
  event.preventDefault()
  console.log('cartao')
  addNewCard()
  document.querySelector(".popup__acrescentar-visivel").classList.remove("popup__acrescentar-visivel")
})

///////       funcionalidade Z O O M da imagem do CARD   ///////////////////
const popupElemntos = document.querySelectorAll("elements__popup");
function abrirZoom(event) {
  const clicar = event.target;
  popupElemntos.classList.add(".elements__popup-visivel");
}
botoesAtivaFoto.forEach(function (clicar, index) {
  clicar.addEventListener("click", function (event) {
    abrirZoom(event);
  });
});


//criar.addEventListener("click", salvarDados, fecharPopup);
editar.addEventListener("click", abrePopup);
editar.addEventListener("click", preencherFormulario);
acrescentar.addEventListener("click", abrePopup);
acrescentar.addEventListener("click", acrescentarcard);
fechar.addEventListener("click", fecharPopup);
formElement.addEventListener("submit", salvarDados);

botoesCurtir.forEach(function (curtir,index){
    curtir.addEventListener("click", function (event){
        toggleCurtir(event)
    });
})
botoesDescartar.forEach(function (descartar,index){
    descartar.addEventListener("click", function (event){
        descartarCard(event)
    });
})
