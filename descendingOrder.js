// https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/javascript

function descendingOrder(n) {
    return parseInt(String(n).split("").sort().reverse().join(""))
}

// convert n to string
// split the string
// sort the array of nums
// reverse the array to descending order
// join the nums into string
// convert back to integer