// Given a non-negative integer, return the number of steps to reduce it to zero if you can only divide by 2 or subtract by 1.
var numberOfSteps = function (num) {
    let steps = 0
    while (num != 0) {
        if (num % 2 == 0) {
            num /= 2
        } else {
            num -= 1
        }
        steps++
    }
    return steps
};