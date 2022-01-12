// function reverseString(str) { 
//     var newArr = [];

//     // for(let i = 0 ; i < str.length ; i++){
//     //     newArr.unshift(str[i])
//     // }

//     for(let i = str.length - 1 ; i >= 0 ; i--){
//         newArr.push(str[i])
//     }

//     console.log(newArr);
//     return newArr.join("")
// }

// console.log(reverseString("creature"));
// console.log(reverseString("hello"))



// #1) Implement reverseString(str) that takes in a String, and then returns a string of the same length, but with the characters reversed.

// Example: "creature" ---> "erutaerc"

// ** Don't use the built-in reverse() method!

function reverseString(str) {
    // your code here
    var arr = [];
    for(let i=0; i<str.length ; i++){
        arr.unshift(str[i])
    }
    // console.log(arr);   // The output shows: ['e', 'r', 'u','t', 'a', 'e','r', 'c']
    return arr.join("");   // The output shows: erutaerc

    // for(let i = str.length - 1; i >= 0; i--){   // another way
    //     arr.push(str[i])
    // }
    // return arr.join("");
}

console.log(reverseString("creature")); // "erutaerc"
console.log(reverseString("hello")); // "erutaerc"


// Create a function that, given a string, returns the string's acronym (first letter's only, capitalized).

// Example: "there's no free lunch - gotta pay yer way" --> "TNFL-GPYW""

// ============================
// Instructor's Solutions
// ============================
// ===================================
// with Array
// ===================================
function acronym(str) {
    var arr = str.split(" ");
    var newStr = "";

    for (var i = 0; i < arr.length; i++) {
        newStr += arr[i][0].toUpperCase();
    }
    return newStr;
}

console.log(acronym("there's no free lunch - gotta pay yer way"));

// ===================================
// with new String only
// ===================================
function acronym(str) {
    var newStr = str[0].toUpperCase();

    for (var i = 0; i < str.length; i++) {
        if (str[i] == " ") {
            newStr += str[i + 1].toUpperCase();
        }
    }
    return newStr;
}

console.log(acronym("there's no free lunch - gotta pay yer way"));