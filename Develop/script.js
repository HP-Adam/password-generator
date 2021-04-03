//characters to make up password
const speacialChar = [
  "!",
  "'",
  '"',
  "#",
  "$",
  "%",
  "&",
  "(",
  ")",
  "*",
  "+",
  "-",
  ",",
  ".",
  "/",
  ":",
  ";",
  "<",
  ">",
  "=",
  "?",
  "@",
  "{",
  "}",
  "[",
  "]",
  "^",
  "_",
  "`",
  "~",
  "|",
  "\\",
];
const lowercaseChar = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const uppercaseChar = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const numChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

let passwordArr = [];

const generatePassword = () => {
  //choose length of password
  let passLength = window.prompt(
    "Choose the length of your password. It must be betweeen 8 and 128 characters long."
  );
  //checks chosen length is between 8 and 128 and !NaN
  if (
    parseInt(passLength) < 8 ||
    parseInt(passLength) > 128 ||
    isNaN(parseInt(passLength))
  ) {
    window.alert("Ensure specified length is between 8 and 128.");
    generatePassword();
  }

  //option prompts
  let speacialPrompt = window.confirm("Do you require speacial characters?");
  let lowerPrompt = window.confirm("Do you require lowercase characters?");
  let upperPrompt = window.confirm("Do you require uppercase characters?");
  let numPrompt = window.confirm("Do you require numbers in the password?");
  let chosenArr = [];
  if (speacialPrompt) {
    chosenArr = chosenArr.concat(speacialChar);
  }
  if (lowerPrompt) {
    chosenArr = chosenArr.concat(lowercaseChar);
  }
  if (upperPrompt) {
    chosenArr = chosenArr.concat(uppercaseChar);
  }
  if (numPrompt) {
    chosenArr = chosenArr.concat(numChar);
  }
  if (!speacialPrompt && !lowerPrompt && !upperPrompt && !numPrompt) {
    window.alert(
      "At least one character type must be used. Password will default to all lowercase characters."
    );
    chosenArr = chosenArr.concat(lowercaseChar);
  }

  //make'a de passwerd
  for (let i = 0; i < parseInt(passLength); i++) {
    passwordArr.push(chosenArr[Math.floor(Math.random() * chosenArr.length)]);
  }
  let finalPass = passwordArr.join("");

  //check password has all required characters
  if (
    speacialPrompt &&
    !speacialChar.some((char) => finalPass.includes(char))
  ) {
    finalPass = finalPass.replace(
      finalPass.charAt(Math.floor(Math.random() * finalPass.length)),
      speacialChar[Math.floor(Math.random() * speacialChar.length)]
    );
  }
  if (lowerPrompt && !lowercaseChar.some((char) => finalPass.includes(char))) {
    finalPass = finalPass.replace(
      finalPass.charAt(Math.floor(Math.random() * finalPass.length)),
      lowercaseChar[Math.floor(Math.random() * speacialChar.length)]
    );
  }
  if (upperPrompt && !uppercaseChar.some((char) => finalPass.includes(char))) {
    finalPass = finalPass.replace(
      finalPass.charAt(Math.floor(Math.random() * finalPass.length)),
      uppercaseChar[Math.floor(Math.random() * uppercaseChar.length)]
    );
  }
  if (numPrompt && !numChar.some((char) => finalPass.includes(char))) {
    finalPass = finalPass.replace(
      finalPass.charAt(Math.floor(Math.random() * finalPass.length)),
      numChar[Math.floor(Math.random() * numChar.length)]
    );
  }

  return finalPass;
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  passwordArr = [];
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
