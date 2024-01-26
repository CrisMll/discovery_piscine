function colorAleatorio(){
    let body = document.body
    let colorRandom = getRandomColor();
    body.style.backgroundColor = colorRandom;
}
function getRandomColor() {
    return '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0');
  }
  /*He buscado por qué valor habría que multiplicar el numero obtenido  para que sea el máximo hexadecimal
  y lo convierte en cadena de texto con toString(16) con parametro 16 porque el sistema hexadecimal va en base 16.
  padStart asegura que la cadena sea máximo de 6 dígitos y agrega ceros si es necesario.
  */

  