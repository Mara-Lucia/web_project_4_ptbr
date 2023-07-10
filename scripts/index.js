const editar = document.querySelector('.editar');
const acrescentar = document.querySelector('.acrescentar');
const fechar  = document.querySelector('.popup__fechar');
const salvar = document.querySelector('.salvar');
const inputNome = document.querySelector('.input__text_type_nome');
const inputSobreMim = document.querySelector('.input__text_type_sobre_mim');
const title = document.querySelector('.profile__title');
const subtitle = document.querySelector('.profile__subtitle');
const popup = document.querySelector('.popup')
const formElement = document.querySelector('#form');

function abrePopup () {
    const popupFundo = document.querySelector('.popup__fundo');
    popupFundo.classList.add('popup__fundo-visivel');
}

function fecharPopup () {
    const popupFundo = document.querySelector('.popup__fundo');
    popupFundo.classList.remove('popup__fundo-visivel');
}
function preencherFormulario (){
    const title = document.querySelector('.profile__title').textContent;
    const subtitle = document.querySelector('.profile__subtitle').textContent;
    popup.querySelector('input#nome').value = title;
    popup.querySelector('input#sobre_mim').value = subtitle;
}


function salvarDados(event) {
    event.preventDefault()
   title.textContent = inputNome.value;
   subtitle.textContent = inputSobreMim.value;
    fecharPopup()
}
function limparCampos(){
    formElement.reset() 
    // popup.querySelector('input#nome').value = '';
    // popup.querySelector('input#sobre_mim').value = '';
}
editar.addEventListener('click', abrePopup);
editar.addEventListener('click', preencherFormulario);
acrescentar.addEventListener('click', abrePopup);
acrescentar.addEventListener('click', limparCampos);
fechar.addEventListener('click', fecharPopup);
formElement.addEventListener('submit', salvarDados)


