// we have an array with the name and surname
let arr = ["John", "Smith"]


// destructuring assignment
// sets firstName = arr[0]
// and surname = arr[1]
// let [firstName, surname] = arr;

// alert(firstName); // John
// alert(surname);  // Smith

let [firstName, surname, ] = arr;
console.log((firstName)); // John
console.log((surname));  // Smith


console.log(typeof arr)
console.log( [firstName, surname])

console.log(arr[0].split(''))
console.log(firstName.split(''))

