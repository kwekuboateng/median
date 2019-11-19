//Write a JavaScript program to get the median of an array of numbers.

const median = (arr) => {
 
  const mid = Math.floor(arr.length / 2);
  const sortArr = arr.sort((a, b) => a - b);
  return arr.length % 2 !== 0 ? sortArr[mid] : (sortArr[mid -1] + sortArr[mid]) / 2;
}

console.log(median([2,3,4,6,9]))
