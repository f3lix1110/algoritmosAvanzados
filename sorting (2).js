/* sorting ejercicio #1*/ 
const nombres = ["Karen", "Ernesto", "Aldair","Azahid","Jose", "David" ];
console.log(nombres);
let nombresOrdenados = nombres.sort();
console.log(nombresOrdenados);

// Code Refactoring & Fixing Code ejercicio #1
function someFunction(list) { 
    if (list.length === 0) { 
    return 0;
    } else{
    return list.length;
}
} 
console.log(someFunction(nombres)); 
/* funcion para determinar el largo de una cadena*/
