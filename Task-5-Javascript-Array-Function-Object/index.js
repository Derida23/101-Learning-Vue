// Part 1
let listAnimal = ["2. Komodo", "5. Buaya", "3. Cicak", "4. Ular", "1. Tokek"];

for (let [, item] of listAnimal.sort().entries()) {
  console.log(item);
}

// Part 2
function introduce(data) {
  const result = `Nama saya ${data.name}, umur saya ${data.age} tahun, alamat saya di ${data.address}, dan saya punya hobby yaitu ${data.hobby}`;

  return result;
}

let data = {
  name: "John",
  age: 30,
  address: "Jalan Pelesiran",
  hobby: "Gaming",
};

let intro = introduce(data);
console.log(intro);

// Part 3
const count_vowels = (name) => {
  let vowels = ["a", "e", "i", "o", "u"];
  let result = 0;

  for (let vowel of name.toLowerCase()) {
    if (vowels.includes(vowel)) {
      result = result + 1;
    }
  }
  return result;
};
let count_1 = count_vowels("Muhammad");

let count_2 = count_vowels("Iqbal");

console.log(count_1, count_2);

// Part 4
const count = (numb) => {
  let result = Number(numb) + ((Math.random() * 101) | 0);
  return result;
};

console.log(count(0));
console.log(count(1));
console.log(count(2));
console.log(count(3));
console.log(count(5));
