let operandoa;
let operandob;
let operacion;
let pantalla = "";

function init() {
  const resultado = document.getElementById('resultado');

  const uno = document.getElementById('uno');
  const dos = document.getElementById('dos');
  const tres = document.getElementById('tres');
  const cuatro = document.getElementById('cuatro');
  const cinco = document.getElementById('cinco');
  const seis = document.getElementById('seis');
  const siete = document.getElementById('siete');
  const ocho = document.getElementById('ocho');
  const nueve = document.getElementById('nueve');
  const cero = document.getElementById('cero');

  const suma = document.getElementById('suma');
  const resta = document.getElementById('resta');
  const multiplicacion = document.getElementById('multiplicacion');
  const division = document.getElementById('division');
  const igual = document.getElementById('igual');
  const reset = document.getElementById('reset');

  const seno = document.getElementById('seno');
  const coseno = document.getElementById('coseno');
  const tangente = document.getElementById('tangente');

  // Números
  uno.onclick = () => agregarNumero("1");
  dos.onclick = () => agregarNumero("2");
  tres.onclick = () => agregarNumero("3");
  cuatro.onclick = () => agregarNumero("4");
  cinco.onclick = () => agregarNumero("5");
  seis.onclick = () => agregarNumero("6");
  siete.onclick = () => agregarNumero("7");
  ocho.onclick = () => agregarNumero("8");
  nueve.onclick = () => agregarNumero("9");
  cero.onclick = () => agregarNumero("0");

  // Operadores
  suma.onclick = () => seleccionarOperador("+");
  resta.onclick = () => seleccionarOperador("-");
  multiplicacion.onclick = () => seleccionarOperador("*");
  division.onclick = () => seleccionarOperador("/");

  // Funciones trigonométricas
  seno.onclick = () => funcionTrigonometrica("sin");
  coseno.onclick = () => funcionTrigonometrica("cos");
  tangente.onclick = () => funcionTrigonometrica("tan");

  igual.onclick = () => calcular();
  reset.onclick = () => resetear();
}

function agregarNumero(num) {
  pantalla += num;
  document.getElementById('resultado').textContent = pantalla;
}

function seleccionarOperador(op) {
  if (pantalla === "") return; // Evita errores si no hay número

  if (operandoa !== undefined && operacion !== undefined) {
    // Si ya hay una operación pendiente, calcula primero
    calcular();
  }

  operandoa = parseFloat(pantalla);
  operacion = op;
  pantalla = "";
  
  // Muestra el operador en pantalla (opcional pero recomendado)
  // document.getElementById('resultado').textContent = operandoa + " " + op;
}

function funcionTrigonometrica(func) {
  if (pantalla === "") return; // Evita errores si no hay número

  let numero = parseFloat(pantalla);
  let radianes = numero * (Math.PI / 180); // Convierte grados a radianes
  let resultado = 0;

  switch (func) {
    case "sin":
      resultado = Math.sin(radianes);
      break;
    case "cos":
      resultado = Math.cos(radianes);
      break;
    case "tan":
      resultado = Math.tan(radianes);
      break;
  }

  // Redondea a 6 decimales para evitar errores de precisión
  resultado = Math.round(resultado * 1000000) / 1000000;

  document.getElementById('resultado').textContent = resultado;
  pantalla = resultado.toString();
}

function calcular() {
  if (pantalla === "" || operandoa === undefined || operacion === undefined) return;

  operandob = parseFloat(pantalla);
  let res = 0;

  switch (operacion) {
    case "+":
      res = operandoa + operandob;
      break;
    case "-":
      res = operandoa - operandob;
      break;
    case "*":
      res = operandoa * operandob;
      break;
    case "/":
      if (operandob === 0) {
        res = "Error";
      } else {
        res = operandoa / operandob;
      }
      break;
  }

  document.getElementById('resultado').textContent = res;
  pantalla = res.toString();
  operandoa = undefined;
  operacion = undefined;
}

function resetear() {
  document.getElementById('resultado').textContent = "";
  operandoa = undefined;
  operandob = undefined;
  operacion = undefined;
  pantalla = "";
}

document.addEventListener('DOMContentLoaded', init);
