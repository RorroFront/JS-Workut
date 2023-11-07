//Dado un numero entero inviertelo y devuelve el numero entero
function invertNumber (numero){

let str = parseFloat(numero.toString().split('').reverse().join(''))*Math.sign(numero)
// let answ = parseFloat(str)
// console.log(str)
// console.log(typeof str)
return (str)




}

console.log(invertNumber(39))

