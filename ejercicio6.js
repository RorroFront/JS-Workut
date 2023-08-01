// *HACER CON DOS FUNCIONES 
// ****
// *  *
// *  *
// ****
// *ESTA FIGURA



// function lado(numero) {

//     let lado = "";

//     for (let i = 0; i < numero; i++) {

//         lado += "*";


//     }
//     return lado

// }



// function cuadrado(numero) {

//     let dibujo = lado(numero) + "\n";

//     let contenido = "";

//     for (let i = 2; i < numero; i++) {

//         contenido = "*"

//         for (let x = 2; x < numero; x++) {

//             contenido += " "

//         }

//         contenido += "*"

//         dibujo += contenido + "\n"


//     }


//     dibujo += lado(numero);

//     return dibujo


// }

// console.log(cuadrado(4))


function lado (numero){

let figura = "";

for(let i = 0; i < numero; i++){

    figura += "*"

}

return figura

}


function cuadrado (numero){

    let dibujo = lado(numero) + "\n"
    let contenido = "";

    for(let i = 2; i < numero; i++){

        contenido = "*"

        for(let x = 2; x < numero; x++){

            contenido += " ";
            
           

            
        }
       
        contenido += "*"
        
        dibujo += contenido +"\n"
    }


    dibujo += lado(numero)

    return dibujo
}

console.log(cuadrado(4))


