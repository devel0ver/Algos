// Write a function that given a sorted array of page positive numbers, return a string representing a book index. Combine consecutive pages to create ranges.

// Example: [1,3,4,5,7,8,10,12] --> "1, 3-5, 7-8, 10, 12"

function bookIndex(arr){
    // your code here
    let str = " ";
    for(let i=0; i<arr.length; i++){    //This line will run through the array and increment by 1.
        if(i!==0){                      //The first run, i will equal to 0, so this if statement won't execute. 
                                        //however, the others will execute because they are nnot equal to 0.
            str = str + ",";            //Every time i doesn't equal to 0, it will add a comma after it.
        }
        if(arr[i]+1 == arr[i+1]){
            var start = arr[i];
            while(arr[i + 1] == arr[i]+1){
                i++;
            }
            var end = arr[i];
            str += start + "-" + end;
        }
        else{
            str += arr[i]; 
        }
    }
    return str;
}
console.log(bookIndex([1,3,4,5,7,8,10,12])) // "1, 3-5, 7-8, 10, 12"