// console.log(Math.random()*20);
// const integerNumberOfMath = Math.round(Math.random()*20);
// console.log(integerNumberOfMath);

function printDeatils (name, age, address) {
    if(typeof name !== 'string' && typeof age !== 'string' && address !== 'string'){
        return " Provide string character";
    }
    console.log (`My name is ${name}. My age is ${age}. My address is ${address}`)
}

printDeatils (1);