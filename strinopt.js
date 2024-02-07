
// sample-input: I am learning Programming to become a programmer

// sample-output: Programming

const sentences = "I am learning Programming to become a programmer";
function findMeLongString(sentences){
const newArray = sentences.split(' ');
let longName = newArray[0];
for(item of newArray){
    if(longName.length < item.length){
        longName = item;
    }
}
return longName;
}
const longName = findMeLongString (sentences);
console.log(longName);
// if(newArray.lenght)

// console.log(newArray);

