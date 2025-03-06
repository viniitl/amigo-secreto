let amigos = [];


function adicionarAmigo(){
    let campoEntrada = document.getElementById("amigo");
    let nome = campoEntrada.value.trim();

    if(nome === ""){
        alert("Por favor, insira um nome");
        return;
    }
    amigos.push(nome);
    console.log("Lista de Amigos:" , amigos);
    nome.value = "";
}

