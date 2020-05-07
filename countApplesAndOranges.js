// https://www.hackerrank.com/challenges/apple-and-orange/problem

// s = house start
// t = house end
// a = apple tree position
// b = orange tree position
// apples = distances at which each apple falls from its tree
// oranges = distances at which each orange falls from its tree
function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let appleCount = 0
    let orangeCount = 0
    for (let i = 0; i < apples.length; i++) {
        if (a + apples[i] >= s && a + apples[i] <= t) {
            appleCount++
        }
    }
    for (let i = 0; i < oranges.length; i++) {
        if (b + oranges[i] >= s && b + oranges[i] <= t) {
            orangeCount++
        }
    }
    console.log(appleCount)
    console.log(orangeCount)
}
// loop through apples
// if a + apples[i] >= s and <= t, increment apple count
// loop through oranges
// if b + oranges[i] >= s and <= t, increment orange count
// print apple and orange counts

// another solution in two lines
function anotherSolution(s, t, a, b, apples, oranges) {
    console.log(apples.filter(value => value + a >= s && value + a <= t).length)
    console.log(oranges.filter(value => value + b >= s && value + b <= t).length)
}