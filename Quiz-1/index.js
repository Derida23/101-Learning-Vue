const totalText = (text) => {
  const vanilla = text.split(" ");
  let count = 0;

  for (let [, item] of vanilla.entries()) {
    if (item.length) {
      count += 1;
    }
  }

  console.log(count);

  return count;
};

let text_1 = "Halo nama saya Muhammad Iqbal Mubarok ";
let text_2 = " Saya Iqbal";
let text_3 = "Saya Muhammad Iqbal Mubarok ";

totalText(text_1);
totalText(text_2);
totalText(text_3);

// Part 2

let date_1 = { date: 29, month: 2, year: 2020 };
let date_2 = { date: 28, month: 2, year: 2021 };
let date_3 = { date: 31, month: 12, year: 2021 };

let result = "";

const db = [
  { day: 31, no: 1, month: "January" },
  { day: 28, no: 2, month: "February" },
  { day: 31, no: 3, month: "March" },
  { day: 30, no: 4, month: "April" },
  { day: 31, no: 5, month: "May" },
  { day: 30, no: 6, month: "June" },
  { day: 31, no: 7, month: "July" },
  { day: 31, no: 8, month: "Augst" },
  { day: 30, no: 9, month: "September" },
  { day: 31, no: 10, month: "October" },
  { day: 30, no: 11, month: "November" },
  { day: 31, no: 12, month: "December" },
];

const next_date = ({ date, month, year }) => {
  const select_db = db.filter((it) => it.no === Number(month));
  const next_month = db.filter((it) => it.no === Number(month) + 1);

  if (date > 0 && month && year >= 0) {
    if (select_db.length) {
      // checking if special month is february

      if (select_db[0].no === 2) {
        // Checking Leap or Not

        if (Number(year) % 4) {
          // Checking Last Month

          result = core(
            date,
            select_db[0].day,
            select_db[0].month,
            next_month,
            year
          );
        } else {
          // Month is Leap with % 4

          result = core(date, 29, select_db[0].month, next_month, year);
        }
      } else {
        result = core(
          date,
          select_db[0].day,
          select_db[0].month,
          next_month,
          year
        );
      }

      return result;
    } else {
      return "Format Month is Broken !!!";
    }
  } else {
    return "Format Date is Broken !!!";
  }
};

const core = (date, select_day, select_month, next_month, year) => {
  let calculate = "";

  if (Number(date) >= select_day) {
    if (next_month.length) {
      calculate = `${1} ${next_month[0].month} ${year}`;
    } else {
      // Alway December bcs Next Month is Empty
      calculate = `${1} ${db[0].month} ${Number(year) + 1}`;
    }
  } else {
    calculate = `${date + 1} ${select_month} ${year}`;
  }

  return calculate;
};

console.log(next_date(date_1));
console.log(next_date(date_2));
console.log(next_date(date_3));
