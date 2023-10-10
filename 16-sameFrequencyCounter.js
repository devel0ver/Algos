/** Write a function called sameFrequency. 
 * Given two positive integers, 
 * find out if the two numbers have the same frequency of digits.

Your solution MUST have the following complexities:
Time: O(N) 
*/

const sameFrequency = (num1, num2) => {
    let num1Str = num1.toString();
    let num2Str = num2.toString();
    if(num1Str.length !== num2Str.length) return false;
    
    let countNum1 = {}
    let countNum2 = {}

    for(var i = 0; i < num1Str.length; i++){
        countNum1[num1Str[i]] = ++countNum1[num1Str[i]] || 1; 
    }
    for(var i = 0; i < num2Str.length; i++){
        countNum2[num2Str[i]] = ++countNum2[num2Str[i]] || 1; 
    }
    for(var key in countNum1){
        if(countNum1[key] !== countNum2[key]){
            return false;
        }
    }
    return true;
}

console.log(sameFrequency(1182,1221)) // true
console.log(sameFrequency(34,14)) // false
console.log(sameFrequency(3589578, 5879385)) // true
console.log(sameFrequency(22,222)) // false