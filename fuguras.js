//Código del cuadrado
console.group("Cuadrados")
/* const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden " + ladoCuadrado + " cm"); */

function perimetroCuadrado(lado){
    return lado * 4;
} 
/* console.log("El perímetro del cuadrado es " + perimetroCuadrado + "cm"); */

function areaCuadrado(lado){ 
    return lado * lado;
}
/* console.log("El área del cuadrado es " + areaCuadrado + " cm^2"); */
console.groupEnd();
//Código del cuadrado

//Código del triángulo
console.group("Triángulos")
/* const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;
console.log(
    `los lados del triángulo miden ${ladoTriangulo1} cm, ${ladoTriangulo2} cm y la base mide ${baseTriangulo} cm`);
console.log(`La altura del triángulo es ${alturaTriangulo} cm`);
 */

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}
/* console.log(`El perímetro del triángulo es ${perimetroTriangulo} cm`); */

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}
/* console.log(`El área del triángulo es ${areaTriangulo} cm^2`); */

console.groupEnd();
//Código del triángulo

//Código del círculo
console.group("Círculos")
/* const radioCirculo = 4;
console.log(`El radio del circulo es ${radioCirculo} cm`); */

function diametroCirculo(radio) {
    return radio * 2;
}
/* console.log(`El diametro del circulo es ${diametroCirculo} cm`); */


const PI = Math.PI;
console.log(`El valor de PI es ${PI}`);

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return  diametro * PI;
}

/* console.log(`El perímetro del circulo es ${perimetroCirculo} cm`); */


function areaCirculo(radio){
    return (radio * radio) * PI;
}
/* console.log(`El área del circulo es ${areaCirculo} cm^2`); */

console.groupEnd();
//Código del círculo