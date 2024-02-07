
// function isleapYear (year){
//     if(year%4 ===0){
//         return true;
//     }


// else{
//     return false;
// }
// }
// const islpYear = isleapYear(2048);

// console.log(islpYear);

function isLeapYear2 (year){
    if(year%100!==0 && year%4===0)
    return true;
else{
    return false;
}
}

const leap = isLeapYear2(2044);
console.log(leap);