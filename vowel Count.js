// Given a string s, count the number of vowels present in s and print it.
// We will define a countVowels function to solve this. 

//en el string crear un patron con reg exp que detecte las vocales y cada que detecte una vocal ++

function vowelCounter (string){


    let vowels = string.toLowerCase().replace(/[aeiou]/gi,'').split('')
    let answ = string.toLowerCase().split('')
   
    let counter = 0;

    for(let i = vowels.length; i < answ.length; i++){

        counter ++
       

    }
    
        
       


   return `El número de vocales en la palabra ${string}, es de : ${counter}`
    
    


}

console.log(vowelCounter("pinguino"))