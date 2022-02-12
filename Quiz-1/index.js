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
