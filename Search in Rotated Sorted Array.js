/*
Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).

You are given a target value to search. If found in the array return its index, otherwise return -1.

You may assume no duplicate exists in the array.

*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  console.log(nums)
  while(nums[0] > nums[nums.length-1]){
  	nums.push(nums.shift())
  }
  var first = 0;
  var end = nums.length;
  console.log(nums)
  while(Math.round(nums[end-first/2]) !== target) {
  	console.log(first,end,end-first/2)
  	if(nums[end-first/2] > target) {
  		end = Math.ceil(end-first/2)
  	} else {
  		first = Math.ceil(end-first/2)
  	}
  	
  } 
  return Math.round(end-first/2)
};

// console.log(search([4,5,6,7,0,1,2],5))

var a = new Object({type:'student'})}
function a(s) {
	s.name = 'john',
	s.age = 15
} 