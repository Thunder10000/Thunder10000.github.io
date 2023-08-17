const alfabeto = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function cifrarTexto() {
    var entradaOriginal = document.getElementById('inputOriginalText');
    var resultado = document.getElementById('resultadoCifrado');
    let mensajeOriginal = entradaOriginal.value.toLowerCase();  
    let mensajeCifrado = "";

    for (let i = 0; i < mensajeOriginal.length; i++) {
        let letra = mensajeOriginal[i];
        let indice = alfabeto.indexOf(letra);
        let nuevaLetra = alfabeto[(indice + 5) % alfabeto.length];
        mensajeCifrado += nuevaLetra;
    }

    resultado.value = mensajeCifrado;
}

function descifrarTexto() {
    var entradaCifrado = document.getElementById('textoCifrado');
    var entradaContraseña = document.getElementById('contraseña');
    var resultado = document.getElementById('resultadoDescifrado');
    let mensajeCifrado = entradaCifrado.value.toLowerCase(); 
    let contraseña = entradaContraseña.value;

    if (contraseña !== "ITI") {  
        resultado.value = "Contraseña incorrecta";
        return;
    }

    let mensajeDescifrado = "";

    for (let i = 0; i < mensajeCifrado.length; i++) {
        let letra = mensajeCifrado[i];
        let indice = alfabeto.indexOf(letra);
        let nuevoIndice = (indice - 5 + alfabeto.length) % alfabeto.length;
        let nuevaLetra = alfabeto[nuevoIndice];
        mensajeDescifrado += nuevaLetra;
    }

    resultado.value = mensajeDescifrado;
}