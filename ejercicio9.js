//Dados dos arrays devolver un array con las coincidencias de ambos
function arrays (){


let a = [1,2,3,4,5]
let b = [4,5,8,9,0,1]


let arrays = b.filter(item => {
    
    return a.includes(item)
    
    
})

return arrays



}
console.log(arrays())