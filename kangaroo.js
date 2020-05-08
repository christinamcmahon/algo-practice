
// https://www.hackerrank.com/challenges/kangaroo/problem?h_r=next-challenge&h_v=zen

// x1 = kangaroo 1's starting position
// v1 = kangaroo 1's velocity
// x2 = kangaroo 2's staarting position
// v2 = kangaroo 2's velocity
function kangaroo(x1, v1, x2, v2) {
    if (v1 > v2) {
        if ((x1 - x2) % (v2 - v1) == 0) {
            return "YES"
        }
    }
    return "NO"
}
// this can be solved as if we are finding where two lines intersect