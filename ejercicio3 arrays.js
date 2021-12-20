const numbers = [];

let number = prompt("Digite un numero");
numbers.push(number);
    let number2 = prompt("Digite otro numero");
    numbers.push(number2);
        let number3 = prompt("Digite uno mas numero");
        numbers.push(number3);

console.log(numbers);

valor1 = numbers[0];
console.log(valor1);
        valor2 = numbers[1];
        console.log(valor2);
                valor3 = numbers[2];
                console.log(valor3);

        var suma = parseInt(valor1) + parseInt(valor2) + parseInt(valor3);

        var producto = valor1*valor2*valor3;

        console.log("la suma es: "+suma+" y el producto es: "+producto);