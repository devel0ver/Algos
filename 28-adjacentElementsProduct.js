/* 
Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

Example

For inputArray = [3, 6, -2, -5, 7, 3], the output should be
solution(inputArray) = 21.

7 and 3 produce the largest product.
*/

const solution = (inputArray) => {
    let start = 0
    let next = 1
    let maxProd = inputArray[start] * inputArray[next]
    while(inputArray.length > next){
        const currentProd = inputArray[start] * inputArray[next]
        if(maxProd < currentProd){
            maxProd = currentProd
        }
        start++
        next++
    }
    return maxProd
}

console.log(solution([3, 6, -2, -5, 7, 3])) // 21
console.log(solution([-1, -2])) // 2
console.log(solution([1, 0, 1, 0, 1000])) // 0
console.log(solution([-23, 4, -3, 8, -12])) // -12
console.log(solution([5, 6, -4, 2, 3, 2, -23])) // 30