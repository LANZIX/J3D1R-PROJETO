let txtGame = document.querySelector('#txtGame');
const next = document.querySelector('#next');

next.addEventListener('click', verificaCodigo);

 function verificaCodigo(e) {

    const actionHTML = document.querySelector('.um');
    let valor = txtGame.value;
    if (valor === 'align-items: flex-end;' || valor === 'align-items:flex-end;' || valor === ' align-items:flex-end;' || valor === ' align-items: flex-end;' 
        || valor === 'align-items: flex-end; ' || valor === ' align-items: flex-end; ' || valor === ' align-items:flex-end; ') {
        /* alert('YUHUUUL!'); */
        actionHTML.style.alignItems = 'end';

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

   




















  /*  const buttonElement = document.querySelector('#next');
   const textAreaElement = document.querySelector('#txtGame');
   

   function addCSS (e) {

       const textAreaElement = document.querySelector('#txtGame')
       const css = textAreaElement.value

       const personagens = document.querySelector('.um')
       personagens.style.cssText = css
       let hideBag = document.querySelector('.bag');
       hideBag.style.display = 'none';
       
       console.log(personagens);        
   }
   
   function nextLevel() {
     console.log('a') 
    const personagens = document.querySelector('.um');
    let onde = personagens.style;
    console.log(onde)
    if(onde.style == 'justify-content: end;'){
        alert('deu certo')
    }
   }}

    buttonElement.addEventListener('click', addCSS) 
    textAreaElement.addEventListener('keyup',addCSS) 
 textAreaElement.addEventListener('keyup',nextLevel)
    */