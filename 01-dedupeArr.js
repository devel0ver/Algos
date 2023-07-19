const dedupe = (numbers) => {
    let obj = {};
    // Create an array that will return a new array
    let arr = [];
    for (let i = 0; i < numbers.length; i++)
        obj[numbers[i]] = true;
    
    for(const x in obj)
        arr.push(x);
    return arr;
}

console.log(dedupe([2,4,5,3,6,9,6]))