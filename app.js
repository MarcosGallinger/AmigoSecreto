const listaAmigos = [];
let Nombre = document.getElementById('listaAmigos');



function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento)
    elementoHTML.innerHTML = texto;
    return;
}

function agregarAmigo() {
    limpiarCaja();
    let amigoUsuario = document.getElementById("amigo").value; 
    if (amigoUsuario){
        document.querySelector('#amigo').value = '';
    listaAmigos.push(amigoUsuario);
    actualizarUl();
    } else {
        alert("Debes ingresar un nombre de amigo");
    }
    }

    function actualizarUl() {
        let amigosCadena = "";
        for (let i = 0; i < listaAmigos.length; i++) {
            amigosCadena += listaAmigos[i] + "\n";
        }
        asignarTextoElemento('ul', amigosCadena);
    }

function sortearAmigo(){
    if (listaAmigos.length > 0){
        limpiarCaja();
        let sorteoAmigoSecreto = Math.floor(Math.random() * listaAmigos.length);
        asignarTextoElemento('#resultado', listaAmigos[sorteoAmigoSecreto]);
        listaAmigos.length = 0;
        actualizarUl();
        } else {
            alert("Sorteo Finalizado");
            }
}

function limpiarCaja(){
    let ul = document.querySelector('ul');
    ul.innerHTML = '';
    amigosCadena = "";
}
  
limpiarCaja();