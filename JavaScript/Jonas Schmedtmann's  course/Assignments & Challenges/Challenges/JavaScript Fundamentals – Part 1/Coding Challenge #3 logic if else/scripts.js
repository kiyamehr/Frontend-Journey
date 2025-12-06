// main challenge

// const dolphinsScoreFirstGame = 96;
// const dolphinsScoreSacondGame = 108;
// const dolphinsScoreThirdGame = 89;

// const koalasScoreFirstGame = 88;
// const koalasScoreSacondGame = 91;
// const koalasScoreThirdGame = 110;

// const dolphinseAvg =
//   (dolphinsScoreFirstGame + dolphinsScoreSacondGame + dolphinsScoreThirdGame) /
//   3;

// const koalaseAvg =
//   (koalasScoreFirstGame + koalasScoreSacondGame + koalasScoreThirdGame) / 3;

// console.log(dolphinseAvg);
// console.log(koalaseAvg);

// if (dolphinseAvg > koalaseAvg) {
//   console.log(
//     `Dolphines have defeated the Koalas with the score of ${dolphinseAvg}`
//   );
// } else if (koalaseAvg > dolphinseAvg) {
//   console.log(
//     `Koalas have defeated the Dolphines with the score of ${koalaseAvg}`
//   );
// } else {
//   console.log(`The game was a draw! score: ${dolphinseAvg}`);
// }

// Bonus 1 & 2

const dolphinsScoreFirstGame = 97;
const dolphinsScoreSacondGame = 112;
const dolphinsScoreThirdGame = 101;

const koalasScoreFirstGame = 109;
const koalasScoreSacondGame = 95;
const koalasScoreThirdGame = 125;

const dolphinseAvg = Math.trunc(
  (dolphinsScoreFirstGame + dolphinsScoreSacondGame + dolphinsScoreThirdGame) /
    3
);

const koalaseAvg = Math.trunc(
  (koalasScoreFirstGame + koalasScoreSacondGame + koalasScoreThirdGame) / 3
);

console.log(dolphinseAvg);
console.log(koalaseAvg);

if (dolphinseAvg > koalaseAvg && dolphinseAvg >= 100) {
  console.log(
    `Dolphines have defeated the Koalas with the score of ${dolphinseAvg}`
  );
} else if (koalaseAvg > dolphinseAvg && koalaseAvg >= 100) {
  console.log(
    `Koalas have defeated the Dolphines with the score of ${koalaseAvg}`
  );
} else if (
  koalaseAvg === dolphinseAvg &&
  koalaseAvg >= 100 &&
  dolphinseAvg >= 100
) {
  console.log(`The game was a draw! score: ${dolphinseAvg}`);
} else {
  console.log("What the Hell are these inputs!?");
}
