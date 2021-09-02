// Helpers - Utils
function esPar(number){
    return (number % 2 === 0)
}

function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
    })
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

// Calculadora de mediana
function medianaSalaries(lista){
    const half = parseInt(lista.length / 2);

    if (esPar(lista.length)){
        const personHalf1 = lista[half - 1];
        const personHalf2 = lista[half];

        const mediana = calcularMediaAritmetica([personHalf1, personHalf2]);
        return mediana;
    }else{
        const personHalf2 = lista[half];
        return personHalf2;
    }
}
// Mediana  general
const salariesCol = colombia.map(
    function(person){
        return person.salary;
    }
);

const salariesColSorted = salariesCol.sort(
    function(SalaryA, salaryB){
        return SalaryA - salaryB;
    }
)

const medianaGeneralCol = medianaSalaries(salariesColSorted);

// Mediana del top 10% 
const spliceStart = (salariesColSorted.length * 90) / 100;
const spliceCount =  salariesColSorted.length - spliceStart;
const salariesColTop10 = salariesColSorted.splice(spliceStart, spliceCount);

medianaTop10Col = medianaSalaries(salariesColTop10);

console.log(medianaGeneralCol, medianaTop10Col);
