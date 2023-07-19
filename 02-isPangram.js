/*
    Write a function called isPangram which returns true if every 
    single lowercase letter of the English alphabet is used.
 */
// function isPangram(str){
//     // create an array that will store the alphabets
//     const alphabets = "abcdefghijklmnopqrstuvwxyz";
//     // return if true or false
//     let is_Pang = false;
//     let strLowerCase = str.toLowerCase();
//     let tempAlphabet = alphabets
//         .split("")
//         .filter(letter => {
//             if(strLowerCase.includes(letter)){
//                 return letter;
//             };
//         })
//     if (tempAlphabet.length === 26){
//         is_Pang = true;
//     }
//     return is_Pang;
// }

// console.log(isPangram("the quick Brown fox jumps over the lazy dog")) // true

function isPangram(str){
    // create an array that will store the alphabets
    const alphabets = "abcdefghijklmnopqrstuvwxyz".split("");
    let strLowerCase = str.toLowerCase();

    for(var i = 0; i < alphabets.length; i++){
        if(strLowerCase.indexOf(alphabets[i]) < 0)
            return false
    }
    return true;
}

console.log(isPangram("the quick brown fox jumps over the lazy dog")) // true
console.log(isPangram("The cat jumped over the fence")) // false