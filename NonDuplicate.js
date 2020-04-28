// given an array where every element appears exactly twice except for one which appears once, find the single element.

var singleNonDuplicate = function (nums) {
    for (let i = 0; i < nums.length; i += 2) {
        if (nums[i] !== nums[i + 1]) {
            return nums[i]
        }
    }
};