let operandoa;
let operandob;
let operacion;

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

  uno.onclick = function () {
    resultado.textContent += "1";
  };

  dos.onclick = function () {
    resultado.textContent += "2";
  };

  tres.onclick = function () {
    resultado.textContent += "3";
  };

  cuatro.onclick = function () {
    resultado.textContent += "4";
  };

  cinco.onclick = function () {
    resultado.textContent += "5";
  };

  seis.onclick = function () {
    resultado.textContent += "6";
  };

  siete.onclick = function () {
    resultado.textContent += "7";
  };

  ocho.onclick = function () {
    resultado.textContent += "8";
  };

  nueve.onclick = function () {
    resultado.textContent += "9";
  };

  cero.onclick = function () {
    resultado.textContent += "0";
  };

  suma.onclick = function () {
    operandoa = parseFloat(resultado.textContent);
    operacion = "+";
    limpiar();
  };

  resta.onclick = function () {
    operandoa = parseFloat(resultado.textContent);
    operacion = "-";
    limpiar();
  };

  multiplicacion.onclick = function () {
    operandoa = parseFloat(resultado.textContent);
    operacion = "*";
    limpiar();
  };

  division.onclick = function () {
    operandoa = parseFloat(resultado.textContent);
    operacion = "/";
    limpiar();
  };

  igual.onclick = function () {
    operandob = parseFloat(resultado.textContent);
    resolver();
  };

  reset.onclick = function () {
    resetear();
  };
}

function limpiar() {
  document.getElementById('resultado').textContent = "";
}

function resetear() {
  document.getElementById('resultado').textContent = "";
  operandoa = 0;
  operandob = 0;
  operacion = "";
}

function resolver() {
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
}

document.addEventListener('DOMContentLoaded', init);
