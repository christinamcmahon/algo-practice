// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...

// iterative solution
function fibonacciIterative(n) {
    if (n < 1) return 0;
    if (n <= 2) return 1;

    let fibNMinus2 = 0;
    let fibNMinus1 = 1;
    let fibN = n;

    for (let i = 2; i <= n; i++) { // n >= 2
        fibN = fibNMinus1 + fibNMinus2; // f(n-1) + f(n-2)
        fibNMinus2 = fibNMinus1;
        fibNMinus1 = fibN;
    }
    return fibN;
}

// recursive solution
function fibonacci(n) {
    if (n < 1) return 0; // base case 1
    if (n <= 2) return 1; // base case 2
    return fibonacci(n - 1) + fibonacci(n - 2); // recursive call
}


// recursive solution with memoization
function fibonacciMemoization(n) {
    const memo = [0, 1]; // cache all computed results here
    const fib = (n) => {
        if (memo[n] != null) return memo[n]; // base case
        return memo[n] = fib(n - 1, memo) + fib(n - 2, memo); // recursive call
    };
    return fib(n);
}
