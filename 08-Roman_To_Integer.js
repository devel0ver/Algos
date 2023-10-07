/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    var I = 1, V = 5, X = 10, L = 50, C = 100, D = 500, M = 1000;
    let obj = {};
    for(var i = 0; i < s.length; i++){
        obj[s[i]] = i;
    }
    console.log(obj);
};
console.log(romanToInt("III"));