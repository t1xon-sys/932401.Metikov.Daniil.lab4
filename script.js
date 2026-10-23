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