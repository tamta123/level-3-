import countries from "./countries.js";
import webTechs from "./web_techs.js";

// 1 - Declare an empty array;
let emptyArray = [];

// 2 - Declare an array with more than 5 number of elements
let arrayWithElements = [1, 2, 3, 4, 5, 6];

// 3 - Find the length of your array
let arrayLength = arrayWithElements.length;

// 4 - Get the first item, the middle item and the last item of the array
let firstItem = arrayWithElements[0];
let middleItem = arrayWithElements[Math.floor(arrayLength / 2)];
let lastItem = arrayWithElements[arrayLength - 1];

// 5 - Declare an array called mixedDataTypes, put different data types in the array and find the length of the array.
//The array size should be greater than 5
let mixedDataTypes = [1, "two", true, null, "tamta", { name: "John" }];
let mixedDataTypesLength = mixedDataTypes.length;

// 6 - Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
let itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];

// 7 - Print the array using console.log()
console.log(itCompanies);

// 8 - Print the number of companies in the array
let numberOfCompanies = itCompanies.length;
console.log(numberOfCompanies);

// 9 - Print the first company, middle and last company
let firstCompany = itCompanies[0];
let lastCompany = itCompanies[itCompanies.length - 1];
let middleCompany = itCompanies[Math.floor(itCompanies.length / 2)];
console.log(firstCompany);
console.log(lastCompany);
console.log(middleCompany);

// 10 - Print out each company
for (let company of itCompanies) {
  console.log(company);
}

// 11 - Change each company name to uppercase one by one and print them out
for (let i = 0; i < itCompanies.length; i++) {
  itCompanies[i] = itCompanies[i].toUpperCase();
  console.log(itCompanies[i]);
}

// 12 - Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
let companySentence = itCompanies.join(", ") + " are big IT companies.";
console.log(companySentence);

// 13 - Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
function checkCompany(companyName) {
  if (itCompanies.includes(companyName)) {
    return companyName;
  } else {
    return "Company is not found";
  }
}
console.log(checkCompany("Google"));

// 14 - Filter out companies which have more than one 'o' without the filter method
let companiesWithMultipleO = [];
for (let company of itCompanies) {
  let oCount = company.toLowerCase().split("o").length - 1;
  if (oCount > 1) {
    companiesWithMultipleO.push(company);
  }
}
console.log(companiesWithMultipleO);

// 15 - Sort the array using sort() method
itCompanies.sort();
console.log(itCompanies);

// 16 - Reverse the array using reverse() method
itCompanies.reverse();
console.log(itCompanies);

// 17 - Slice out the first 3 companies from the array
let firstThreeCompanies = itCompanies.slice(0, 3);
console.log(firstThreeCompanies);

// 18 - Slice out the last 3 companies from the array
let lastThreeCompanies = itCompanies.slice(-3);
console.log(lastThreeCompanies);

// 19 - Slice out the middle IT company or companies from the array
let middleCompanyIndex = Math.floor(itCompanies.length / 2);
let middleCompanies = itCompanies.slice(
  middleCompanyIndex,
  middleCompanyIndex + (itCompanies.length % 2 === 0 ? 2 : 1)
);
console.log(middleCompanies);

// 20 - Remove the first IT company from the array
itCompanies.shift();
console.log(itCompanies);

// 21 - Remove the middle IT company or companies from the array
middleCompanyIndex = Math.floor(itCompanies.length / 2);
if (itCompanies.length % 2 === 0) {
  itCompanies.splice(middleCompanyIndex - 1, 2);
} else {
  itCompanies.splice(middleCompanyIndex, 1);
}
console.log(itCompanies);

// 22 - Remove the last IT company from the array
itCompanies.pop();
console.log(itCompanies);

// 23 - Remove all IT companies
itCompanies = [];

// 24 - const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
// add 'Meat' in the beginning of your shopping cart if it has not been already added
const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
if (!shoppingCart.includes("Meat")) {
  shoppingCart.unshift("Meat");
}
console.log(shoppingCart);

// 25 - add Sugar at the end of you shopping cart if it has not been already added
if (!shoppingCart.includes("Sugar")) {
  shoppingCart.push("Sugar");
}
console.log(shoppingCart);

// 26 - remove 'Honey' if you are allergic to honey
const allergicTo = "Honey";
if (shoppingCart.includes(allergicTo)) {
  shoppingCart.splice(shoppingCart.indexOf(allergicTo), 1);
}
console.log(shoppingCart);

// 27 - modify Tea to 'Green Tea'
const modifiedItem = "Green Tea";
if (shoppingCart.includes("Tea")) {
  shoppingCart[shoppingCart.indexOf("Tea")] = modifiedItem;
}
console.log(shoppingCart);

console.log(countries);
console.log(webTechs);
