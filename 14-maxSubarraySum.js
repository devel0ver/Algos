/**
 * Write a function called maxSubarraySum which acceepts an array
 * of integers and a number called n. The function should calculate
 * the maximum sum of n consecutive elements in the array.
 */

const maxSubarraySum = (arr, num) => {
    let maxSum = 0;
    let tempSum = 0;
    if(num > arr.length) return null;
    for(var i = 0; i < num; i++){
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for(var i = num; i < arr.length; i++){
        tempSum = tempSum - arr[i-num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}

console.log(maxSubarraySum([1,2,4,5,2,6,8,1,5],4)); // 21
console.log(maxSubarraySum([1,2,4,5,2,6,8,1,5],3)); // 16
console.log(maxSubarraySum([1,2,4,5,2,6,8,1,5],2)); // 14
console.log(maxSubarraySum([],2));  // null