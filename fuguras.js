//Código del cuadrado

function perimetroCuadrado(lado){
    return lado * 4;
} 

function areaCuadrado(lado){ 
    return lado * lado;
}

//Código del triángulo
function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

//Código del círculo

function diametroCirculo(radio) {
    return radio * 2;
}
const PI = Math.PI;
console.log(`El valor de PI es ${PI}`);

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return  diametro * PI;
}

function areaCirculo(radio){
    return (radio * radio) * PI;
}


//Triángulo Isóseles
function alturaTriangulo(lado, base){
    const parte1 = lado * lado;
    const parte2 = base / 2;
    const paso1 = parte2 * parte2;
    const altura = Math.sqrt(parte1 - paso1);
    return altura;
}

// Aqui empezamos a interactuar con HTML
//  Cuadrado 
console.group("Cuadrados")

function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    console.log("Los lados del cuadrado miden " + value + " cm");
    
    const perimetro = perimetroCuadrado(value);
    console.log("El perímetro del cuadrado es " + perimetro + "cm");
    alert(perimetro);
}
function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    console.log("Los lados del cuadrado miden " + value + " cm"); 

    const area = areaCuadrado(value);
    console.log("El área del cuadrado es " + area + " cm^2");
    alert(area);
}
console.groupEnd();

//  Triángulo
console.group("Triángulos")
function calcularPerimetroTriangulo(){
    const inputl1 = document.getElementById("inputLado1");
    const lado1 = inputl1.value;
    const inputl2 = document.getElementById("inputLado2");
    const lado2 = inputl2.value;
    const inputB = document.getElementById("inputBase");
    const base = inputB.value;
    
    console.log(
        `los lados del triángulo miden ${lado1} cm, ${lado2} cm y la base mide ${base} cm`);
    if(lado1 == 0) {
        alert("Por favor digite el valor del primer lado");
        return;
    }else if(lado2 == 0){
        alert("Por favor digite el valor del segundo lado lado");
        return;
    }else if(base == 0){
        alert("Por favor digite el valor de la base");
        return;
    }

    perimetro = perimetroTriangulo(lado1, lado2, base);
    console.log(`El perímetro del triángulo es ${perimetroTriangulo} cm`);
    alert(perimetro);
}
function calcularAreaTriangulo(){
    const inputB = document.getElementById("inputBase");
    const base = inputB.value;
    const inputA = document.getElementById("inputAltura");
    const altura = inputA.value;

    console.log(`la base mide ${base} cm`);
    console.log(`La altura del triángulo es ${altura} cm`);

    if(altura == 0) {
        alert("Por favor digite la altura");
        return;
    }else if(base == 0){
        alert("Por favor digite el valor de la base");
        return;
    }
    const area = areaTriangulo(base, altura);
    console.log(`El área del triángulo es ${area} cm^2`);
    alert(area);
}

console.groupEnd();

//  Triángulo
console.group("Círculos")
function calcularDiametroCirculo(){
    const input = document.getElementById("inputCirculo");
    const radio = input.value;
    console.log(`El radio del circulo es ${radio} cm`);

    const diametro = diametroCirculo(radio);
    console.log(`El diametro del circulo es ${diametro} cm`);
    alert(diametro);
}
function calcularPerimetroCirculo(){
    const input = document.getElementById("inputCirculo");
    const radio = input.value;
    console.log(`El radio del circulo es ${radio} cm`);

    const perimetro = perimetroCirculo(radio);
    console.log(`El perímetro del circulo es ${perimetro} cm`);
    alert(perimetro);
}
function calcularAreaCirculo(){
    const input = document.getElementById("inputCirculo");
    const radio = input.value;
    console.log(`El radio del circulo es ${radio} cm`);

    const area = areaCirculo(radio);
    console.log(`El área del circulo es ${area} cm^2`);
    alert(area);
}
console.groupEnd();


//  Triángulo Isóseles
console.group("Isoseles")
function calcularAlturaTriangulo(){
    const inputl1 = document.getElementById("inputIso1");
    const lado1 = inputl1.value;
    const inputl2 = document.getElementById("inputIso2");
    const lado2 = inputl2.value;
    const inputB = document.getElementById("inputBaseIso");
    const base = inputB.value;
    
    console.log(
        `los lados del triángulo miden ${lado1} cm, ${lado2} cm y la base mide ${base} cm`);
    if(lado1 == 0) {
        alert("Por favor digite el valor del primer lado");
        return;
    }else if(lado2 == 0){
        alert("Por favor digite el valor del segundo lado lado");
        return;
    }else if(base == 0){
        alert("Por favor digite el valor de la base");
        return;
    }else if (lado1 != lado2){
        alert("los lado de in triángulo isóseles deben ser iguales, verifique!");
    }
    
    altura = alturaTriangulo(lado1, base);
    console.log(`la altura del triángulo es ${altura} cm`);
    alert(altura);
}
console.groupEnd();