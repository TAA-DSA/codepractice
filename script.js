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

console.log(Boolean([7, "ate", "", false, 9]));
bouncer([7, "ate", "", false, 9]);
bouncer(["a", "b", "c"]);
bouncer([false, null, 0, NaN, undefined, ""]);
bouncer([null, NaN, 1, 2, undefined]);

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
