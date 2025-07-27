// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo() {
    let input = document.getElementById("amigo");
    
    let nombre = input.value;

    //acá valido que se ingrese un nombre y no permita vacíos.
    if (nombre.trim() === "") {
        alert("Debe escribir un nombre para ser ingresado");
        return;
    }

    amigos.push(nombre);

    let lista = document.getElementById("listaAmigos");
    let nuevoItem = document.createElement("li");
    nuevoItem.textContent = nombre;
    lista.appendChild(nuevoItem);

    input.value = "";
}

function sortearAmigo() {
    if (amigos.length === 0) {
        // Si no hay amigos ingresados, se indica mediante mensaje.
        document.getElementById("resultado").textContent = "No hay amigos en la lista para sortear.";
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    let resultado = document.getElementById("resultado");
    resultado.textContent = "El nombre del amigo secreto sorteado es: " + amigoSorteado ;
}

