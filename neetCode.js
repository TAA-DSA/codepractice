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

console.log("***Two Sum***");
//3.
//Given an array of integers nums and an integer target, return indices of the two numbers such that
//they add up to target.
//You may assume that each input would have exactly one solution, and you may not use the same element twice.
//You can return the answer in any order.

const twoSums = (nums, target) => {
  const numMap = new Map();
  let indexTarget = [];

  nums.forEach((num, index) => {
    //Difference between the number
    const complement = target - num;

    if (numMap.has(complement)) {
      //Found a pair at adds up to the target
      indexTarget = [numMap.get(complement), index];
    }
    //add the current number to the map
    numMap.set(num, index);
  });
  //return the target index
  return indexTarget;
};

console.log(twoSums((nums = [2, 7, 11, 15]), (target = 9)));
console.log(twoSums((nums = [3, 2, 3]), (target = 6)));
console.log(twoSums((nums = [3, 2, 4]), (target = 6)));
console.log(twoSums((nums = [3, 3]), (target = 6)));
