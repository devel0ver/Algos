/*
    Implement a function called countUniqueValues, which accepts a sorted array,
    and counts the unique values in the array. There can be negative numbers in 
    the array, but it will always be sorted.
*/

const countUniqueValues = (arr) => {
    let start = 0;
    if(arr.length === 0) return 0;
    for(var i = 1; i < arr.length; i++){
        if(arr[start] !== arr[i]){
            start++;
            arr[start] = arr[i];
        }
    }
    return start + 1;
}
console.log(countUniqueValues([]))
console.log(countUniqueValues([1,1,1,1,1,2])) // 2
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,13])) // 7
console.log(countUniqueValues([-2,-1,-1,0,1])) // 4