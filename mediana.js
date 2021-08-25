const lista1 = [100, 200, 500, 400000];

function calcularMediaAritmetica(lista){
    /* let sumaLista = 0;
    for (i= 0; i < lista.length; i++){
        sumaLista += lista[i];
    } */
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
    })
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

function esPar(numero){
    if (numero % 2 === 0){
        return true;
    } else{
        return false;
    }

}

function comparar(a, b){
    return a - b;

}


function calcularMediana(lista){
    const mitadLista = parseInt(lista.length / 2);
    // ordenar arreglo 
    lista.sort(comparar);
    let mediana;
    console.log(lista);

    if (esPar(lista.length)){
        const elemento1 = lista[mitadLista - 1];
        const elemento2 = lista[mitadLista]; 
        promedioElemento1y2 = calcularMediaAritmetica([elemento1, elemento2]);
        mediana = promedioElemento1y2; 
    }else{
        mediana = lista[mitadLista];
    }
    return mediana;
}
