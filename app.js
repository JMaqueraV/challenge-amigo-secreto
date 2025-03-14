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
    actualizarLista();
}

function limpiarCaja() {
        document.getElementById('amigo').value = '';

}

function actualizarLista() {
    // Obtener el elemento de la lista
    let lista = document.getElementById("listaAmigos");

    // Limpiar la lista existente
    lista.innerHTML = "";

    // Iterar sobre el arreglo
    for (let i = 0; i < amigos.length; i++) {
        // Crear un elemento <li> para cada amigo
        let li = document.createElement("li");
        li.textContent = amigos[i];

        // Agregar el elemento a la lista
        lista.appendChild(li);
    }
}
