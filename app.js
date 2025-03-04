const listaAmigos = [];

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento)
    elementoHTML.innerHTML = texto;
    return;
}

function agregarAmigo() {
    limpiarCaja();
    let amigoUsuario = document.getElementById("amigo").value.trim(); 
    if (/[0-9]/.test(amigoUsuario)) {
        alert("Por favor, ingrese un nombre válido sin números.");
        return;
        } if (amigoUsuario){

        document.querySelector('#amigo').value = '';
        listaAmigos.push(amigoUsuario);
        actualizarUl();
        } else {
            alert("Debes ingresar el nombre de tu amigo");
        }
    }

    function actualizarUl() {
        let amigosElegidos = "";
        for (let i = 0; i < listaAmigos.length; i++) {
            amigosElegidos += listaAmigos[i] + "<br>";
        }
        asignarTextoElemento('ul', amigosElegidos);
    }

function sortearAmigo(){
    if (listaAmigos.length > 0){
        limpiarCaja();
        let sorteoAmigoSecreto = Math.floor(Math.random() * listaAmigos.length);
        asignarTextoElemento('#resultado', listaAmigos[sorteoAmigoSecreto]);
        asignarTextoElemento('#h2', "¡El amigo secreto es: ");
        listaAmigos.length = 0;
        lanzarConfeti()
        actualizarUl();
        } else {
            alert("Sorteo Finalizado");
            limpiarCaja();
            }
}


function lanzarConfeti() {
    confetti({
        particleCount: 2000,
        spread: 120, 
        origin: { y: 0.6 } 
    });
}

function limpiarCaja(){
    let ul = document.querySelector('ul');
    let h2 = document.querySelector('#h2');
    if (h2) {
        h2.innerHTML = "Digite el nombre de sus amigos";
    }
    if (ul){
        ul.innerHTML = '';
    }
    let resultado = document.querySelector('#resultado');
    if (resultado){
        resultado.innerHTML = '';
        }
}
  
limpiarCaja();