// student score, total possible score
// 15/20 => You got a C (75%).
// A 90-100, B 80-89, C 70-79, D 60-69, F 0-59

const gradeStudent = function (studentScore, maxScore) {
    const scorePercent = studentScore / maxScore * 100
    let letterGrade

    if (scorePercent >= 90) {
        letterGrade = 'A'
    } else if (scorePercent >= 80) {
        letterGrade = 'B'
    } else if (scorePercent >= 70) {
        letterGrade = 'C'
    } else if (scorePercent >= 60) {
        letterGrade = 'D'
    } else {
        letterGrade = 'F'
    }
    return `You got a ${letterGrade} (${scorePercent}%)!`
}

console.log(gradeStudent(90, 10))