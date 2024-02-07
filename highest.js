// const heights = [167, 190, 120, 165, 137];

// function getMax(numbers){
//     let max = numbers[0];
//     for(const num of numbers){
        
//         if(num>max){
//             max=num;
//         }
//     }
//     return max;
// }


// const max = getMax(heights);
// console.log(max);
const burgerPickers = ['rahim', 'robin', 'rafi', 'ron', 'rashed']

function getMax(array){
   let max = array[0]
    for(const item of array){
        // console.log(item);
        if(item.length>max.length){
            max=item;
        }
    }
    return max;
}


const max = getMax(burgerPickers);
console.log(max);