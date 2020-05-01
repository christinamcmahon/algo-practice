// A boomerang is a set of 3 points that are all distinct and not in a straight line

var isBoomerang = function (points) {
    // compare slopes of the first and second points and the first and third points
    // if equal (and thus the points are not on the same line), return true
    return (points[0][0] - points[1][0]) * (points[0][1] - points[2][1]) != (points[0][0] - points[2][0]) * (points[0][1] - points[1][1]);
};