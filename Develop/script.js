// Assignment code here
// 8-128 characters in length; lowercase, uppercase, numeric, speacial character prompt options to include at least 1 of each prompted character
let speacialChar = [
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
let lowercaseChar = [
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
let uppercaseChar = [
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

let password = [];

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

  //make'a de passwerd
  for (let i = 0; i < parseInt(passLength); i++) {}
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
