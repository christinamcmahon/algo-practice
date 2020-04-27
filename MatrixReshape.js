// given a matrix, reshape the matrix according to the provided row and column numbers

var matrixReshape = function (nums, r, c) {
    // check that r and c are valid first and if r is 1 then return the concatenated nums
    const size = nums[0].length * nums.length
    if (size !== r * c) {
        return nums
    } else if (r === 1 && c === size) {
        return [[].concat(...nums)]
    }
    // otherwise, splice and push nums values into matrix according to r and c
    nums = [].concat(...nums)
    for (let i = 0; i < r; i++) {
        nums.push(nums.splice(0, c))
    }
    return nums
};