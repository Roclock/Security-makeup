// Assignment Code
// added variables to start an array of true statements.
// Moved Variables outside of function and set them into an array state
var characterLength = 8;
var choiceArray = [];
var confirmNumerical = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var confirmUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var confirmLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "i", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var confirmSpecial = ["!", "@", '#', '$', '%', '^', '&', '*', '(', ')', '<', '>', '?', '|'];
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log("Hey! I work!") //Testing to make sure this works
  var safety = "";
  for(var i = 0; i < characterLength; i++) { /* Making a basic for loop here, will return value as much as possible. */
    var Letter = Math.floor(Math.random() * choiceArray.length); /* Math.floor will generate an interger at its numeric equal, Math.random will provide a boolean number, whilst multiplying it by my choice array will give it a random number */
    safety = safety + choiceArray[Letter]; /* will generate a password based on the for loop above.*/
  }
  return safety /* Will return password onto the page */
} // I like to forget to close function causing weird syntax errors. Jolley pointed this out after I formatted my code to be more nice looking.
// 1. prompt user for password criteria
// a. Password length 8 < 128
// b. Lowercase, Uppercase, Number, Special characters
// 2. Validate the input
// 3. Display password to page


// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");
  var correctInputs = getPrompts(); //true or false
  if (correctInputs) {
    var password = generatePassword();

    passwordText.value = password;
  } else {
    passwordTest.value = "";
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function getPrompts() { // Weird Syntax error, {} brackets are highlighting eachother, unsure whats causing the error. Reached out to Jolley for assist. weird Syntax error was caused by open function above on line 20.
  choiceArray = []; //this will make choice array empty at all times

  characterLength = parseInt(prompt("How many characters do you require? (8-128)")); //isNan returns a boolean value for this to work.

  if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("Character length has to be between 8-128! Please input a number");
    return false; //I want this to be true, if false then will run "alert" function
  }
  if (confirm("Would you like Lowercase characters in your password?")) {
    choiceArray = choiceArray.concat(confirmLower); //Looks at a choiceArray function, concat will combine with other variables marked true.
  }
  if (confirm("Would you like Uppercase characters in your password?")) {
    choiceArray = choiceArray.concat(confirmUpper);
  }
  if (confirm("Would you like Special characters in your password?")) {
    choiceArray = choiceArray.concat(confirmSpecial);
  }
  if (confirm("Would you like Numbers in your password?")) {
    choiceArray = choiceArray.concat(confirmNumerical);
  }
  return true;
}