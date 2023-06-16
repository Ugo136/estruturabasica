const inputb = document.getElementById("inputb");
const botao = document.getElementById("botao");

let nome = '';

botao.onclick =()=>{
    nome = inputb.value
    alert("esse é o seu nome:" + nome);
}