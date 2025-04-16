
// Declarar una función de forma tradicional

function  square1(num) {
    return num*5
}

// Declarar una función: arrow function

const square2 = (num) => {
    return num*5
}

const square3 = num => num * num

let resultado = square3(5)

console.log(resultado)