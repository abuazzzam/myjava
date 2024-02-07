const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed']

function smallestString (arry){
    let shortName = arry[0];
    for(item of arry) {
    if(item.length<shortName.length){
        shortName = item;
    }
    console.log(item);
}
    //  return shortName;

}

const shortName = smallestString (heights2);
console.log(shortName);