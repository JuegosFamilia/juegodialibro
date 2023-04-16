
const respuestasCorrectas = ["7"]; // Aquí puedes agregar más respuestas correctas
const verificarRespuestas = () => {
  const respuesta1 = document.getElementById("respuesta1").value.toUpperCase();

  if (respuestasCorrectas.includes(respuesta1)) {
    document.getElementById("respuestas-correctas").style.display = "block";
    document.getElementById("imagen").src = "img/cebra.jpeg"; // Aquí debes colocar la URL de tu imagen
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