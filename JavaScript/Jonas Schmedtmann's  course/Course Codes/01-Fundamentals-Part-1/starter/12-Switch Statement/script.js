const day = "thursday";

// switch statement
switch (
  day // day === wedsnday (strict equasion)
) {
  case "wednsday":
    console.log("Hit The Gym.");
    console.log("Cook Dinner");
    console.log("Its wednsday my Dudes!!!");
    break;
  case "thursday":
  case "monday":
    console.log("Do Coding Exercises");
    break;
  case "friday":
  case "sunday":
    console.log("Enjoy the weekend!");
    break;

  default:
    console.log("Its A wierd day...");
}

// above code but  with if / else statements
// if (day === "wednsday") {
//   console.log("Hit The Gym.");
//   console.log("Cook Dinner");
//   console.log("Its wednsday my Dudes!!!");
// } else if (day === "thursday" || day === "monday") {
//   console.log("Do Coding Exercises");
// } else if (day === "friday" || day === "sunday") {
//   console.log("Enjoy the weekend!");
// } else {
//   console.log("Its A wierd day...");
// }
