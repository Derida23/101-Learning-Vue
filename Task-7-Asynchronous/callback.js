function readBooks(time, book, callback) {
  console.log(`I am reading a book ${book.name}`);

  setTimeout(function () {
    let remaining = 0;
    if (time >= book.timeSpent) {
      remaining = time - book.timeSpent;

      console.log(
        `I've read the book ${book.name}, i have ${remaining} ms left`
      );

      callback(remaining);
    } else {
      console.log("My time is up");
      callback(time);
    }
  }, book.timeSpent);
}

module.exports = readBooks;
