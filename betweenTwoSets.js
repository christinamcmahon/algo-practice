// https://www.hackerrank.com/challenges/between-two-sets/problem

// a and b are arrays of integers
function getTotalX(a, b) {
    var low = a[a.length - 1]
    var high = b[0]
    let count = 0;

    for (let x = low; x <= high; x++) {
        if (a.every(val => (x % val == 0))) {
            if (b.every(val => (val % x == 0))) {
                count++;
            }
        }
    }

    return count;
}
// loop through the highest of a and lowest of b since we're only finding how many solutions are between those
// if all of a is are factors of the int being considered
// and if the int being considered is a factor of all of b, increment count
// return the count