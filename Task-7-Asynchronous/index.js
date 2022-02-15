var readBooks = require("./callback.js");

var books = [
  { name: "LOTR", timeSpent: 3000 },
  { name: "Fidas", timeSpent: 2000 },
  { name: "Kalkulus", timeSpent: 4000 },
  { name: "komik", timeSpent: 1000 },
];

// Part 1
const time = 10000;
readBooks(time, books[0], (bit_1) => {
  readBooks(bit_1, books[1], (bit_2) => {
    readBooks(bit_2, books[2], (bit_3) => {
      readBooks(bit_3, books[3], (bit_4) => {
        return;
      });
    });
  });
});
