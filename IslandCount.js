function getNumberOfIslands(binaryMatrix) {
    // track number of islands
    let numIslands = 0
    for (let i = 0; i < binaryMatrix.length; i++) {
        for (let j = 0; j < binaryMatrix[i].length; j++) {
            if (binaryMatrix[i][j] === 1) {
                numIslands++
                markIslands(binaryMatrix, i, j)
            }
        }
    }
    return numIslands
    // loop through outer and inner arrays
    // check for 1s and mark them
    // when I find a 1, check all sides and mark those
}

function markIslands(binaryMatrix, outerIndex, innerIndex) {
    if (outerIndex < 0 || outerIndex > binaryMatrix.length - 1 || innerIndex < 0 || innerIndex > binaryMatrix[outerIndex].length - 1) {
        return;
    }
    if (binaryMatrix[outerIndex][innerIndex] == 0) {
        return;
    }
    binaryMatrix[outerIndex][innerIndex] = 0
    markIslands(binaryMatrix, outerIndex, innerIndex - 1) // check left
    markIslands(binaryMatrix, outerIndex, innerIndex + 1) // check right
    markIslands(binaryMatrix, outerIndex - 1, innerIndex) // check above
    markIslands(binaryMatrix, outerIndex + 1, innerIndex) // check below
}