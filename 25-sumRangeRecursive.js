// const sumRange = (num) =>{
//     if(num === 1) return 1;
//     return num + sumRange(num-1);
// }
// console.log(sumRange(4));
const sumRange = (arr) =>{
    return arr.map((item) => item * 2)
}
console.log(sumRange([2,4,5,3]));
/*
    return num + sumRange(num-1)

    if num = 3, this will happen => 

    return 3 + sumRange(2)
        return 2 + sumRange(1)
                        1
                2 + 1 = 3
                sumRange(2) = 3
                    return 3 + 3
                        6
*/

// const loop_array = (arr) => {
//     sum = 0;
//     arr.filter(i => {
//         sum += i;
//     })
//     return sum;
// }
// console.log(loop_array([1, 5, 6, 8, 9]));