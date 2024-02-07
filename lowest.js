// Find the lowest number in the array below.
const lows = [167, 190, 120, 165, 137];

function findMeLowest(numbers) {
    let lowest = numbers[0];
  for (const num of numbers) {
    // console.log(num);
   
    if (num < lowest) {
      lowest = num;
    }
  }
  return lowest;
}

const lowest = findMeLowest(lows);
console.log(lowest);
