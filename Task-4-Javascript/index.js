// Part 1
let result = "E";

const getExam = (score) => {
  if (score <= 100 && score >= 85) {
    result = "A";
  } else if (score < 85 && score >= 75) {
    result = "B";
  } else if (score < 75 && score >= 65) {
    result = "C";
  } else if (score < 65 && score >= 55) {
    result = "D";
  } else if (score < 55) {
    result = "E";
  }

  return `your score result is : ${result}`;
};

console.log(getExam(56));

// Part 2
let date = 28;
let month = 10;
let year = 1996;

const getBirthday = () => {
  switch (month) {
    case 1:
      month = "January";
      break;
    case 2:
      month = "February";
      break;
    case 3:
      month = "March";
      break;
    case 4:
      month = "April";
      break;
    case 5:
      month = "May";
      break;
    case 6:
      month = "June";
      break;
    case 7:
      month = "July";
      break;
    case 8:
      month = "August";
      break;
    case 9:
      month = "September";
      break;
    case 10:
      month = "October";
      break;
    case 11:
      month = "November";
      break;
    case 12:
      month = "December";
      break;
  }

  return month;
};

getBirthday();

console.log(
  month <= 0 || month >= 13
    ? "Your Format Month is Undefined"
    : `${date} ${month} ${year}`
);

// Part 3
let format = "";

const getStar = (n) => {
  // Please insert N with integer type, because i dont implement validate type data

  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      format += "#";
    }
    format += "\n";
  }

  return format;
};

console.log(getStar(5));

// Part 4
const word = ["Programming", "Javascript", "VueJS"];

let text_length = word.length;
let index = 0;
let no = 1;

const getLoving = (m) => {
  while (no <= m) {
    index += 1;
    no += 1;

    console.log(no + " - I love " + word[index]);

    if (index == text_length) {
      console.log("#".repeat(no - 1));
      index = 0;
    }
  }
};

getLoving(5);
