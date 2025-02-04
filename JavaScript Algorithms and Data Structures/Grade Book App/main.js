//1
// const getAverage = (scores) =>
//   scores.reduce((sum, score) => sum + score, 0) / scores.length;

function getAverage(scores) {
  let sum = 0;

  for (const score of scores) {
    sum += score;
  }

  return sum / scores.length;
}

//2
// const getGrade = (score) => {
//   if (score === 100) return "A++";
//   if (score >= 90) return "A";
//   if (score >= 80) return "B";
//   if (score >= 70) return "C";
//   if (score >= 60) return "D";
//   return "F";
// };

function getGrade(score) {
  if (score === 100) {
    return "A++";
  } else if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

//3
// const hasPassingGrade = (score) => getGrade(score) !== "F";

function hasPassingGrade(score) {
  return getGrade(score) !== "F";
}

//4
function studentMsg(totalScores, studentScore) {
  const averageScore = getAverage(totalScores);
  const grade = getGrade(studentScore);
  const status = grade !== "F" ? "passed" : "failed";

  return `Class average: ${averageScore}. Your grade: ${grade}. You ${status} the course.`;
}

console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
console.log(getGrade(92));
console.log(hasPassingGrade(50));
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
