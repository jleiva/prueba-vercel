
let option = Number(prompt('Ingresar: 1. Sumar, 2. Restar, 3. Dividir, 4. Multiplicar')) 
  num1 = prompt('Numero uno'),
  num2 = prompt('Numero dos');

let value1 = parseInt(num1),
    value2 = parseInt(num2);


/*if (option == 1) {
let resultado = value1 + value2;
document.write('El resultado de la suma es : ' + resultado);
} else if (option == 2) {
let resultado = value1 - value2;
document.write('El resultado de la resta es : ' + resultado);

} else if (option == 3) {
let resultado = value1 / value2;
document.write('El resultado de la division  es : ' + resultado);

} else if (option == 4) {
let resultado = value1 * value2;
document.write('El resultado de la suma es : ' + resultado);

} 
*/

let resultado = 0
switch(option){
	case 1:
		resultado = value1 + value2;
  document.write('El resultado de la suma es : ' + resultado);
		break;
	case 2:
    resultado = value1 - value2;
document.write('El resultado de la resta es : ' + resultado);
		break;
	case 3:
		resultado = value1 / value2;
document.write('El resultado de la division  es : ' + resultado);
		break;
	case 4:
		 resultado = value1 * value2;
document.write('El resultado de la suma es : ' + resultado);
		break;

	default:
		document.write(" seleccione una opcion valida");
		break
} 

/*
if(operacion == "1"){
	document.write("suma");
}else if(operacion == "2"){
	document.write("resta");
}else if(operacion == "3"){
	document.write("division")
}else if(operacion == "4"){
	document.write("multiplicacion")
}else if(operacion == "5"){
	document.write("raiz cuadrada");
} */

