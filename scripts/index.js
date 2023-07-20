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
const popupFundo = document.querySelector(".popup__fundo");
const popupAcrescentar = document.querySelector(".popup__acrescentar");
const botoesCurtir = document.querySelectorAll(".elements__like");
const botoesDescartar = document.querySelectorAll('.elements__descartar');
const botoesAtivaFoto = document.querySelectorAll('.elements__img');

function abrePopup() {
  popupFundo.classList.add("popup__fundo-visivel");
}
function acrescentarcard() {
  popupAcrescentar.classList.add("popup__acrescentar-visivel");
}
function fecharPopup() {
  // popupAcrescentar.classList.remove("popup__acrescentar-visivel");
  popupFundo.classList.remove("popup__fundo-visivel");
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

function createCard (criarCard){
const cardTemplate = document.querySelector('#card-template');
const cardElement = cardTemplate.content.cloneNode(true);

const tituloCard = cardElement.querySelector(".elements__title_popup", "elements__title");
const imgCard = cardElement.querySelector(".elements__img_popup","elements__img")

titutoElement.textContent = criarCard.titulo;
imgElement.src = criarCard.linkImagem;
imgElement.alt = criarCard.titulo;


const cardList = document.querySelector('.criarCard');
cardList.append(cardElement);


const criarCard = [{
  titulo: "Lago Louise",
  linkImagem: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg"
}];
 
}

criarCard.forEach(function(card){
  createCard(card);
});

editar.addEventListener("click", abrePopup);
editar.addEventListener("click", preencherFormulario);
acrescentar.addEventListener("click", abrePopup);
// acrescentar.addEventListener('click', limparCampos);
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


