const newPassword = (a, b) => {
    let result = ''
    let count = 0
    let longest_string = a.length > b.length ? a.length : b.length
    for(var i = 0; i < longest_string; i++){
        if(i < a.length)
            result += a[i]
        if(i < b.length)
            result += b[i]
    }
    // while(count < a.length || count < b.length){
    //     result += a[count] + b[count]
    //     count++
    // }
    return result
}

console.log(newPassword('ade', 'fgh'))
console.log(newPassword('aden', 'fghsi'))