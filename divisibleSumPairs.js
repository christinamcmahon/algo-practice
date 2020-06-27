// https://www.hackerrank.com/challenges/divisible-sum-pairs/problem
// given an array of n integers, and a positive integer k, find the number
// of (i, j) pairs where i < j and ar[i] + ar[j] is divisible by k.

function divisibleSumPairs(n, k, ar) {
    let count = 0
    for (let i = 0; i < n; i++) {
        for (let j = 1; j < n; j++) {
            if (i < j && (ar[i] + ar[j]) % k === 0) count++
        }
    }
    return count
}

// track count
// slowly loop through i
// quickly loop thorugh j
// if meets requirements, increment count
// return count