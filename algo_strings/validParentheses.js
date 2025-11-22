/*
Problem: Valid Parentheses
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 */

const isValid = (str) => {
    // Create an empty array to use as a stack for tracking opening brackets
    const check = []
    
    // Loop through each character in the string
    for (let i = 0; i < str.length; i++){
        // if current char is a opening bracket, then push onto the stack
        if(str[i] == '(' || str[i] == '[' || str[i] == '{')
            check.push(str[i])
        // otherwise if current char is ')' and top of stack is '(', pop the matching pair
        else if(str[i] == ')' && check[check.length-1] == '(')
            check.pop()
        // otherwise if current char is ']' and top of stack is '[', pop the matching pair
        else if(str[i] == ']' && check[check.length-1] == '[')
            check.pop()
        // otherwise if current char is '}' and top of stack is '{', pop the matching pair
        else if(str[i] == '}' && check[check.length-1] == '{')
            check.pop()
        // otherwise the brackets are invalid, return false
        else
            return false
    }
    // After processing all characters, check if stack has leftover opening brackets
    return check.length === 0;
}

console.log(isValid("({[({})]})"))
console.log(isValid("([)]"))
