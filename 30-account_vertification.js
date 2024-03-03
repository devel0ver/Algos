// m is the user_id (0 - 3)
const account = (m, database, requests) => {
    // Create a variable that will store the results
    let results = []
    // iterate through the database using a foor loop
    for(var i = 0; i < database.length; i++){
        // split each string in the database arrray to access the elements 
        const short_URL = database[i].split(' ')[1]
        const actual_URL = database[i].split(' ')[2]
        const user_id = database[i].split(' ')[0]

        if(requests.includes(short_URL)){
            for(var j = 0; j < m; j++){
                
            }
        }
    }
    console.log(results)
}

// console.log(account(3, [
//     '0 giigl www.google.com',
//     '2 fcbik www.facebook.com',
//     '0 hckrk www.hackerrank.com'
// ], ['giigl', 'fcbik']))

// Expected output: 
// www.google.com 1
// www.facebook.com 1

console.log(account(3, [
    '0 giigl www.google.com',
    '2 fcbik www.facebook.com',
    '2 ytube www.youtube.com',
    '1 bingg www.bing.com',
    '0 hckrk www.hackerrank.com'
], ['ytube', 'fcbik', 'bingg', 'giigl']))
// Expected output: 
// www.google.com 1
// www.youtube.com 1
// www.facebook.com 2
// www.bing.com 1