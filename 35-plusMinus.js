/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    // Write your code here
    // Create a variable that holds the amount of positive, negative, zero and n(length) numbers
    const n = arr.length;
    let pos = 0, neg = 0, zero = 0;
    // Loop through the array to access the numbers
    for(var i = 0; i < n; i++){
        // Create an if statement to make sure there are no other data types in the array besides numbers
        // if (typeof(arr[i]) !== 'number'){
        //     return 0;
        // }
        if (arr[i] < 0)
            neg++
        else if (arr[i] > 0)
            pos++
        else
            zero++
    }
    // return `${(pos/n).toFixed(6)}\n${(neg/n).toFixed(6)}\n${(zero/n).toFixed(6)}`
    console.log((pos/n).toFixed(6))
    console.log((neg/n).toFixed(6))
    console.log((zero/n).toFixed(6))
}

plusMinus([-4,3,-9,0,4,1])