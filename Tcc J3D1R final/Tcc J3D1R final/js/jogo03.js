let txtGame = document.querySelector('#txtGame');
const next = document.querySelector('#next');
const textAreaElement = document.querySelector('#txtGame');

next.addEventListener('click', verificaCodigo);
textAreaElement.addEventListener('change',verificaCodigo);

 function verificaCodigo(e) {

    const actionHTML = document.querySelector('.um');
    let valor = txtGame.value;
    if (valor === 'justify-content: center;' || valor === 'justify-content:center;' || valor === ' justify-content:center;' || valor === ' justify-content: center;' 
        || valor === 'justify-content: center; ' || valor === ' justify-content: center; ') {
        /* alert('YUHUUUL!'); */
        actionHTML.style.justifyContent = 'center';
        

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

/* function chamaModal() {
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

   




















 
const buttonElement = document.querySelector('#next');

function addCSS () {
    const textAreaElement = document.querySelector('#txtGame')
    const css = textAreaElement.value
    const personagens = document.querySelector('.um')
    personagens.style.cssText = css
    setTimeout(chamaModal, 1000);

}

buttonElement.addEventListener('click', addCSS) 
textAreaElement.addEventListener('keyup',addCSS) */