const editar = document.querySelector('.editar');
const acrescentar = document.querySelector('.acrescentar');
const fechar  = document.querySelector('.popup__fechar');

function abrePopup () {
    const popup__fundo = document.querySelector('.popup__fundo');
    popup__fundo.classList.add('popup__fundo-visivel');
}

function fecharPopup () {
    const popup__fundo =  document.querySelector('.popup__fundo');
    popup__fundo.classList.remove('popup__fundo-visivel');
}

editar.addEventListener('click', abrePopup);
acrescentar.addEventListener('click', abrePopup);
fechar.addEventListener('click', fecharPopup);
editar.addEventListener('click', preencherFormulario);
console.log({abrePopup, fecharPopup});

// Vamos encontrar o formulário no DOM
const formElement = document.querySelector('.form');

// Em seguida vem o handler do submit
// ainda não vai enviar para lugar nenhum
function preencherFormulario (){


}
// Observe que o nome da função começa com um verbo
// e descreve exatamente o que a função faz
function handleProfileFormSubmit(evt) {
    // Esta linha impede o navegador 
    // de enviar o formulário da forma padrão.
    evt.preventDefault();
    // Fazendo isso, podemos definir nossa própria forma de enviar o formulário.
    // Explicaremos em mais detalhes posteriormente.

    // Vamos encontrar os campos de formulário do DOM

    const nameInput = form.querySelector('input__text_type_nome');// Use querySelector()
    const jobInput = form.querySelector('input__text_type_sobre-min'); // Use querySelector()

    // Pegue os valores de cada campo do valor da propriedade correspondente
    const input__text_type_nome = form.querySelector('.profile__title').textContent;
    const input__text_type_sobremin = form.querySelector('.profile__subtitle').textContent;
    
    // Selecione os elementos aos quais os valores dos campos serão inseridos

    // Insira novos valores usando a
    // propriedade textContent
}

// Conecte o handler ao formulário:
// ele vai observar o evento de submit
formElement.addEventListener('submit', handleProfileFormSubmit);  