// https://www.hackerrank.com/challenges/the-birthday-bar/problem

// find m consecutive numbers of s that add to d
function birthday(s, d, m) {
    let result = 0

    for (let i = 0; i < s.length; i++) {
        if (s.slice(i, i + m).reduce((x, y) => x + y) === d) {
            result++;
        }
    }

    return result
}

// track result
// loop through s
// if a given section's total equals d, increment result
// return result
