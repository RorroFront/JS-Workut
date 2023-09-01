//EL SPREAD OPERATOR NOS PERMITE AÑADIR A UN OBJETO, UN NUEVO KEY Y VALUE

let obj = {
    casa:'amarilla',
    coche:'azul',
    camioneta:'verde'
}

let spread = {
    ...obj,
    ventana:'transparente'
}

console.log(spread)

