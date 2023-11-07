// *INVIERTE UN STRING SIN UTILIZAR MÉTODOS DE JS SOLO ESTRUCTURAS DE CONTROL

// function str (phrase){

//     let arr = "";

    

//     for(let word of phrase){

//         arr = word + arr
        
//     }

   

//     return arr
// }

// console.log(str("holamundo"))



// *INVIERTE UN STRING SUN UTILIZAR MÉTODOS DE JS

function str (word) {

let invertedStr = " "

for(let letter of word){

    invertedStr = letter + invertedStr

}

return invertedStr


}

console.log(str("holamundo"))



