//1. Contain Duplicate

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
