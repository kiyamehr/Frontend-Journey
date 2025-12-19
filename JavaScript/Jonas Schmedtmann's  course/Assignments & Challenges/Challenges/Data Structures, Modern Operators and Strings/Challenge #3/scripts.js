"use strict";

const gameEvents = new Map([
  [17, "⚽ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽ GOAL"],
  [80, "⚽ GOAL"],
  [92, "🔶 Yellow card"],
]);

let events = new Set();
for (const [gameEventKey, gameEventValue] of gameEvents) {
  // adding to set
  events.add(gameEventValue);

  // event on first or second half
  gameEventKey <= 45
    ? console.log(`First Half: ${gameEventKey}: ${gameEventValue}`)
    : console.log(`Second Half: ${gameEventKey}: ${gameEventValue}`);
}

console.log(events);

gameEvents.delete(64);
console.log(gameEvents);

console.log(`An event happend every ${Math.trunc(90 / gameEvents.size)}`);
