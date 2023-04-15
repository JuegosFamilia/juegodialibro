 function verificarTexto() {
        const textoIngresado = document.getElementById("texto").value;
        const textoCorrecto = "HOJA VERDE"; // Aquí puedes cambiar el valor a tu gusto

        if (textoIngresado === textoCorrecto) {
          document.getElementById("respuesta-correcta").style.display = "block";
          document.getElementById("imagen").src = "img/oruga.jpeg"; // Aquí debes colocar la URL de tu imagen
        } else {
          alert("Inténtalo de nuevo.");
        }
      }