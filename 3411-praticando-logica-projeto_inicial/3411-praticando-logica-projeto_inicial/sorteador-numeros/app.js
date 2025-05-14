

//sort numbers in this values of another numbers

function sort() {
    let numero = document.getElementById('numero').value

    let de  = parseInt(document.getElementById('de').value);

    let ate = parseInt(document.getElementById('ate').value);

    //alert("testing the function to see if is working")

    let sorted_numbers = []; 

    let number;

    for(let i = 0 ; i < quantidade ; i++){

     number  = obter_numero(min,max)
     //isso vai evitar que os numeros sorteados sejam repetidos
      while(sorteados.includes(number)){
        number  = obter_numero(min,max);
      }
      
      sorted_numbers.push(number);
    }


    let resultado = getElementById('resultado');
    resultado.innerHtml = `<label class = resultado> meu_paragrafo <label>`
}

//funcao para alterar o status do btn
function alterar_status ( ){
    let botao = document.getElementById('btn-reiniciar');

    if (botao.class.contains('botao-desabilitado')) {
        botao.class.remove('container__botao-desabilitado');
        botao.class.add('container__botao-desabilitado');
    }else {
      botao.class.add('container__botao-desabilitado');
      botao.class.remove('container__botao-desabilitado');
    }
}
function calcular () {
    if (quantidade > 10 || valor >= 100) {

    }
}
function obter_numero () {
    return Math.floor(Math.random(max - min + 1 ) + max)
}

