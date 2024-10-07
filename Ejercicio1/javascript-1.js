/*///// 1. Configuración del canvas ///*/
const CANVAS = document.getElementById("lienzo");
const CTX = CANVAS.getContext("2d");
CANVAS.width = window.innerWidth;
CANVAS.height = window.innerHeight;



/*///// 2. Evento para asegurarnos que el tamaño del render sucediendo en el canvas coincida con el tamaño del DOM ///*/
function updateCanvasSize() {
  CANVAS.width = CANVAS.getBoundingClientRect().width; // Más info sobre la funcion getBoundingClientRect() disponible en los elementos HTML: https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
  CANVAS.height = CANVAS.getBoundingClientRect().height;
  
  // Al actualizar el tamaño del canvas, automáticamente se "limpia" borrando lo que hayamos renderizado.
  // Por ello en este ejemplo estamos renderizando nuevamente el rectángulo para verlo en pantalla ya que no se está renderizando constantemente por medio de requestAnimationFrame, cuando configuremos eso ya no será necesario llamar la función de dibujo o render aquí.
  renderRectangle();
}



/*///// 3. Renderizado usando API de dibujo ///*/
function renderRectangle() {
  /*///// 3.1 Definir el color de relleno de las figuras que vamos a dibujar ///*/
  CTX.fillStyle = "aqua";

  /*///// 3.2 Dibujar un rectangulo en el canvas ///*/
  CTX.fillRect(10, 10, 150, 100);
  // Sintaxis: CTX.fillRect(x, y, width, height);
}
// Documentacion sobre los comandos de dibujo disponibles:
// https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D



/*///// 4. Ejecutar nuestro código ///*/
window.addEventListener("resize", updateCanvasSize);
renderRectangle();




/* Happy Coding! 👾 */