/**
 * Write a function called strExpand which
 * accepts string of where letters are all
 * grouped together (like aaee or bbccdd) and
 * returns a new string with each letter followed
 * by a count of a the number of times it appears.
 * For instance, given the input "aaee" you would return "a2e2".
 */

const strExpand = (str) => {
    // create an variable that will return the new string
    var newStr = "";
    // create object that will hold the each letter in the string and count how many times.
    let obj = {};

    for (let i = 0; i < str.length; i++){
        if (!obj[str[i]])
            obj[str[i]] = 1;
        else
            obj[str[i]]++;
    }
    // console.log(obj)
    for (const key in obj)
        newStr += key + obj[key];
    return newStr;
}

console.log(strExpand('aeebbccd'))   // 'a1e2b2c2d1'
console.log(strExpand('apple'))      // 'a1p2l1e1'
console.log(strExpand('oopppaaaalll'))  // 'o2p3a4l3'