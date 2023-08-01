
// *MEDIANTE UNA FUNCION CON DOS PARAMETROS DETERMINAR SI UNA FRASE SE REPITE EN UNA ORACIÓN Y CUANTAS VECES LO HACE

// function matches(phrase, search) {

//     let texto_limpio = phrase.toLowerCase().replace(/[!¡.,-]/gi, '');

//     let resultado = 0

//     if (texto_limpio.includes(search)) {

//         let palabras = texto_limpio.split(" ");
//         let obj = {};
      

//         for (let palabra of palabras) {

//             if (obj[palabra]) {
//                 obj[palabra]++;
//             } else {
//                 obj[palabra] = 1;
//             }
//         }

//         console.log(obj)
//         resultado = obj[search];
//     } else {

//         resultado = 0;
//     }

//     return resultado;
//     // console.log(texto_limpio);
// }

// console.log("Numero de coincidencias", matches("hola, soy Adrian, robles, soy de rancho soy mexicano", "soy"))








// *MEDIANTE UNA FUNCION CON DOS PARAMETROS DETERMINAR SI UNA FRASE SE REPITE EN UNA ORACIÓN Y CUANTAS VECES LO HACE

function contador(phrase,keyphrase){
    
    let clean_phrase = phrase.toLowerCase().replace(/[!¡,.-]/gi, '');
    let counter = 0;

    if(clean_phrase.includes(keyphrase)){

        let cleaned_phrase = clean_phrase.split(' ');
        
        let obj = {};

        

        for(let item of cleaned_phrase){

            if(obj[item]){
                obj[item] ++ ;
            }else{
                obj[item] = 1;
            }
            
            
        }
        
        
        // console.log(obj)
        counter = obj[keyphrase]
        

    }else{
        counter = 0
    }

    let answer = `En la frase "${phrase}" \n el número de coincidencias para la palabra "${keyphrase}" es de: `
    return answer += " " +counter

    
}
console.log(contador("HOLA SI SENOR SI SOY DE RANCHO SI ME LLAMO", "si"))






































