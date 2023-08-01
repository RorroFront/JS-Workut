let fecha = class myDate {
    constructor(year, month, day) {

        this.year = year,
            this.month = month,
            this.day = day

    }



}

// function hola()   {

//     const miCumpleaños = new fecha(2024,'Jan',17);

//    const nuevoCumpleaños = new fecha(2034,'Feb',17)

//    console.log(miCumpleaños)
//    console.log(nuevoCumpleaños)

// }
// console.log(hola())

let miCumpleaños = new fecha(2024, 'Jan', 17);

const nuevoCumpleaños = new fecha(2034, 'Feb', 17)

// console.log(typeof fecha)

function pruebaReferencia() {

    miCumpleaños = {

        year: 2024,
        month: 'Jan',
        day: 17,
        name: 'Adrian'

    }
   
    console.log(miCumpleaños, ` \n`)
}

pruebaReferencia()
console.log(`Objeto Original copia de la clase: \n`, miCumpleaños)


//declarar
let day;



//inicializar
day = 'hola'



function nan (x){

    

        if(Number.isNaN(x)){
            return 'es NaN'
        }else {
           return 'No es NaN'
        }
        
    


    
}

console.log(nan(NaN))
