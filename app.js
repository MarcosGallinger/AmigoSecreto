const listaAmigos = [];
let Nombre = document.getElementById('listaAmigos');



function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento)
    elementoHTML.innerHTML = texto;
    return;
}


function agregarAmigo() {
    let amigoUsuario = document.getElementById("amigo").value;
    document.querySelector('#amigo').value = '';
    listaAmigos.push(amigoUsuario);
    let amigosCadena = "";
    for (let i = 0; i < listaAmigos.length; i++) {
        amigosCadena += listaAmigos[i] + "\n";
     }
     asignarTextoElemento('ul', amigosCadena);
    }

function sortearAmigo(){
    let sorteoAmigoSecreto = Math.floor(Math.random() * listaAmigos.length);
    asignarTextoElemento('ul', listaAmigos[sorteoAmigoSecreto]);
    limpiarCaja;
    return;    
}



function limpiarCaja(){
    document.querySelector('#amigo').value = '';
    let ul = document.querySelector('ul');
    ul.innerHTML = '';
}
  