function addUpTo(n) {
    var total = 0;
    for(let i = 1; i <= n; i++){
        total += i;
    }
    return total;
}
// console.log(addUpTo(5))
let t1 = performance.now()
addUpTo(1000000000)
let t2 = performance.now()
console.log(`Time elapsed ${(t2 - t1) / 1000} seconds`)

// function addUpTo(n) {
//     return n * (n + 1) / 2;
// }
// // console.log(addUpTo(5));

// let t1 = performance.now()
// addUpTo(1000000000);
// let t2 = performance.now();
// console.log(`Time elapsed: ${(t2 - t1) / 1000} seconds`)