function solution(queries) {
    let container = []
    let results = []
    
    for (var i = 0; i < queries.length; i++) {
        let action = queries[i][0];
        let accountName = queries[i][2];
        let destinationAccount = queries[i][3];

        if (action == "CREATE_ACCOUNT") {
            if (!container.find(acc => acc.name === accountName)) {
                results.push("true");
                container.push({name: accountName, balance: 0});
            } else {
                results.push("false");
            }
        } else if(action == "DEPOSIT"){
            let amount = Number(queries[i][3])
            let account = container.find(acc => acc.name === accountName);

            if(account){
                account.balance += amount
                results.push(account.balance.toString())
            }else
                results.push("")
        }else if (action == "TRANSFER") {
            let amount = Number(queries[i][4]);
            let source = container.find(acc => acc.name === accountName);
            let destination = container.find(acc => acc.name === destinationAccount);

            if (source && destination && source.balance >= amount) {
                source.balance -= amount;
                destination.balance += amount;
                results.push("true");
            } else {
                results.push("false");
            }
        }
    }
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
    ["TRANSFER", "8", "account1", "account2", "500"],
];

console.log(solution(queries));