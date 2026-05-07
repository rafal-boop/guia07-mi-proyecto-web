function saludar() {

    let nombre = document.getElementById("nombre").value.trim();
    let resultado = document.getElementById("resultado");

    // Validar si está vacío
    if (nombre === "") {
        resultado.innerText = "⚠️ Por favor, ingresa tu nombre.";
        resultado.style.color = "red";
    }

    // Validar longitud mínima
    else if (nombre.length < 3) {
        resultado.innerText = "⚠️ El nombre debe tener al menos 3 letras.";
        resultado.style.color = "orange";
    }

    else {
        resultado.innerText = `✅ Hola ${nombre}, bienvenido al sistema.`;
        resultado.style.color = "green";
    }
}

function validarCorreo() {

    let correo = document.getElementById("correo").value.trim();
    let mensaje = document.getElementById("mensajeCorreo");

    // Expresión regular para validar correo
    let formatoCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validar campo vacío
    if (correo === "") {
        mensaje.innerText = "⚠️ Debe ingresar un correo.";
        mensaje.style.color = "red";
    }

    // Validar formato incorrecto
    else if (!formatoCorreo.test(correo)) {
        mensaje.innerText = "❌ El correo no tiene un formato válido.";
        mensaje.style.color = "orange";
    }

    else {
        mensaje.innerText = "✅ Correo registrado correctamente.";
        mensaje.style.color = "green";
    }
}