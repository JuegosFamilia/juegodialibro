const respuestasCorrectas = ["MIKECRACK"]; // Aquí puedes agregar más respuestas correctas
    const verificarRespuestas = () => {
      const respuesta1 = document.getElementById("respuesta1").value.toUpperCase();

       if (respuestasCorrectas.includes(respuesta1)) {
        document.getElementById("respuestas-correctas").style.display = "block";
        document.getElementById("imagen").src = "img/compas.jpeg"; // Aquí debes colocar la URL de tu imagen
        document.getElementById("imagen2").src = "img/mike.gif"; // Aquí debes colocar la URL de tu imagen
      } else {
        alert("Inténtalo de nuevo.");
      }
    }