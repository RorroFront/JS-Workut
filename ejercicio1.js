// *TABLA DE MULTIPLICAR PARA CUALQUIER NÚMERO DEL 1-10


function tablaMultipicar(number) {

    let multiplo = `Este es la tabla del ${number} \n`;

    for (let i = 1; i <= 10; i++) {

        let multiply = (i * number);
        // console.log(multiply)

        multiplo += `${i} x ${number} = ${multiply} \n`;

    }

    return multiplo
}

console.log(tablaMultipicar(320))















































