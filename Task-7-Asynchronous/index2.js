const readBooksPromise = require("./promise");

const time = 10000;

var books = [
  { name: "LOTR", timeSpent: 3000 },
  { name: "Fidas", timeSpent: 2000 },
  { name: "Kalkulus", timeSpent: 4000 },
  { name: "komik", timeSpent: 1000 },
];

const checkPromise = async () => {
  const bit_1 = await readBooksPromise(time, books[0]);
  const bit_2 = await readBooksPromise(bit_1, books[1]);
  const bit_3 = await readBooksPromise(bit_2, books[2]);
  const bit_4 = await readBooksPromise(bit_3, books[3]);

  return console.log("Finished");
};

checkPromise();
