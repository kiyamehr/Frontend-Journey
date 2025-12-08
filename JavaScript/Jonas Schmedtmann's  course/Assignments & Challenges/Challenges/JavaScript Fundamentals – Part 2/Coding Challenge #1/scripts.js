"use strict";

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

function whoWins(firstScore, secondScore) {
  if (firstScore > secondScore * 2) {
    return `First Team Wins With The score of (${firstScore} vs ${secondScore}) `;
  } else if (secondScore > firstScore * 2) {
    return `Second Team Wins With The score of (${secondScore} vs ${firstScore})`;
  } else {
    return `No Team Wins! FirstTeam score: ${firstScore},SecondTeam score: `;
  }
}

const dolphinScoreAverage = calcAverage(85, 54, 41);
const koalaScoreAverage = calcAverage(23, 34, 27);

console.log(dolphinScoreAverage);
console.log(koalaScoreAverage);

const win = whoWins(dolphinScoreAverage, koalaScoreAverage);
console.log(win);
