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





function solution(queries) {
    let container = [];
    let results = [];

    for (var i = 0; i < queries.length; i++) {
        let action = queries[i][0];
        let accountName = queries[i][2];

        if (action == "CREATE_ACCOUNT") {
            if (!container.includes(acc => acc.name === accountName)) {
                results.push("true");
                container.push({ name: accountName, balance: 0 });
            } else {
                results.push("false");
            }
        } else if (action == "DEPOSIT") {
            let amount = Number(queries[i][3]);
            let account = container.find(acc => acc.name === accountName);

            if (account) {
                account.balance += amount;
                results.push(account.balance.toString());
            } else {
                results.push("");
            }
        }
    }

    console.log(container);
    return results;
}

let queries = [
    ["CREATE_ACCOUNT", "1", "account1"],
    ["CREATE_ACCOUNT", "2", "account1"],
    ["CREATE_ACCOUNT", "3", "account2"],
    ["DEPOSIT", "4", "non-exist", "2500"],
    ["DEPOSIT", "5", "account1", "2500"],
    ["DEPOSIT", "6", "account1", "500"],
    ["DEPOSIT", "7", "account2", "1000"],
];

console.log(solution(queries));