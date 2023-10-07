const CharCount = (str) => {
    let obj = {};
    for(var char of str){
        if(isAlphaNumeric(char)){
            char = char.toLowerCase();
            obj[char] = ++obj[char] || 1;
        }
        // if(/[a-zA-z0-9]/.test(char)){
        //     char = char.toLowerCase();
        //     obj[char] = ++obj[char] || 1;
        // }
    }
    return obj;
}

const isAlphaNumeric = (char) => {
    let code = char.charCodeAt(0);
    if(!(code > 47 && code < 58)&&
    !(code > 64 && code < 90)&&
    !(code > 96 && code < 123)
    ){return false;}
    
    return true;
}

console.log(CharCount("Your PIN number is 1234!")); // {y:1, o:1, u:2, r:2, p:1, i:2, n:2, m:1, b:1, e:1, s:1, 1:1, 2:1, 3:1, 4:1}
// CharCount("anandd") // {a:2, n:2, d:2}
// CharCount("Hello hi") // {H:1, e:1, l:2, o:1, h:1, i:1}
