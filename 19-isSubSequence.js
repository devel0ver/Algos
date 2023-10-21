/**
 * Multiple Pointers - isSubsequence 
 * Write a function called isSubsequence 
 * which takes in two strings and checks 
 * whether the characters in the first string 
 * form a subsequence of the characters in the 
 * second string. In other words, the function 
 * should check whether the characters in the 
 * first string appear somewhere in the second 
 * string, without their order changing.
 */

const isSubsequence = (str1, str2) => {
    if(!str1) return true;
    var starter1 = 0;
    var starter2 = 0;
    while(starter2 < str2.length){
        if(str2[starter2] == str1[starter1]) starter1++;
        if (starter1 == str1.length) return true;
        starter2++;
    }
    return false;
}
console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('sing', 'sting')); // true
console.log(isSubsequence('abc', 'acb')); // false (order matters)
console.log(isSubsequence('abc', 'abracadabra')); // true