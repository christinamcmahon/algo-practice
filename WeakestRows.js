// Given a matrix of 1s (soldiars) and 0s (civilians), return the indexes 
// of the k weakest ws in a matrix ordered from weakest to strongest.

var kWeakestRows = function (mat, k) {
    return mat
        // loop through mat (map) and get sums (reduce)
        .map((row, i) => [row.reduce((a, b) => a + b), i])
        // sort according to sums (sort)
        .sort((a, b) => a[0] == b[0] ? a[1] - b[1] : a[0] - b[0])
        // loop through (map) and get the ordered indexes
        .map(row => row[1])
        // only get 0-k (slice)
        .slice(0, k)
};