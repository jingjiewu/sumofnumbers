/**
 * test
 * Created by jingjiewu on 2/5/17.
 */

const testNum = [1, 2, 3, 4];

function sumFor(nums) {
  let total = 0;
  for (const num of nums) {
    total += num;
  }
  return total;
}

console.log(sumFor(testNum));

function sumWhile(nums) {
  let total = 0;
  let i = 0;
  while (i < nums.length) {
    total += nums[i];
    i++;
  }
  return total;
}

console.log((sumWhile(testNum)));

function sumRecursion(nums) {
  if (nums.length === 0) {
    return 0;
  }
  return nums[0] + sumRecursion(nums.slice(1, nums.length));

}

console.log(sumRecursion(testNum));

function sumTheSimpleWay(nums){
  return _.reduce(nums, function (meon, num){ return meon + num}, 0);
}

console.log(sumTheSimpleWay(testNum));