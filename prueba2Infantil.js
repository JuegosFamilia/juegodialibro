
  const respuestasCorrectas = ["HOJA", "VERDE"]; // Aquí puedes agregar más respuestas correctas
    const verificarRespuestas = () => {
      const respuesta1 = document.getElementById("respuesta1").value.toUpperCase();
      console.log (respuesta1);
      const respuesta2 = document.getElementById("respuesta2").value.toUpperCase();

      if (respuestasCorrectas.includes(respuesta1) && respuestasCorrectas.includes(respuesta2)) {
        document.getElementById("respuestas-correctas").style.display = "block";
        document.getElementById("imagen").src = "img/oruga.jpeg"; // Aquí debes colocar la URL de tu imagen
      } else {
        alert("Inténtalo de nuevo.");
      }
    }