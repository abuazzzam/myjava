
// const briyani = [1, 2, 3, 1, 8, 4, 2]

// function noDuplicate(array){
// const unique = [];
//     for(const item of array){
//         if(unique.includes(item) === false){
//         unique.push(item);
//     }
//     }
//     return unique;
// }

// const uniqueArray= noDuplicate(briyani);
// console.log(uniqueArray);


const dupcheck = [44, 15, 12 ,15, 42, 44, 56, 12]

function checkdup(array){
    const unique =[];
    for(const item of array){
        if(unique.includes(item) === false){
            unique.push(item);
        }
    }
    return unique;
}
const uniqueArray = checkdup(dupcheck);
console.log(uniqueArray);