function oddAverage(numbers) {
    const evens = [];
    for (const number of numbers) {
      if (number % 2 === 0) {
        evens.push(number);
      }
    }
      console.log(evens);
    let sum = 0;
    for (const number of evens) {
      sum = sum + number;
    }
    const count = evens.length;
    console.log(sum, count);
    const avg = sum / count;
    return avg;
  }
  const numbers = [13, 15, 12, 16, 18, 19, 21, 20, 199, 101, 55];
  
  const avg = oddAverage(numbers);
  console.log("average of Evens", avg);