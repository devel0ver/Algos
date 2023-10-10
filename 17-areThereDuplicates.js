// ---------------------------------------------------
// areThereDuplicates One Liner Solution
// ---------------------------------------------------
// const areThereDuplicates = (...args) => {
//     let count = {};
//     // for(var i = 0; i < args.length; i++){
//     //     count[args[i]] = ++count[args[i]] || 1;
//     // }
//     for(let val in args){
//         count[args[val]] = ++count[args[val]] || 1;
//         console.log(count);
//     }
//     for(var keys in count){
//         if(count[keys] > 1){
//             return true;
//         }
//     }
//     return false;
// }

// ---------------------------------------------------
// areThereDuplicates Solution (Multiple Pointers)
// ---------------------------------------------------
// const areThereDuplicates = (...args) => {
//     args.sort((a,b) => {
//         if(a < b) return -1;
//         if(a > b) return 1;
//         return 0;
//     })

//     let start = 0;
//     let next = 1;
//     while(next < args.length){
//         if(args[start] === args[next]){
//             return true;
//         }
//         start++;
//         next++;
//     }
//     return false;
// }

// ---------------------------------------------------
// areThereDuplicates One Liner Solution
// ---------------------------------------------------
const areThereDuplicates = (...args) => {
    let set = new Set();
    set.add(args);
    // console.log(new Set(args).size);
    console.log(set.size);
    // return new Set(args).size !== args.length;
}
console.log(areThereDuplicates(1, 2, 3)) // false
console.log(areThereDuplicates(1, 2, 2)) // true 
console.log(areThereDuplicates('a', 'b', 'c', 'a')) // true 