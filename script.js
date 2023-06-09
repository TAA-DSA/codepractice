const { isArgumentsObject } = require("util/types");

//1.Problem
console.log("Falsy Bouncer !!");

//Remove all falsy values from an array. Return a new array; do not mutate the original array.
//Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
//

const bouncer = (arr) => {
  //console.log(arr);
  let newArr = [];
  //console.log(newArr);
  arr.forEach((element) => {
    if (element) {
      newArr.push(element);
    }
  });

  console.log(newArr);
  return newArr;
};

bouncer([7, "ate", "", false, 9]);
bouncer(["a", "b", "c"]);
bouncer([false, null, 0, NaN, undefined, ""]);
bouncer([null, NaN, 1, 2, undefined]);

//2.Problem
console.log("Where do I belong");

//Return the lowest index at which a value (second argument) should be inserted into an array (first argument)
// once it has been sorted. The returned value should be a number.

//For example, getIndexToIns([1,2,3,4], 1.5)
//should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

//Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20]
//and 19 is less than 20 (index 2) and greater than 5 (index 1).

const getIndexToIns = (arr, num) => {
  //console.log(arr, num);

  arr.push(num);
  //for correct result use (a - b ) || (b-a)
  arr.sort((a, b) => a - b);
  return arr.indexOf(num);
};

console.log(getIndexToIns([40, 60], 50)); //return 1
console.log(getIndexToIns([10, 20, 30, 40, 50], 35)); //return 3
console.log(getIndexToIns([10, 20, 30, 40, 50], 30)); //
console.log(getIndexToIns([5, 3, 20, 3], 5));
console.log(getIndexToIns([3, 10, 5], 3)); //return 0
console.log(getIndexToIns([2, 5, 10], 15)); //return 3

//3. Problem
console.log("Mutation");

//Return true if the string in the first element of the array contains all
// of the letters of the string in the second element of the array.
//For example, ["hello", "Hello"], should return true because all of the letters
//in the second string are present in the first, ignoring case.

//The arguments ["hello", "hey"] should return false because the string hello does not contain a y.

//Lastly, ["Alien", "line"], should return true because all of the letters in line are present in Alien.

const mutation = (arr) => {
  //change the case(lower or upper) of the string so it is easy to compare.
  const secondElement = arr[1].toLowerCase();
  const firstElement = arr[0].toLowerCase();
  for (let i = 0; i < secondElement.length; i++) {
    if (firstElement.indexOf(secondElement[i]) < 0) return false;
  }
  return true;
};

console.log(mutation(["hello", "hey"])); //return false
console.log(mutation(["Alien", "Line"])); //return true
console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])); //return true

console.log("Chunky Monkey");

const chunkArrayInGroups = (arr, size) => {
  const newArr = [];

  for (let i = 0; i <= arr.length - 1; i += size) {
    newArr.push(arr.slice(i, i + size));
  }
  return newArr;
};

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2));

/***Intermediate Algorithm */

// 1

console.log("Sum All the number in range");

const sumAll = (arr) => {
  let arraySort = arr.sort((a, b) => a - b);
  let sumArr = [];
  for (let i = arraySort[0]; i <= arraySort[1]; i++) {
    sumArr.push(i);
  }

  let arrSum = sumArr.reduce((acc, curr) => acc + curr);
  return arrSum;
};

console.log(sumAll([1, 4]));
console.log(sumAll([10, 5]));

//2.

console.log("Diff Two Arrays");

//return the symmetric difference of two arrays
//Create a loop to compare the arrays
//push the number in newArr that is not present in the both the arrays
//forEach does not return a value, it executes provided function once for each element in the array
//Consider concat, filter and includes

const diffArray = (arr1, arr2) => {
  let mergeArray = arr1.concat(arr2);
  let newArr = mergeArray.filter(
    (number) => !arr1.includes(number) || !arr2.includes(number)
  );

  return newArr;
};

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
console.log(
  diffArray(
    ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],
    ["diorite", "andesite", "grass", "dirt", "dead shrub"]
  )
);

console.log(
  diffArray(
    ["andesite", "grass", "dirt", "pink wool", "dead shrub"],
    ["diorite", "andesite", "grass", "dirt", "dead shrub"]
  )
);

//3.

/***Notes */
//Construct arguments using rest parameter
//Remember include works arrays not individual numbers

console.log("Seek And Destroy");

const destroyer = (arr, ...theArgs) => {
  return arr.filter((numbers) => !theArgs.includes(numbers));
};

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3));
console.log(destroyer([2, 3, 2, 3], 2, 3));
console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5));

//4.

console.log("Wherefore art thou");

//Make a function that looks through an array of objects (first argument) and
//returns an array of all objects that have matching name and value pairs (second argument).
//Each name and value pair of the source object has to be present in the object from the collection
//if it is to be included in the returned array.
//Key Value pair  //Do exercises

const whatIsInAName = (collection, source) => {
  const arr = [];
  // Only change code below this line
  for (let i = 0; i < collection.length; i++) {
    let found = true;
    for (const sourceProp in source) {
      if (collection[i][sourceProp] !== source[sourceProp]) {
        found = false;
        break;
      }
    }
    if (found) arr.push(collection[i]);
  }
  // Only change code above this line
  return arr;
};

console.log(
  whatIsInAName(
    [
      { first: "Romeo", last: "Montague" },
      { first: "Mercutio", last: null },
      { first: "Tybalt", last: "Capulet" },
    ],
    { last: "Capulet" }
  )
);

console.log("Spinal Case");

const spinalCase = (str) => {
  // let regex = /[!"#$%&'()*+,./:;<=>?@[\]^_`{|}~]/g;

  // let removePunctuation = str.replace(regex, " ");
  // console.log(removePunctuation);
  //let strSplit = removePunctuation.split(" ").join("-").toLowerCase();
  //console.log(strSplit);
  return str
    .split(/\s|_|(?=[A-Z])/)
    .join("-")
    .toLowerCase();
};

console.log(spinalCase("This Is Spinal Tap"));
console.log(spinalCase("The_Andy_Griffith_Show"));
console.log(spinalCase("AllThe-small Things"));

//5.
console.log("**********");
console.log("Pig Latin");

const translatePigLatin = (str) => {
  let vowel = ["a", "e", "i", "o", "u"];
  let arr = str.split("");

  if (vowel.includes(arr[0])) {
    return arr.join("") + "way";
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (vowel.includes(arr[i])) {
        let strSlice = arr.slice(i).join("");
        //console.log(strSlice);
        let consonantCluster = arr.slice(0, i).join("");

        return strSlice + consonantCluster + "ay";
      }
    }
    return arr.join("") + "ay";
  }
};

console.log(translatePigLatin("california"));
console.log(translatePigLatin("consonant"));
console.log(translatePigLatin("eight"));
console.log(translatePigLatin("schwartz"));
console.log(translatePigLatin("algorithm"));
console.log(translatePigLatin("rhythm"));

//6.
console.log("******");

console.log("Search And Replace");

const myReplace = (str, before, after) => {
  let strSplit = str.split(" ");

  let searchWord = strSplit.find((words) => words.includes(before));

  if (searchWord[0] === searchWord[0].toUpperCase()) {
    let firstChar = after[0].toUpperCase() + after.slice(1, after.length);

    return str.replace(before, firstChar);
  }
  return str.replace(before, after.toLowerCase());
};

console.log(
  myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped")
);
console.log(myReplace("Let us go to the store", "store", "mall"));
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));
console.log(myReplace("His name is Tom", "Tom", "john"));
console.log(myReplace("I think we should look up there", "up", "Down"));

//7.
console.log("********");
console.log("DNA Pairing");

const pairElement = (str) => {
  let pairElement = [];
  for (let i = 0; i <= str.length; i++) {
    if (str[i] === "A") {
      pairElement.push(["A", "T"]);
    } else if (str[i] === "T") {
      pairElement.push(["T", "A"]);
    } else if (str[i] === "G") {
      pairElement.push(["G", "C"]);
    } else if (str[i] === "C") {
      pairElement.push(["C", "G"]);
    }
  }

  return pairElement;
};

console.log(pairElement("GCG"));
console.log(pairElement("ATCGA"));
console.log(pairElement("TTGAG"));
console.log(pairElement("CTCTA"));

//8.
console.log("*******");
console.log("Missing Letters");

const fearNotLetter = (str) => {
  console.log(str.charCodeAt(1));

  for (let i = 0; i <= str.length; i++) {
    const currentCharCode = str.charCodeAt(i);
    const previousCharCode = str.charCodeAt(i - 1);

    if (currentCharCode - previousCharCode > 1) {
      return String.fromCharCode(previousCharCode + 1);
    }
  }

  return undefined;
};

console.log(fearNotLetter("abce")); // d
console.log(fearNotLetter("abcdefghjklmno")); //i
console.log(fearNotLetter("stvwx")); // u
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz")); //undefined

//9.
console.log("****");
console.log("Sorted Union");

//Notes: Flat method create new aray with all sub-array elements concatenated into recursively upto the specified
// depth (optional)
//[...new Set(arr.flat())]

const uniteUnique = (...arr) => {
  console.log(...arr);
  let uniqueArr = [...new Set(arr.flat())];
  return uniqueArr;
};

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));

//10.
console.log("*******");
console.log("Convert HTML Entities");

const convertHTML = (str) => {
  let arrObj = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;",
  };

  return str.replace(/([&<>\"'])/g, (match) => arrObj[match]);
};

console.log(convertHTML("Dolce & Gabbana")); // output Dolce &amp; Gabbana
console.log(convertHTML("Hamburgers < Pizza < Tacos"));
console.log(convertHTML("Sixty > twelve"));
console.log(convertHTML("abc"));
console.log(convertHTML("<>"));
console.log(convertHTML('Stuff in "quotation marks"'));
console.log(convertHTML("Schindler's List"));

//11.
//first sequence of fibonacci are 0, 1
console.log("*******");
console.log("sum all odd Fibonacci number");

// const sumFibs = (num) => {
//   let arrNum = [0, 1];
//   let total = 0;
//   let numArr = [];

//   for (let i = 0; i <= num; i++) {
//     numArr.push(i);
//   }
//   //keep only the num that are fibonacci sequence in numArr
// };

// console.log(sumFibs(4));
// console.log(sumFibs(10));
// console.log(sumFibs(1));
// console.log(sumFibs(1000));
// console.log(sumFibs(4000000));
// console.log(sumFibs(4));
// console.log(sumFibs(75024));
// console.log(sumFibs(75025));

console.log("******");
console.log("Sum All Prime Numbers");

const sumPrimes = (num) => {
  let arrNum = [];
  //helper function
  const isPrime = (num) => {
    if (num < 2) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  };

  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) {
      arrNum.push(i);
    }
  }

  return arrNum.reduce((a, b) => a + b, 0);
};

console.log(sumPrimes(10));
console.log(sumPrimes(977));

console.log("******");
console.log("Smallest Common Multiple");

const smallestCommons = (arr) => {
  // Create a range of numbers between the two given parameters
  const range = [];
  for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
    range.push(i);
  }

  // Function to calculate the greatest common divisor (GCD) of two numbers
  const gcd = (a, b) => {
    if (b === 0) {
      return a;
    }
    return gcd(b, a % b);
  };

  // Function to calculate the least common multiple (LCM) of two numbers
  const lcm = (a, b) => (a * b) / gcd(a, b);

  // Calculate the LCM for the range of numbers
  let result = range[0];
  for (let i = 1; i < range.length; i++) {
    result = lcm(result, range[i]);
  }

  return result;
};

console.log(smallestCommons([1, 5]));
console.log(smallestCommons([5, 1]));
console.log(smallestCommons([2, 10]));
console.log(smallestCommons([1, 13]));
console.log(smallestCommons([23, 18]));

console.log("***DropElement***");

function dropElements(arr, func) {
  // return arr.filter((number) => func(number));
  const index = arr.findIndex(func);
  return index !== -1 ? arr.slice(index) : [];
}

console.log(
  dropElements([1, 2, 3], function (n) {
    return n < 3;
  })
);
console.log(
  dropElements([0, 1, 0, 1], function (n) {
    return n === 1;
  })
); //output [1,0,1]
console.log(
  dropElements([1, 2, 3, 9, 2], function (n) {
    return n > 2;
  })
); //output [3,9,2]
console.log(
  dropElements([1, 2, 3, 4], function (n) {
    return n >= 3;
  })
);

//13.

console.log("****StreamRoller****");

const steamrollArray = (arr) => {
  //console.log(arr.length);
  let arrBol = arr.map((array) => Array.isArray(array));

  const flattenedArray = [];
  // Loop over array contents
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      // Recursively flatten entries that are arrays
      //  and push into the flattenedArray
      flattenedArray.push(...steamrollArray(arr[i]));
    } else {
      // Copy contents that are not arrays
      flattenedArray.push(arr[i]);
    }
  }
  return flattenedArray;
};

console.log(steamrollArray([1, [2], [3, [[4]]]]));
//console.log(steamrollArray([[["a"]], [["b"]]]));

console.log("***Everything Be True***");

const truthCheck = (collection, pre) => {
  return collection.every((obj) => obj[pre]);
  //return Object.keys(collection);
};

console.log(
  truthCheck(
    [
      { name: "Quincy", role: "Founder", isBot: false },
      { name: "Naomi", role: "", isBot: false },
      { name: "Camperbot", role: "Bot", isBot: true },
    ],
    "isBot"
  )
);
console.log(
  truthCheck(
    [
      { name: "Quincy", role: "Founder", isBot: false },
      { name: "Naomi", role: "", isBot: false },
      { name: "Camperbot", role: "Bot", isBot: true },
    ],
    "name"
  )
);

console.log(
  truthCheck(
    [
      { name: "Quincy", role: "Founder", isBot: false },
      { name: "Naomi", role: "", isBot: false },
      { name: "Camperbot", role: "Bot", isBot: true },
    ],
    "role"
  )
);

//14.
console.log("****Argument Optional");

// function addTogether() {
//   const [first, second] = arguments;
//   console.log(first);
// }

const addTogether = (...args) => {
  const [first, second] = args;

  if (typeof first === "number" && typeof second === "number") {
    return first + second;
  } else if (args.length === 1 && typeof first === "number") {
    return function (second) {
      if (typeof second === "number") {
        return first + second;
      } else {
        return undefined;
      }
    };
  } else {
    return undefined;
  }
};

console.log(addTogether(2, 3)); // 5
console.log(addTogether(23, 30)); //53
console.log(addTogether(5)(7)); //12
console.log(addTogether(2, "3"));
console.log(addTogether("2", 3));
console.log(addTogether(5, undefined));
console.log(addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ")); //undefined

console.log("****PalinDrome****");

const palindrome = (str) => {
  let regex = /[\W_]/g; // remove all punctuation.

  let cleanStr = str.toLowerCase().replace(regex, "");

  let reverseStr = cleanStr.split("").reverse().join("");

  return cleanStr === reverseStr;
};

console.log(palindrome("eye"));
console.log(palindrome("_eye"));
console.log(palindrome("race car"));
console.log(palindrome("not a palindrome"));
console.log(palindrome("A man, a plan, a canal. Panama"));
console.log(palindrome("0_0 (: /- :) 0-0"));

console.log("****Roman Numeral Converter****");

const convertToRoman = (num) => {
  let romanNumerals = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  let romanNumeralStr = "";

  for (key in romanNumerals) {
    romanNumeralStr += key.repeat(Math.floor(num / romanNumerals[key]));
    num %= romanNumerals[key];
  }
  //console.log("hello");
  return romanNumeralStr;
};

console.log(convertToRoman(1));
console.log(convertToRoman(2));
console.log(convertToRoman(3));
console.log(convertToRoman(4));
console.log(convertToRoman(12));
console.log(convertToRoman(44));
console.log(convertToRoman(45));
console.log(convertToRoman(68));
console.log(convertToRoman(99));

console.log("***Cesar Cipher****");

const rot13 = (str) => {
  let alphabetArr = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  let strArr = str.split("");

  let newStr = [];
  for (let i = 0; i < str.length; i++) {
    const index = alphabetArr.indexOf(strArr[i]);
    if (index === -1) {
      //this keeps the non alphabets in the array
      newStr.push(strArr[i]);
    } else {
      const newIndex = (index + 13) % alphabetArr.length;

      newStr.push(alphabetArr[newIndex]);
    }
  }

  return newStr.join("");
};

console.log(rot13("SERR PBQR PNZC"));
console.log(rot13("SERR CVMMN!"));
console.log(rot13("SERR YBIR?"));
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));

console.log("****Telephone Number Validator*****");

const telephoneCheck = (str) => {
  let regex = /^(1\s?)?(\(\d{3}\)|\d{3})[-\s]?\d{3}[-\s]?\d{4}$/;
  return regex.test(str);
};

console.log(telephoneCheck("555-555-5555")); //output true
console.log(telephoneCheck("8oo-six427676")); // false
console.log(telephoneCheck("1 (555) 555-5555")); // true

console.log("***Cash Register***");

const checkCashRegister = (price, cash, cid) => {
  const UNIT_AMOUNT = {
    PENNY: 0.01,
    NICKEL: 0.05,
    DIME: 0.1,
    QUARTER: 0.25,
    ONE: 1.0,
    FIVE: 5.0,
    TEN: 10.0,
    TWENTY: 20.0,
    "ONE HUNDRED": 100.0,
  };
  let totalCID = 0;
  for (let element of cid) {
    totalCID += element[1];
  }
  totalCID = totalCID.toFixed(2);
  let changeToGive = cash - price;
  const changeArray = [];
  if (changeToGive > totalCID) {
    return { status: "INSUFFICIENT_FUNDS", change: changeArray };
  } else if (changeToGive.toFixed(2) === totalCID) {
    return { status: "CLOSED", change: cid };
  } else {
    cid = cid.reverse();
    for (let elem of cid) {
      let temp = [elem[0], 0];
      while (changeToGive >= UNIT_AMOUNT[elem[0]] && elem[1] > 0) {
        temp[1] += UNIT_AMOUNT[elem[0]];
        elem[1] -= UNIT_AMOUNT[elem[0]];
        changeToGive -= UNIT_AMOUNT[elem[0]];
        changeToGive = changeToGive.toFixed(2);
      }
      if (temp[1] > 0) {
        changeArray.push(temp);
      }
    }
  }
  if (changeToGive > 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }
  return { status: "OPEN", change: changeArray };
};
// Example usage
console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
  ])
);

console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
  ])
);

console.log(
  checkCashRegister(3.26, 100, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
  ])
);
