const respuestasCorrectas = ["ROJO", "AMARILLO", "ROSA", "AZUL", "VIOLETA"]; // Aquí puedes agregar más respuestas correctas
    const verificarRespuestas = () => {
      const respuesta1 = document.getElementById("respuesta1").value.toUpperCase();
      const respuesta2 = document.getElementById("respuesta2").value.toUpperCase();
      const respuesta3 = document.getElementById("respuesta3").value.toUpperCase();
      const respuesta4 = document.getElementById("respuesta4").value.toUpperCase();
      const respuesta5 = document.getElementById("respuesta5").value.toUpperCase();
          

      if (respuestasCorrectas.includes(respuesta1) && respuestasCorrectas.includes(respuesta2) && respuestasCorrectas.includes(respuesta3) && respuestasCorrectas.includes(respuesta4) && respuestasCorrectas.includes(respuesta5)) {
        document.getElementById("respuestas-correctas").style.display = "block";
        document.getElementById("imagen").src = "img/winnie.jpeg"; // Aquí debes colocar la URL de tu imagen
      } else {
        alert("Inténtalo de nuevo.");
      }
    }

const pistas = () => {
  let imagenes = document.getElementById("pistasimagenes");
    if (imagenes.style.display === "none") {
       imagenes.style.display = "block";
    } else {
      imagenes.style.display = "none";
    }
}