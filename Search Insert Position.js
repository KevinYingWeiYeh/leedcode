/*
Given a sorted array and a target value, return the index if the target is found. If not, 
return the index where it would be if it were inserted in order.
You may assume no duplicates in the array.
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 
var searchInsert = function(nums, target) {
   for(var i = 0; i < nums.length; i++) {
   		console.log(i,nums[i],target)
   		if(target <= nums[i]) return i
   	}
	return nums.length
};

var searchInsert = function(nums, target) {
    var l = 0;
    var u = nums.length-1;
    var mid;

    while(l <= u) {
        mid = parseInt((u+l)/2);
        if(target === nums[mid]) {
            return mid;
        } else if(target < nums[mid]) {
          u = mid-1;
        } else {
          l = mid+1;
        }
    }

    return l;
};