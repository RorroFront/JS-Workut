//EL SPREAD OPERATOR NOS PERMITE AÑADIR A UN OBJETO, UN NUEVO KEY Y VALUE
//Y A UN ARRAY, AÑADIR ELEMENTOS, CONCATENANDO UN ARRAY 
function spreadObj(){

    let obj = {
        casa:'amarilla',
        coche:'azul',
        camioneta:'verde'
    }
    
    let spread = {
        ...obj,
        ventana:'transparente'
    }
    
    return spread
}

console.log(spreadObj())

function spreadArr(){

    let arr = ['1','2','3','4','5']

    let spread = [
        ...arr,'6','7'
    ]
    return spread
}

console.log(spreadArr())
