// Given a string s, find the length of the longest substring without repeating characters.

const LengthOfLongestSubstring = (s) => {
  // Declare a variable that will hold the new returned string.
  let set = new Set(),
    left = 0,
    maxSize = 0;

  if (s.length == 0) return 0;
  if (s.length == 1) return 1;

  for (var i = 0; i < s.length; i++) {
    while (set.has(s[i])) {
      set.delete(s[left]);
      left++;
    }
    set.add(s[i]); 
    maxSize = Math.max(maxSize, i - left + 1);
}
console.log(maxSize);
};

LengthOfLongestSubstring("abcabc"); // The answer is "abc", with the length of 3.
LengthOfLongestSubstring("bbbb"); // The answer is "b", with the length of 1.
LengthOfLongestSubstring("pwwkew"); // The answer is "wke", with the length of 3.

/*
Our left one essentially displays the beginning of our window, 
in the case when non-unique characters appear in the window, 
we kind of tighten (slide) this window to the beginning of new 
unique characters (this can be tracked in the picture above). 
In doing so, we need to calculate our maximum length of unique characters, 
for this we use Math.max(maxSize, i - left + 1), which compares two values, 
the current length, with the new one. In the very beginning, where we only 
first encounter a duplicate ("b"), we remove the first left character first, 
shifting our left to the right, from "a" to the first "b" (left ++), now our 
window is "bb" , but "b" is still in our table, and we again remove the left 
one and shift it one to the right (left ++), now we can imagine that only the 
second "b" enters our window. And only now we exit the while loop, and run our 
Math.max(maxSize, i - left + 1) - ( Math.max(2, 2 - 2 + 1) ), where "1" is just 
an index correction , because we need exactly the length, and as we know, the 
length of an array is always 1 more than its last index. Thus, we sort of subtract 
the left from the current index, but if we do this without the correction "1", we 
will get 0 in this case, although we know that the length of the character "b" is 1. 
Also at the very beginning Math.max(0 , 0 - 0 + 1), if we remove the correction, we get 0, 
although we know that the length of "a" is 1, then also, the length of "ab" is 2, but 
without correction ( Math.max(1, 1 - 0 ) ) we get the length "1", which is definitely not true.

Thus, we move along the entire line, as soon as we see a duplicate, we shrink the window until only unique characters remain in it, and we shield the new length.
*/
