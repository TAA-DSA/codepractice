console.log("hello Coding");

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
