// const t1 = performance.now();
// const same = (arr1, arr2) => {
//     // If arr1 length > arr2 length return false
//     if(arr1.length !== arr2.length)
//         return false;
//     for(var i = 0; i < arr1.length; i++){
//         if(!arr2.includes((arr1[i] ** 2)))
//             return false;
//     }
//     return true
// }
// const t2 = performance.now();
// console.log(`Performance time for "same" function is ${(t2 - t1) / 1000} seconds.`)
// console.log(same([3, 6, 9, 12], [9, 81, 144, 36]));

// This one below is more efficient and faster.
const t3 = performance.now();
const equiv = (arr1, arr2) => {
    if(arr1.length !== arr2.length){
        return false;
    }
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    for(var val of arr1)
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    for(var val of arr2)
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    console.log(frequencyCounter1);
    console.log(frequencyCounter2);
    for(let key in frequencyCounter1){
        if(!(key ** 2 in frequencyCounter2))
            return false;
        if(!(frequencyCounter2[key ** 2] == frequencyCounter1[key]))
            return false;
    }
    return true
}
const t4 = performance.now();
console.log(`Performance time for "equiv" function is ${(t4 - t3) / 1000} seconds.`)
console.log(equiv([3, 6, 9, 12, 3], [9, 81, 144, 36, 9]));
