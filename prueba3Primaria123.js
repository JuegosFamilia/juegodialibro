
const respuestasCorrectas = ["TERRIBLES"]; // Aquí puedes agregar más respuestas correctas
const verificarRespuestas = () => {
  const respuesta1 = document.getElementById("respuesta1").value.toUpperCase();

  if (respuestasCorrectas.includes(respuesta1)) {
    document.getElementById("respuestas-correctas").style.display = "block";
    document.getElementById("imagen").src = "img/grufalo.jpeg"; // Aquí debes colocar la URL de tu imagen
  } else {
    alert("Inténtalo de nuevo.");
  }
}