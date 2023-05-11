/**Codility Practise */

console.log("Hello Word");
// Write a function:
// function solution(A);
// that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.
// For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.
// Given A = [1, 2, 3], the function should return 4.
// Given A = [−1, −3], the function should return 1.
// Write an efficient algorithm for the following assumptions:
// N is an integer within the range [1..100,000];
// each element of array A is an integer within the range [−1,000,000..1,000,000].

const solution = (A) => {
  //creat a unique array
  let unique = [...new Set(A)].sort((a, b) => a - b);

  for (i = 0; i < unique.length; i++) {
    if (unique[i] !== i + 1) {
      return i + 1;
    }
  }
  return unique.length + 1;
};

console.log(solution([1, 3, 6, 4, 1, 2]));
console.log(solution([1, 2, 3]));
console.log(solution([-1, -3]));

/***Pi Challenge Codility */

// We are given two strings P and Q, each consisting of N lowercase English letters.
//For each position in the strings, we have to choose one letter from either P or Q,
//in order to construct a new string S, such that the number of distinct letters in S is minimal.
// Our task is to find the number of distinct letters in the resulting string S.

// For example, if P = "ca" and Q = "ab", S can be equal to: "ca", "cb", "aa" or "ab".
//String "aa" has only one distinct letter ('a'), so the answer is 1 (which is minimal among those strings).

// Write a function:

// function solution(P, Q);

// that, given two strings P and Q, both of length N, returns the minimum number of
//distinct letters of a string S, that can be constructed from P and Q as described above.

// Examples:

// 1. Given P = "abc", Q = "bcd", your function should return
//2. All possible strings S that can be constructed are: "abc", "abd", "acc", "acd", "bbc", "bbd", "bcc", "bcd".
// The minimum number of distinct letters is 2, which be obtained by constructing
//the following strings: "acc", "bbc", "bbd", "bcc".

// 2. Given P = "axxz", Q = "yzwy", your function should return
//2. String S must consist of at least two distinct letters in this case.
//We can construct S = "yxxy", where the number of distinct letters is equal to 2, and this is the only optimal solution.

// 3. Given P = "bacad", Q = "abada", your function should return 1.
//We can choose the letter 'a' in each position, so S can be equal to "aaaaa".

// 4. Given P = "amz", Q = "amz", your function should return 3.
//The input strings are identical, so the only possible S that can be constructed is "amz",
//and its number of distinct letters is 3.
// console.log("Pi");

function hellP(P, Q) {
  // Implement your solution here
  let newStr = P.concat(Q);

  //split the string and create a array
  let strArr = newStr.split("");

  let uniqueStr = [];

  for (let i = 0; i <= strArr.length; i++) {
    //console.log(i);
    if (strArr[i] !== strArr[i + 1]) {
      uniqueStr.push(strArr[i]);
    }
  }
  return uniqueStr.length;
}

console.log(hellP("ca", "ab"));

// Return true if all values of is before b, else false
// if only a or b return false

console.log("Code Assesment");

const alphaIndex = (S) => {
  let strArr = S.split("");

  if (strArr.indexOf("a") === -1 || strArr.indexOf("b") === -1) {
    return true;
  } else if (strArr.indexOf("a") < strArr.indexOf("b")) {
    return true;
  } else {
    return false;
  }
};

console.log(alphaIndex("aabbb")); // true
console.log(alphaIndex("abba")); //false;
console.log(alphaIndex("aaa")); //false
console.log(alphaIndex("b"));
console.log(alphaIndex("a"));
