//1. Contain Duplicate
//try with map & filter
const containsDuplicate = (nums) => {
  let sortArr = nums.sort((a, b) => a - b);
  for (let i = 0; i < sortArr.length - 1; i++) {
    if (sortArr[i] == sortArr[i + 1]) {
      return true;
    }
  }
  return false;
};

console.log(containsDuplicate((nums = [1, 2, 3, 1])));
console.log(containsDuplicate((nums = [1, 2, 3, 4])));
console.log(containsDuplicate((nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2])));
console.log(containsDuplicate((nums = [2, 14, 18, 22, 22])));

console.log("***Anagram***");
//2. Anagram
//Given two strings s and t, return true if t is an anagram of s, and false otherwise.
//An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
//typically using all the original letters exactly once.

const isAnagram = (s, t) => {
  let string1 = s.split("").sort().join("");

  let string2 = t.split("").sort().join("");

  return string1 === string2;
};

console.log(isAnagram("anagram", "nagaram")); //true
console.log(isAnagram("rat", "car")); //false
