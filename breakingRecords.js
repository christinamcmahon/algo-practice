// https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem?h_r=next-challenge&h_v=zen

function breakingRecords(scores) {
    let min = scores[0]
    let max = scores[0]
    let minCount = 0
    let maxCount = 0

    for (let i = 1; i < scores.length; i++) {
        if (scores[i] < min) {
            min = scores[i]
            minCount++
        } else if (scores[i] > max) {
            max = scores[i]
            maxCount++
        }
    }

    return [maxCount, minCount]
}

// track the min and max scores (which will start at scores[0])
// track the count of breaking those records
// loop through scores in order
// if a score breaks one of the records, increment the breaking record and set as new min or max
// return the records