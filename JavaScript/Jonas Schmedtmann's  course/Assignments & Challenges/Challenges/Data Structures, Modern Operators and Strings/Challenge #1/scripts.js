"use strict";

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],

  printGoals: function (...playersContributedInGoal) {
    console.log(`Players Who Scored: ${playersContributedInGoal}`);
    console.log(`Number Of Goals: ${playersContributedInGoal.length}`);
  },
};

// Functions
const addPlayersToObject = (gk, players) => [gk, ...players];

// Bayern
const gkBayern = "Manuel Neuer";
const fieldPlayersBayern = [
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
];

game.playersBayern = addPlayersToObject(gkBayern, fieldPlayersBayern);

console.log(game.playersBayern);

// Dortmont
const gkDortmond = "Burki";
const fieldPlayersDortmond = [
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
];
game.playersDortmond = addPlayersToObject(gkDortmond, fieldPlayersDortmond);
console.log(game.playersDortmond);

///// -----------------------------------

game.allPlayers = [...game.playersBayern, ...game.playersDortmond];
console.log(game.allPlayers);

const bayernSubs = ["Thiago", "Coutinho", "Perisic"];

game.playersBayernFinal = [...game.playersBayern, ...bayernSubs];
console.log(game.playersBayernFinal);

const playersContributedInGoal = ["Davies", "Muller", "Lewandowski", "Kimmich"];
game.printGoals(...playersContributedInGoal);
game.printGoals(...game.scored);

const bayernWinOdd = 1.33;
const draw = 3.25;
const DortmondWinOdd = 6.55;

bayernWinOdd < DortmondWinOdd && console.log("Bayern Is More Likely To Win");
DortmondWinOdd < bayernWinOdd && console.log("Dortmond Is More Likely To Win");

game.odds = { Bayern: bayernWinOdd, draw: draw, Dortmond: DortmondWinOdd };
console.log(game.odds);
