const validAnagram = (str1, str2) => {
    if(str1.length !== str2.length)
        return false
    let lookUp = {};
    for(var char of str1)
        lookUp[char] ? lookUp[char] += 1 : lookUp[char] = 1
    for(var char of str2){
        if(!lookUp[char]){
            return false;
        }else{
            lookUp[char] -= 1;
        }
    }
    return true
}
console.log(validAnagram('', '')); // True
console.log(validAnagram('aaz', 'zza')); // False
console.log(validAnagram('anagram', 'nagaram')); // True
console.log(validAnagram('ratas', 'ratar')); // False
console.log(validAnagram('awesome', 'awesom')); // False

/*
{
    r: 0,
    a: 0,
    t: 0,
    s: 1
}
*/