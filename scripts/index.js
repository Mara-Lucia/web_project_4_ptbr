let editar = document.querySelector('.editar');
console.log(editar);

function abrePopup () {
    let popup__fundo = document.querySelector('.popup__fundo');
    popup__fundo.classList.add('popup__fundo-visivel');
}

editar.addEventListener('Click', abrePopup);

    /*     popup__fundo.style.display = 'Block';
    document.body.style.overflow = 'hidden';
popup__fundo-visivel */

/* 
let popup__fundo = document.getElementById('.pupup__fundo');



function fecharPopup () {
    let fechar = document.getElementById('.fechar');

    popup__fundo.style.display = 'none';    
    document.body.style.overflow = 'auto';

}

// Vamos encontrar o formulário no DOM
let formElement = document.querySelector('.form');

// Em seguida vem o handler do submit
// ainda não vai enviar para lugar nenhum

// Observe que o nome da função começa com um verbo
// e descreve exatamente o que a função faz
function handleProfileFormSubmit(evt) {
    // Esta linha impede o navegador 
    // de enviar o formulário da forma padrão.
    evt.preventDefault();
    // Fazendo isso, podemos definir nossa própria forma de enviar o formulário.
    // Explicaremos em mais detalhes posteriormente.

    // Vamos encontrar os campos de formulário do DOM

    let nameInput = form.querySelector('input__text_type_nome')// Use querySelector()
    let jobInput = form.querySelector('input__text_type_sobre-min') // Use querySelector()

    // Pegue os valores de cada campo do valor da propriedade correspondente

    // Selecione os elementos aos quais os valores dos campos serão inseridos

    // Insira novos valores usando a
    // propriedade textContent
}

// Conecte o handler ao formulário:
// ele vai observar o evento de submit
formElement.addEventListener('submit', handleProfileFormSubmit);  */