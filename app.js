let amigos = [];


function adicionarAmigo(){
    let campoEntrada = document.getElementById("amigo");
    let nome = campoEntrada.value.trim();

    if(nome === ""){
        alert("Por favor, insira um nome");
        return;
    }
    amigos.push(nome);
    campoEntrada.value = "";
    atualizarLista();
}

function atualizarLista(){
    let lista = document.getElementById("resultado");
    lista.innerHTML = "";
    for(let i = 0; i < amigos.length; i++){
        let item = document.createElement("li");
        item.textContent = amigos[i];
        lista.appendChild(item);
    }
}

