function readBooksPromise(time, book) {
  console.log(`I started reading book ${book.name}`);

  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let bitTime = time - book.timeSpent;

      if (bitTime >= 0) {
        console.log(
          `I've finished reading book ${book.name}, i have ${bitTime} ms left`
        );
        resolve(bitTime);
      } else {
        console.log(`I don't have time to read books ${book.name}`);
        reject(bitTime);
      }
    }, book.timeSpent);
  });
}

module.exports = readBooksPromise;
