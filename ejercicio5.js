// *CON UNA FUNCION  CREA UN PARAMETRO QUE PERMITA SACAR PORCENTAJES

function percentages(percent, number){

    const operation = (number * (percent/100));
    let answer = `el ${percent}% de ${number} es: ${operation}`

    return answer

}
console.log(percentages(50,200))


