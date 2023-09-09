/*
This will always be 3 operations so the notation is
***** O(1) *****
*/
/*
const addUpTo = (n) =>{
    return n * (n + 1) / 2;
}
console.log(addUpTo(100000000));
*/

const addUpTo = (n) =>{
    const start = performance.now();
    let total = n * (n + 1) / 2;
    const end = performance.now();
    console.log(`Execution time ${end - start} ms`);
    return total;
}
console.log(addUpTo(1000));

/*
Number of operations is (eventually)
bounded by a multiple of n (say, 10n)
***** O(n) *****
*/

const addUpFirst = (n=>{
    let total = 0;
    const start = performance.now();
    for(var i = 0; i <= n; i++){
        total += i;
    }
    const end = performance.now();
    console.log(`Execution time ${end - start} ms`)
    return total;
})
console.log(addUpFirst(1000));


/*
O(n) operation inside of an O(n) operation is a
***** O(n^2) *****
*/

function printAllPairs(n){
    const start = performance.now();
    for(var i = 0; i < n; i++){
        for(var j = 0; j < n; j++){
            console.log(i, j);
        }
    }
    const end = performance.now();
    console.log(`Execution time ${end-start} ms`)
}
printAllPairs(500);