// const isPrimeNumbers = (arr) => {
//     arr = arr.filter(num => {
//         if(num === 1) return false;
//         for(var i = 2; i < num; i++){
//             if(num % i === 0) return false;
//         }
//         return num;
//     })
//     return arr;
// }
// console.log(isPrimeNumbers([1,2,5,9,4,7,3])) // 2, 5, 7, 3


const isPrime = (num) => {
    if(num <= 1) return false;
    if(num <= 3) return true;

    if(num % 2 === 0 || num % 3 === 0) return false;

    // Check divisibility for numbers of the form 6k ± 1 up to the square root of num
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }

    return true;
}

const isPrimeNumbers = (arr) => {
    return arr.filter(num => isPrime(num));
}
console.log(isPrimeNumbers([1,2,5,9,4,7,3,37,1000001]))

