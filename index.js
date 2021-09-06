const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

 
// const titleCased = () => {
//   return tutorials
// }

// const titleCased = (array) => {
//   const tutorialsIntoWords = array.map(string => string.split(' '));
//   const capitalizedWords = [];
//   for (const element of tutorialsIntoWords) {
//     capitalizedWords.push(element.map (word => word[0].toUpperCase() + word.substring(1)).join(" "));
//   }
//   return capitalizedWords;
// }

const titleCased = () => {
  const tutorialsIntoWords = tutorials.map(string => string.split(' '));
  const capitalizedWords = [];
  for (const element of tutorialsIntoWords) {
    capitalizedWords.push(element.map (word => word[0].toUpperCase() + word.substring(1)).join(" "));
  }
  return capitalizedWords;
}


// Practicing splitting up strings into individual strings for each word
// const singleString = 'This is for practice only.'
// const splitString = singleString.split(' ');

// Practicing .map to upper case everything
// const practice = tutorials.map(string => string.toUpperCase());

//Dividing each line of array into individual word arrays
// const tutorialsIntoWords = tutorials.map(string => string.split(' '));
// const string1 = tutorialsIntoWords[0];
// // //dividing first line into single characters
// // const tutorialsIntoCharacters = tutorialsIntoWords[0].map(string => string.split(''));
// //Capitalizing just first letter of each array
// const arrayCapitalizeFirstLetter = string1.map (first => first[0].toUpperCase() + first.substring(1)).join(" ");

//the below works when entered into console
// for (const element of tutorialsIntoWords) {
//   const capitalizedWords = element.map (word => word[0].toUpperCase() + word.substring(1)).join(" ")
// }

