const birthDate = new Date(
  prompt("Enter your birthday Format: month/day/year")
);
const currentDate = new Date();

console.log(birthDate);
console.log(currentDate);

const difference = currentDate - birthDate;
console.log(difference); // in mili seconds

const days = difference / (1000 * 3600 * 24);
// convert to seconds
// convert to hours
// convert to days

console.log(days);

console.log(`${days} days betwen birthday and today`);
