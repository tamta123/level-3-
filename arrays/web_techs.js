const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

//   29 - In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'.
//      If it does not exist add Sass to the array and print the array.

const techToCheck = "Sass";

if (webTechs.includes(techToCheck)) {
  console.log(`${techToCheck} is a CSS preprocessor.`);
} else {
  webTechs.push(techToCheck);
  console.log(webTechs);
}
export default {
  webTechs,
};
