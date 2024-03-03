// function solution(queries) {
//     // create a container to add the values
//     let container = []
//     // stores the results
//     let results = []
    
//     // loop through the query
//     for(var i = 0; i < queries.length; i++){
//         // create 2 variable, one to hold the name and to hold the values
//         let name = queries[i][0]
//         let val = queries[i][1]
        
//         if(name == "ADD"){
//             container.push(val)
//             results.push("")
//         }else if(name == "EXISTS"){
//             let exist = container.includes(val) ? "true" : "false"
//             results.push(exist);
//         }
//     }
//     return results
// }

// console.log(solution([
//     ["ADD", "1"],
//     ["ADD", "2"],
//     ["ADD", "5"],
//     ["ADD", "2"],
//     ["EXISTS", "2"],
//     ["EXISTS", "5"],
//     ["EXISTS", "1"],
//     ["EXISTS", "4"],
//     ["EXISTS", "3"],
//     ["EXISTS", "0"]
// ]))
// console.log(solution([
//     ["EXISTS","0"], 
//     ["EXISTS","10"], 
//     ["ADD","2"], 
//     ["ADD","3"], 
//     ["ADD","9"], 
//     ["EXISTS","3"], 
//     ["EXISTS","4"], 
//     ["EXISTS","9"], 
//     ["EXISTS","10"], 
//     ["ADD","10"], 
//     ["ADD","0"], 
//     ["EXISTS","0"], 
//     ["EXISTS","1"], 
//     ["EXISTS","2"], 
//     ["EXISTS","3"], 
//     ["EXISTS","4"], 
//     ["EXISTS","9"], 
//     ["EXISTS","10"], 
//     ["EXISTS","11"]
// ]))




//////

// function solution(queries) {
//     let container = []
//     let results = []
    
//     for(var i = 0; i < queries.length; i++){
//         let name = queries[i][0]
//         let val = queries[i][1]
        
        
//         if(name == "ADD"){
//             container.push(val)
//             results.push("")
//         }else if(name == "EXISTS"){
//             let exist = container.includes(val) ? "true" : "false"
//             results.push(exist);
//         }else if(name == "REMOVE"){
//             let index = container.indexOf(val)
//             results.push(index !== -1 ? "true" : "false")
//             if(index !== -1)
//                 container.splice(index, 1)
//         }
//     }
//     return results
// }

// console.log(solution([
//     ["ADD", "1"],
//     ["ADD", "2"],
//     ["ADD", "2"],
//     ["ADD", "3"],
//     ["EXISTS", "1"],
//     ["EXISTS", "2"],
//     ["EXISTS", "3"],
//     ["REMOVE", "2"],
//     ["REMOVE", "1"],
//     ["EXISTS", "2"],
//     ["EXISTS", "1"]
// ]))
// console.log(solution([
//     ["ADD","2"], 
//     ["ADD","3"], 
//     ["ADD","9"], 
//     ["REMOVE","10"], 
//     ["REMOVE","5"], 
//     ["REMOVE","5"], 
//     ["REMOVE","9"], 
//     ["REMOVE","2"], 
//     ["REMOVE","2"], 
//     ["REMOVE","9"], 
//     ["EXISTS","10"], 
//     ["EXISTS","2"], 
//     ["EXISTS","3"], 
//     ["EXISTS","9"], 
//     ["ADD","10"], 
//     ["EXISTS","10"]
// ]))

////
function solution(queries) {
    let container = []
    let results = []

    for(var i = 0; i < queries.length; i++){
        let name = queries[i][0]
        let val = Number(queries[i][1]) 


        if(name == "ADD"){
            container.push(val)
            results.push("")
        }else if(name == "EXISTS"){
            let exist = container.includes(val) ? "true" : "false"
            results.push(exist);
        }else if(name == "REMOVE"){
            let index = container.indexOf(val)
            results.push(index !== -1 ? "true" : "false")
            if(index !== -1)
                container.splice(index, 1)
        }else if(name == "GET_NEXT"){
            let sorted = container.filter(num => num > val).map(Number).sort((a,b) => a - b)
            let nextVal = sorted.length > 0 ? sorted[0].toString() : ""
            results.push(nextVal)
        }
    }
    return results
}
                        
console.log(solution([
    ["ADD", "1"],
    ["ADD", "2"],
    ["ADD", "2"],
    ["ADD", "4"],
    ["GET_NEXT", "1"],
    ["GET_NEXT", "2"],
    ["GET_NEXT", "3"],
    ["GET_NEXT", "4"],
    ["REMOVE", "2"],
    ["GET_NEXT", "1"],
    ["GET_NEXT", "2"],
    ["GET_NEXT", "3"],
    ["GET_NEXT", "4"]
]))
console.log(solution([
    ["ADD","0"], 
    ["ADD","1"], 
    ["ADD","1"], 
    ["ADD","11"], 
    ["ADD","22"], 
    ["ADD","3"], 
    ["ADD","5"], 
    ["GET_NEXT","0"], 
    ["GET_NEXT","1"], 
    ["REMOVE","1"], 
    ["GET_NEXT","1"], 
    ["ADD","0"], 
    ["ADD","1"], 
    ["ADD","2"], 
    ["ADD","1"], 
    ["GET_NEXT","1"], 
    ["GET_NEXT","2"], 
    ["GET_NEXT","3"], 
    ["GET_NEXT","5"]
]))