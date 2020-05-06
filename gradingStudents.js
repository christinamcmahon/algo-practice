// Round grades to nearest mutliple of 5 if the grade is greater than 38 or 
// the difference between the grade and the next multipl eof 5 is less than 5

function gradingStudents(grades) {
    let roundedGrades = []
    for (let i = 0; i < grades.length; i++) {
        if (grades[i] < 38 || grades[i] % 5 < 3) {
            roundedGrades[i] = grades[i]
        } else {
            roundedGrades[i] = Math.ceil(grades[i] / 5) * 5
        }
    }
    return roundedGrades
}
// initialize new grade array
// loop through grades
// if grade is less than or equal to 40, move on 
// or if grade % 5 < 3, move on
// else new grade is Math.ceil(grade/5)*5 (round up)
// insert that grade into new grade array
// return new grade array