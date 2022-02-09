// Part 1
var first = "saya sangat senang hari ini";
var second = "belajar javascript itu keren";

const result = `${first.substring(0, 4)} ${first.substring(
  12,
  18
)} ${second.substring(0, 7)} ${second.substring(8, 18).toUpperCase()}`;

console.log(result);

//Part 2
var first_text = "10";
var second_text = "2";
var third_text = "4";
var four_text = "6";

const resultTwo =
  Number(first_text) +
  Number(second_text) * Number(third_text) +
  Number(four_text);

console.log(resultTwo);

//Part 3
var text = "wah javascript itu keren sekali";

var first_slice = text.substring(0, 3);
var second_slice = text.substring(4, 14);
var third_slice = text.substring(15, 18);
var fourth_slice = text.substring(19, 24);
var fifth_slice = text.substring(25);

console.log("First Text: " + first_slice);
console.log("Second Text: " + second_slice);
console.log("Third Text: " + third_slice);
console.log("Fourth Text: " + fourth_slice);
console.log("Fifth Text: " + fifth_slice);
