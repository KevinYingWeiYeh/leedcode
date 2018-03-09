/**
	Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.
	If such arrangement is not possible, it must rearrange it as the lowest possible order (ie, sorted in ascending order).
	the replacement must be in-place, do not allocate extra memory.
	Here are some examples. Inputs are in the left-hand column and its corresponding outputs are in the right-hand column.
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    var reverse = function( nums, start) {
    	console.log('reverse',nums, start)
        var i = start, j = nums.length - 1;
        while (i < j) {
            swap(nums, i, j);
            i++;
            j--;
        }
    }

    var swap = function (nums, i, j) {
        var temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }

    var i = nums.length - 2;
        while (i >= 0 && nums[i + 1] <= nums[i]) {
            i--;
            console.log('i--',i,nums[i])
        }
        if (i >= 0) {
        	console.log('i>=0')
            var j = nums.length - 1;
            while (j >= 0 && nums[j] <= nums[i]) {
                j--;
                console.log('J--')
            }
            swap(nums, i, j);
        }
    reverse(nums, i + 1);
    // return nums
}

console.log(nextPermutation([1,2,3]))