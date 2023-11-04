const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

//   28 - In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'.
//      If it does not exist add to the countries list.

const countryToCheck = "Ethiopia";

if (countries.includes(countryToCheck)) {
  console.log(countryToCheck.toUpperCase());
} else {
  countries.push(countryToCheck);
}

console.log(countries);

export default {
  countries,
};
