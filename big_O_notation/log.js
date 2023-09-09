/**
 * ****O(n)****
 */
const logAtLeast5 = (n) => {
    for(var i = 1; i <= Math.max(5, n); i++)
        console.log(i);
}
// logAtLeast5(10);


/**
 * ****O(1)****
 */
const logAtMost5 = (n) => {
    for(var i = 1; i <= Math.min(5, n); i++)
        console.log(i);
}
// logAtMost5(3);

function logAtMost10(n) {
    for (var i = 1; i <= Math.min(n, 10); i++) {
        console.log(i);
    }
}
// logAtMost10(3);\

function onlyElementsAtEvenIndex(array) {
    var newArray = Array(Math.ceil(array.length / 2));
    
    for (var i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            newArray[i / 2] = array[i];
        }
    }
    return newArray;
}

// console.log(onlyElementsAtEvenIndex([2,3,5,7,4,9,3,2,1]));


/**
 * ****O(n^2)****
 */
function subtotals(array) {
    var subtotalArray = Array(array.length);
    for (var i = 0; i < array.length; i++) {
        var subtotal = 0;
        for (var j = 0; j <= i; j++) {
            subtotal += array[j];
        }
        subtotalArray[i] = subtotal;
    }
    return subtotalArray;
}

console.log(subtotals([2,9,4,7]));