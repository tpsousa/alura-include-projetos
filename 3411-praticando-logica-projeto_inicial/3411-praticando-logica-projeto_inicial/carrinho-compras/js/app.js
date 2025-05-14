
    let total_geral = 0;

    limpar();


//function to add a item
const add =()=> {

    let produto = document.getElementById('produto').value = '';
    let quantidade = document.getElementById('quantidade').value = '0';
    
    //no caso como estamos lidando com um array length 2,o primeiro elemento e o nome,entao: 
    let nome = produto.splice('-')[0];
    //aqui a mesma coisa,porem o nosso valor do produto e o segundo item do nosso array : 
    let valor = produto.splice('R$')[1];
   


    let carrinho = document.getElementById("lista-produtos");

    //atualizar o valor total geral 

    let valorGeral = valorGeral + preco;
    let campo_total = document.getElementById("valor-total");

    campo_total.textContent = ` R$ ${campo_total}`;


    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R${preco}</span>
  </section>`;


    let price = nome * valor ; 
    

    //let total_produtos = quantidade * valor;

    alert(produto);

    alert(quantidade);

    alert(nome);

    alert(valor);

    //alert(total_produtos);
}
//function to clear the input

const clear =()=>{

 let total_geral = 0;

 let produto = document.getElementById('produto').value = "";

 let quantidade = document.getElementById('quantidade').value = "";
}