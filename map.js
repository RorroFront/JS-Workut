
function mult(array) {

    
     array = [1, 2, 3, 4];
    
    let newarray = array.map(item => {
        // console.log(typeof item)
        
       let arr = item*2
       
       return arr
        
        
    })
  
    

    return newarray

}

console.log(mult())




