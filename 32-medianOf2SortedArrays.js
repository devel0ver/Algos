// O(m+n)



// const findMedianSortedArrays = (nums1, nums2) => {
//     let newArr = new Array(nums1.length + nums2.length)
//     let i = 0, j = 0, l = 0
//     while(i < nums1.length && j < nums2.length && l <= newArr.length/2){
//         if(nums1[i] < nums2[j]){
//             newArr[l] = nums1[i]
//             l++
//             i++
//         }
//         else{
//             newArr[l] = nums2[j]
//             l++
//             j++
//         }
//     }
//     while(i < nums1.length && l <= newArr.length/2){
//         newArr[l] = nums1[i]
//         i++
//         l++
//     }
//     while(j < nums2.length && l <= newArr.length/2){
//         newArr[l] = nums2[j]
//         j++
//         l++
//     }
//     if(newArr.length % 2 != 0){
//         middle = Math.floor(newArr.length/2)
//         return newArr[middle]
//     }
//     else{
//         middle = newArr.length/2
//         return (newArr[middle] + newArr[middle-1]) / 2
//     }
// };

/*
newArr = [1, 2]
i = 0, 1     1 < 2 True
j = 0, 1     1 < 1 False
l = 0, 1
nums1[1] = 3
nums2[1] = 2
3 < 2 : False
*/

// console.log(findMedianSortedArrays([1,3,5,6], [2,10]))
// console.log(findMedianSortedArrays([1,2], [3,4]))






// O(log(m+n))

const findMedianSortedArrays2 = (nums1, nums2) => {
    if(nums1.length < nums2.length) return findMedianSortedArrays2(nums2, nums1)
    
    const totalLength = nums1.length + nums2.length
    let low = 0, high = nums1.length, len1 = nums1.length, len2 = nums2.length;

    // Handling cases where one of the arrays is empty
    if (len1 === 0) {
        if (len2 === 0 ) {
            // Both arrays are empty (edge case, ideally should not happen in the context of finding median)
            return "0.00000";
        } else {
            // If nums2 has elements and nums1 is empty, the median is calculated directly from nums2
            return ((nums2[Math.floor((len2 - 1) / 2)] + nums2[Math.ceil((len2 - 1) / 2)]) / 2).toFixed(5);
        }
    }

    while(low <= high){
        var mid1 = Math.floor((low + high) / 2)
        var mid2 = Math.floor(((totalLength + 1) / 2) - mid1)

        // If mid1 is 0, it means there are no elements in the left side of nums1
        var left1 = (mid1 == 0) ? Number.NEGATIVE_INFINITY : nums1[mid1 - 1]
        // If mid1 is the length of nums1, it means there are no elements in the right side of nums1
        var right1 = (mid1 == nums1.length) ? Number.POSITIVE_INFINITY : nums1[mid1]

        var left2 = (mid2 == 0) ? Number.NEGATIVE_INFINITY : nums2[mid2 - 1]
        var right2 = (mid2 == nums2.length) ? Number.POSITIVE_INFINITY : nums2[mid2]

        if(left1 <= right2 && left2 <= right1){
            // Now get the max of left elements and min of right elements to get the median in case of even length combined array size
            // or get max of left for odd length combined array size.
            if((nums1.length + nums2.length) % 2 == 0){
                return ((Math.max(left1, left2) + Math.min(right1, right2)) / 2).toFixed(5)
            }else{
                return (Math.max(left1, left2)).toFixed(5)
            }
        }
        else if(left2 > right1){
            // move towards the left in nums1
            low = mid1 + 1
        }
        else{
            // move towards the right in nums1
            high = mid1 - 1
        }
    }
    return 0;
};

console.log(findMedianSortedArrays2([1,3,5,6], [8,10]))
console.log(findMedianSortedArrays2([1,2], [3,4]))
console.log(findMedianSortedArrays2([3], [-2,-1]))
console.log(findMedianSortedArrays2([3], []))