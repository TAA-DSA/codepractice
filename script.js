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
