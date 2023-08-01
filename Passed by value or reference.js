
//PRIMITIVE VALUES ARE PASSED BY VALUE

let foo = 5

function addTwo_v2(foo) {
    foo += 2;



    return `Este es el valor modificado de foo; ${foo}`

}


console.log(addTwo_v2(foo))

console.log('Este es el valor real de foo:', foo)



let obj = {
    car: 'red',
    type: 'sedan',
    company: 'VW',
}

console.log('Este es el objeto original', obj)


//OBJECT AND ARRAYS ARE NOT PRIMITIVES SO THEIR VALUE IS PASSED BY REFERENCE


function reference() {

    obj = {
        car: 'red',
        type: 'sedan',
        company: 'VW',
        name: 'adrian',
    }

    console.log('Este es el valor pasado por referencia que modifica al original', obj)


}

reference()

console.log('Este es el valor actual del objeto modificado', obj)