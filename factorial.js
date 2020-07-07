// n! = (n) * (n-1) * (n-2) * ... * 1

// iterative solution
function factorialIterative(num) {
    if (num < 0) return undefined;
    let total = 1;
    for (let n = num; n > 1; n--) {
        total = total * n;
    }
    return total
}

// recursive solution
function factorial(num) {
    if (num === 1 || num === 0) { // base case
        return 1;
    }
    return num * factorial(num - 1); // recursive call
}