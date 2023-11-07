//*Give a function that returns a string with capital letters of an array of names disordered

// function arrayArrange(names){
// //Utilizamos el metodo map para modificar el array
// let namesAdjust = names.map((name => {
// //Hacemos un split y agregamos un espacio, para que nos cree un array con cada nombre como elemento de un array 
// const nameParts = name.split(" ");
// const capitalName= nameParts[0][0].toUpperCase() + nameParts[0].slice(1).toLowerCase()
// const CapitalLastName = nameParts[1][0].toUpperCase() + nameParts[1].slice(1).toLowerCase()
// // console.log(nameParts[0][0])
// // console.log(nameParts[0].slice(1))
// console.log(nameParts)
// return capitalName + " " + CapitalLastName




// }))

// return namesAdjust.join(", ");

// }
// const inputNames = ["pedro lOpez", "omAr cHaparro"];
// const formattedResult = arrayArrange(inputNames);
// console.log(formattedResult);






// function formatNames(names) {

//     const formattedNames = names.map(name => {
//         //(\b\w) first part (\w*) second part g = globally
//         const capitalizedName = name.replace(/(\b\w)(\w*)/g, (matchingWithWholeRegExp, firstPartRegExp, secondPartRegExp) => {
//             return firstPartRegExp.toUpperCase() + secondPartRegExp.toLowerCase();
//         });
//         return capitalizedName;
//     });

//     return formattedNames.join(', ');
// }

// const inputNames = ["pedro lOpez", "omAr cHaparro"];
// const formattedResult = formatNames(inputNames);
// console.log(formattedResult);



function arrangedNames(names) {

    const correctName = names.map(name => {

        const stringName = name.split(" ");

        const capitalName = stringName[0][0].toUpperCase() + stringName[0].slice(1).toLowerCase();
        const capitalLastName = stringName[1][0].toUpperCase() + stringName[1].slice(1).toLowerCase();

        return capitalName + " " + capitalLastName

    })

    return correctName.join(", ")


}

const inputNames = ["pedro lOpez", "omAr cHaparro"];
const formattedResult = arrangedNames(inputNames);
console.log(formattedResult);
