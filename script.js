const scores = [92, 45, 88, 76, 100, 38, 85];

function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

function filterHighScores(arr){
    return arr.filter(function (score) {
        return score >= 80;
    });
}

function calculateSum(arr) {
    let sum = 0;
    for (const score of arr) {
        sum += score;
    }
    return sum;
}

let studentName = prompt("Введите ваше имя:", "");
if (studentName === null || studentName.trim() === "") {
    studentName = "Студент";
} else {
    studentName = studentName.trim();
}

let failedCount = 0;
for (let i = 0; i < scores.length; i++) {
    if (scores[i] < 50) {
        failedCount++;
    }
}

const highScores = filterHighScores(scores);
const maxScore = findMax(scores);
const sum = calculateSum(scores);
const average = sum / scores.length;

alert(
    "Привет, " + studentName + "!\n" +
    "У вас " + highScores.length + " отличных работ, максимальный балл – " + maxScore
);