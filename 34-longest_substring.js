/*
Problem: Longest Substring Without Repeating Characters
Approach: Sliding Window
Time: O(n), Space: O(n)
*/

const longestSubstring = (str) => {
    let uniqueChars = new Set();
    var left = 0, maxLen = 0;
    for (right = 0; right <= str.length; right++) {
        while(uniqueChars.has(str[right])){
            uniqueChars.delete(str[left]);
            left++
        }
        uniqueChars.add(str[right]);
        maxLen = Math.max(maxLen, right - left + 1);
    };
    return maxLen;
}

console.log(longestSubstring("abcabcbb"))
