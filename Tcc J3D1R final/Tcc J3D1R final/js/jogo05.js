let txtGame = document.querySelector('#txtGame');
const next = document.querySelector('#next');

next.addEventListener('click', verificaCodigo);

 function verificaCodigo(e) {

    const actionHTML = document.querySelector('.um');
    let valor = txtGame.value;
    if (valor === 'flex-direction: column-reverse;' || valor === 'flex-direction: column-reverse;' || valor === ' flex-direction: column-reverse;' || valor === ' flex-direction:column-reverse;' 
        || valor === 'flex-direction: column-reverse; ' || valor === 'flex-direction:column-reverse; ') {
        /* alert('YUHUUUL!'); */
        actionHTML.style.flexDirection = 'column-reverse';

        setTimeout(chamaModal, 1000); 
    }
    else {
        alert('Você errou! Tente novamente por favor.');
    }
}

function chamaModal() {
    document.querySelector('.exemploModal').style.display = 'block';
}

function abrirNav(){
    document.getElementById('menuOculto').style.width="250px"
    document.getElementById('principal').style.width="250px"
    
   }
   
   function fecharNav(){
       document.getElementById('menuOculto').style.width="0px"
       document.getElementById('principal').style.width="0px"
   }

   




















/* 
const buttonElement = document.querySelector('button');

function addCSS () {
    const textAreaElement = document.querySelector('textarea')
    const css = textAreaElement.value
    const personagens = document.querySelector('.personagens')
    personagens.style.cssText = css

}

buttonElement.addEventListener('click', addCSS) */