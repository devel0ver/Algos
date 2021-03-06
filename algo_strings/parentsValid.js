// Create a function that, given an input string, returns a boolean true/false whether parentheses in that string are valid.

// Example 1:"y(3(p)p(3)r)s" --> true
// Example 2: "n(0(p)3" --> false
// Example 3: "n)0(t(o)k" --> false

// hint: consider using an array or object to solve

// check entire string, return true/false
// every single opening parens has a closing
// never hit an closing parens before a opening parens
// ONLY care about the parens in the string

function parensValid(str) {
    // use array to store just my opening parens
    var checkParens = [];
    // loop through the entire string and check for opening and closing parens
    for (var i = 0 ; i < str.length ; i ++) {
        // when we find opening parens, we will hold on to them in our array
        if(str[i] === "(") {
            checkParens.push(str[i]);
        } else if (str[i] === ")" && checkParens[checkParens.length - 1] === "(") {
            // when we find closing parens, we compare against the opening ones we have
            checkParens.pop();
        } else if (str[i] === ")") {
            return false;
        }
    }

    // check remaining array, if anything in it return false because the parens dont have their pair
    // if (checkParens.length > 0) {
    //     return false;
    // } else {
    //     return true;
    // }

    return checkParens.length > 0 ? false : true;
}

function parensValid(str){
    var counter = 0;
    for(var i = 0 ; i < str.length ; i ++){   
        // count up if you find an opening parentheses
        if(str[i] == '('){
            counter ++;
        // count down if you find an closing parentheses
        } else if(str[i] == ')') {
            counter --;
        } 
        // if the counter dips below zero, that means you've found more closing than opening and should return false
        if (counter < 0) {
            return false;
        }
    }
    // if the counter is greater than 0, or ingeneral not equal to zero, it means that not all parentheses found matches and should return false
    if(counter > 0) {
        return false;
    }
    return true;
}

console.log(parensValid("y(3(p)p(3)r)s"));
console.log(parensValid("n(0(p)3"));
console.log(parensValid("n)0(t(o)k"));
console.log(parensValid("((()))"));
console.log(parensValid("()()()()()()("));