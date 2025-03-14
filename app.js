// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo(params) {
    let nombreDeAmigos = document.getElementById('amigo').value
  
    // Validacion
    if (nombreDeAmigos === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    //Actualizacion del array
    amigos.push(nombreDeAmigos);

    //Limpiar el campo de entrada
    limpiarCaja();
    console.log(amigos);

    
}

function limpiarCaja() {
        document.getElementById('amigo').value = '';

}