//*Dados dos números, devolver cuantos números IMPARES hay entre ellos

function impar(numero1, numero2) {
    let counter = 0
    for (let i = numero1; i < numero2; i++) {
        if (i%2 !== 0) {
            counter++
        }
    }
    return "hay" + " " + counter + " " + "nùmero(s) impares entre" + " " + +numero1 + " " + "y" + " " + numero2

}

console.log(impar(1, 30));


// console.log(`devuelveme el resto de 5/2 =` +  " " + 5%2)
// console.log("te devuelve lo que resta para llegar al numero 5, que solo es 1, 5/2 = 2 veces 2, que es 4, para 5 solo 1")




// function numero(numero1, numero2) {
//     let counter = 0
//     while (numero1 < numero2) {
//         if (numero1 % 2 !== 0) counter++
//         numero1++;
//     }
//     return 'en el numero'+numero1+ 'hay' + counter+ 'numeros impares'
// }

// console.log(numero(1, 30));