
  const respuestasCorrectas = ["SOTO", "ALTO", "FÚTBOL", "CLUB"]; // Aquí puedes agregar más respuestas correctas
    const verificarRespuestas = () => {
      const respuesta1 = document.getElementById("respuesta1").value.toUpperCase();
      const respuesta2 = document.getElementById("respuesta2").value.toUpperCase();
      const respuesta3 = document.getElementById("respuesta3").value.toUpperCase();
      const respuesta4 = document.getElementById("respuesta4").value.toUpperCase();

  
      if (respuestasCorrectas.includes(respuesta1) && respuestasCorrectas.includes(respuesta2) && respuestasCorrectas.includes(respuesta3) && respuestasCorrectas.includes(respuesta4)) {
        document.getElementById("respuestas-correctas").style.display = "block";
        document.getElementById("imagen").src = "img/futbol.jpeg"; // Aquí debes colocar la URL de tu imagen
      } else {
        alert("Inténtalo de nuevo.");
      }
    }