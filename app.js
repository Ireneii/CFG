let genre = "horror";
let rating = 5;
let pillows = 1;

if (rating >= 5 && genre === "horror" && pillows >= 1) {
  console.log("Your friends are going to watch it");
} else if (rating >= 5 && genre === "horror" && pillows < 1) {
  console.log("Your friend won't watch it");
} else {
  console.log("No need to watch");
}
