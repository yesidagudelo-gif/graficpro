let operandoa;
let operandob;
let operandoc;

function init(){
  let resultado = document.getElementById('resultado');
  let reset = document.getElementById('reset');
  let suma = document.getElementById('suma');
  let resta = document.getElementById('resta');
  let multiplicacion = document.getElementById('multiplicacion');
  let division = document.getElementById('division');
  let igual = document.getElementById('igual');
  
uno.onclick = function (e){
  resultado.textContent = resultado.textContent + 1;
}

dos.onclick = function (e){
  resultado.textContent = resultado.textContent + 2;
}

tres.onclick = function (e){
  resultado.textContent = resultado.textContent + 3;
}

cuatro.onclick = function (e){
  resultado.textContent = resultado.textContent + 4;
}

cinco.onclick = function (e){
  resultado.textContent = resultado.textContent + 5;
}

seis.onclick = function (e){
  resultado.textContent = resultado.textContent + 6;
}

siete.onclick = function (e){
  resultado.textContent = resultado.textContent + 7;
}

ocho.onclick = function (e){
  resultado.textContent = resultado.textContent + 8;
}

nueve.onclick = function (e){
  resultado.textContent = resultado.textContent + 9;
}

cero.onclick = function (e){
  resultado.textContent = resultado.textContent + 0;
}
