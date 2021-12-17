// Assignment Code
var generateBtn = document.querySelector("#generate");
// var numberPrompt = window.prompt("How many digits would you like?","8-128");
// var characterPrompt1 = window.confirm("Would you like to use lowercase letters?");
// var characterPrompt2 = window.confirm("Would you like to use uppercase letters?");
// var characterPromp3 = window.confirm("Would you like to use special characters?");

var numberPrompt = function() {
  var firstPrompt =window.prompt("How many digits would you like?","8-128");
  if (!firstPrompt) {
  window.alert("Please enter a number 8-128"); 
  numberPrompt();
  } if (firstPrompt < 8) {
    window.alert("Please enter a number 8-128");
    numberPrompt();
  } if (firstPrompt > 128) {
    window.alert("Please enter a number 8-128");
    numberPrompt();
  }
  pwlong = firstPrompt
}
var lowerPrompt = function() {
  var characterPrompt1 = window.confirm("Would you like to use lowercase letters? (OK for 'yes', Cancel for  'no'.)");
  if (characterPrompt1) {
    pwChecker= pwCharacters.push(...lowercaseOptions);
  }
}

var upperPrompt = function() {
  var characterPrompt2 = window.confirm("Would you like to use uppercase letters? (OK for 'yes', Cancel for  'no'.)");
  if (characterPrompt2) {
    pwChecker= pwCharacters.push(...uppercaseOptions);
  }
}


function specialPrompt() {
  var characterPrompt3 = window.confirm("Would you like to use special characters? (OK for 'yes', Cancel for  'no'.)");
  if (characterPrompt3) {
    pwChecker=pwCharacters.push(...specialCharacters);
  }
}

var digitPrompt= function() {
  var characterPrompt4= window.confirm("Would you like to use numbers? (OK for 'yes', Cancel for  'no'.)");
  if (characterPrompt4) {
      pwChecker=pwCharacters.push(...digitOptions);
  }
}

var digitOptions = ['0','1','2', '3', '4','5', '6', '7', '8', '9']
var lowercaseOptions = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercaseOptions = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialCharacters = [' ' ,'!', '"', '#', '$', '%', '&', "'", '(',  ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[",']', '^', '_', "`", "{", "|", "}", "~", '"'];
var pwlong = 0;
var pwCharacters = [];
var pwChecker = 0

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");

  // passwordText.value = password;
  numberPrompt();
 
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
console.log(pwlong);
console.log(pwCharacters);
numberPrompt();
console.log(pwlong);
console.log(pwCharacters);
lowerPrompt();
console.log(pwCharacters);
upperPrompt();
console.log(pwCharacters);
specialPrompt();
console.log(pwCharacters);