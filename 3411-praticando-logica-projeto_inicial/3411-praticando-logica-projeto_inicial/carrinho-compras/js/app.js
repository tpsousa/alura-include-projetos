






//function to add a item
const add =()=> {
    let produto = document.getElementById('produto');
    let quantidade = document.getElementById('quantidade');
    
    let nome = produto.splice('-');

    let valor = produto.splice('R$')[1];

    

    //let total_produtos = quantidade * valor;

    alert(produto);

    alert(quantidade);

    alert(nome);

    alert(valor);

    //alert(total_produtos);
}
//function to clear the input

const clear =()=>{
  let produto = document.getElementById('produto').value = "";

  let quantidade = document.getElementById('quantidade').value = "";
}