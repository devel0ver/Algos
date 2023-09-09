/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    if(x < 0){
        return false;
    }
    let reverse = 0;
    for(var i = x; i >= 1; i = Math.floor(i/10)) reverse = reverse*10 + i%10;
    console.log(reverse);
    return reverse === x;
};

console.log(isPalindrome(0110)); // true, 121 reads as 121 from left to right and from right to left.
// isPalindrome(125); // false