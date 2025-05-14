

function alterar_status(id){
  let game = document.getElementById(`game - ${id}`);
  let imagem = document.querySelector('.dashboard__item__img');
  let button = document.querySelector('.dashboard__item__button');

  if (imagem.classList.contains('dashboard__item__img dashboard__item__img--rented')){
    imagem.classList.remove('dashboard__item__img dashboard__item__img--rented');
   // button.classList.remove('')
   button.textContent = "Alugar"
  }else {
    imagem.classList.add('dashboard__item__img dashboard__item__img--rented');
    //button.classList.remove('dashboard__item__button dashboard__item__button--return')
    button.textContent = "Devolver"
  }
     }