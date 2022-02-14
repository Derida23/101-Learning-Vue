// Part 1
const formula = (s) => {
  // if you send param string the s type will change to NaN (Not a Number)

  let large = 2 * Number(s);
  const around = 4 * Number(s);

  return { large, around };
};

console.log(formula(3));

// Part 2
const getName = (firstName, lastName) => {
  return {
    firstName: firstName,
    lastName: lastName,
    fullName: () => `${firstName} ${lastName}`,
  };
};

console.log(getName("William", "Imoh").fullName());

// Part 3
const profile = {
  firstName: "Muhammad",
  lastName: "Iqbal Mubarok",
  address: "Jalan Ranamanyar",
  hobby: "Playing Football",
};

console.log(({ firstName, lastName, address, hobby } = profile));

// Part 4
const west = ["Will", "Chris", "Sam", "Holly"];
const east = ["Gill", "Brian", "Noel", "Maggie"];
const combined = [...west, ...east];

console.log(combined);

// Part 5
const planet = "earth";
const view = "glass";
let before = `Lorem ${view} dolor sit amet, consectetur adipiscing elit, ${planet}`;

console.log(before);
