"use strict";

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
      ``,
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

for (const [goalsNum, goalScorer] of game.scored.entries()) {
  console.log(`Goal ${goalsNum + 1}: '${goalScorer}'`);
}

const odds = Object.values(game.odds);
console.log(odds);

let avg;
for (const odd of odds) {
  let sum = 0;
  sum += odd;
  avg = Math.trunc(sum / odds.length);
}
console.log(avg);

console.log(
  `Odd of victory ${game.team1}: ${game.odds?.team1} \n Odd of Draw: ${game.odds?.x}\n Odd of victory ${game.team2}: ${game.odds?.team2}`
);

const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}

console.log(scorers);
