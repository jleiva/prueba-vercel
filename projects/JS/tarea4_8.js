let resultado = prompt("Seleccione una de las siguientes opciones 1= saber su promedio 2");
let nota1 = prompt("Digite su primer nota");
nota1 = parseInt(nota1)
let nota2 = prompt("Digite su segunda nota");
nota2 = parseInt(nota2)
let nota3 = prompt("Digite su tercera nota");
nota3 = parseInt(nota3)
let n;
let n4 = 3;
if (resultado == "1") {
  n = nota1 + nota2 + nota3;
  f = n / n4;
  alert("Su promedio es: " + f.toFixed(0))
}else if (resultado == "2") {
  n = nota1 + nota2 + nota3;
  alert("La suma de sus nota es: " + n)
} else {
  alert("No ingreso un numero, por favor ingrese un numero de los solicitados")
}