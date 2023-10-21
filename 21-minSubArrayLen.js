const minSubArrayLen = (arr, sum) => {
    let total = 0;
    let start = 0;
    let end = 0;
    let minLen = Infinity;
    for(var i = 0; i < arr.length; i++)
    {
        if(arr[i] < 0)
            return 0;
    }
    if(sum < 0)
        return 0;

    while(start < arr.length){ // start = 0
        // if current window doesn't add up to the given sum then 
        // move the window to right
        if(total < sum && end < arr.length){ // total = 9 , sum = 7, end = 6, arr.length = 6
            total += arr[end];
            end++;
        }
        // if current window adds up to at least the sum given then
        // we can shrink the window
        else if(total >= sum){    // total = 3  , sum = 7
            minLen = Math.min(minLen, end-start);  // minLen = 6 - 4 = 2
            total -= arr[start];                 //  total(7) -= arr[4](4) = 3
            start++;                            // start = 5
        }
        // current total less than required total but we reach the end, need this or else we'll be in an infinite loop 
        else{
            break;
        }
    }
    return minLen === Infinity ? 0 : minLen;
}

console.log(minSubArrayLen([2,3,1,2,4,3], 7)) // 2 -> because [4,3] is the smallest subarray
console.log(minSubArrayLen([2,1,6,5,4], 9)) // 2 -> because [5,4] is the smallest subarray
console.log(minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52)) // 1 -> because [62] is greater than 52
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],39)) // 3
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],55)) // 5
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)) // 2
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],95)) // 0