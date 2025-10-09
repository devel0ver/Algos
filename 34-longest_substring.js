/*
Problem: Longest Substring Without Repeating Characters
Approach: Sliding Window
Time: O(n), Space: O(n)
*/

const longestSubstring = (str) => {
    // Create a Set to store characters currently in your substring.
    let uniqueChars = new Set();
    // Create a variable to track the maximum length.
    // Create two pointers: left (start) and right (end).
    var left = 0, maxLen = 0;
    // Loop through the string with the right pointer.
    for (right = 0; right <= str.length; right++) {
        // If the current character is already in the Set:
        while(uniqueChars.has(str[right])){
            // Remove characters from the Set starting at left until it’s unique again.
            uniqueChars.delete(str[left]);
            // Move left forward each time.
            left++
        }
        // Add the current character to the Set.
        uniqueChars.add(str[right]);
        // Update your maximum length each time.
        maxLen = Math.max(maxLen, right - left + 1);
    };
    return maxLen;
}

console.log(longestSubstring("abcabcbb"))
