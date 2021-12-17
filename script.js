// Assignment Code
var generateBtn = document.querySelector("#generate");

var digitOptions = ['0','1','2', '3', '4','5', '6', '7', '8', '9']
var lowercaseOptions = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercaseOptions = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialCharacters = [' ' ,'!', '"', '#', '$', '%', '&', "'", '(',  ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[",']', '^', '_', "`", "{", "|", "}", "~", '"'];
var pwlong = 0;
var pwCharacters = [];
var pwChecker = 0


var numberPrompt = function() {
  var firstPrompt =window.prompt("How many digits would you like?","8-128");
  var numbercheck =parseInt(firstPrompt);
  console.log(typeof numbercheck);
  console.log(numbercheck);
  console.log(firstPrompt);
  console.log(typeof firstPrompt);
  if (firstPrompt === "") {
    window.alert("Please enter a number 8-128");
    numberPrompt(); 
  } else if (isNaN(numbercheck)) {
    window.alert("Please enter a number 8-128");
    numberPrompt(); 
  }
  else if (numbercheck < 8) {
    window.alert("Please enter a number 8-128");
    numberPrompt();
  } else if (numbercheck > 128) {
    window.alert("Please enter a number 8-128");
    numberPrompt();
  }
    window.alert("You entered " + numbercheck);
    pwlong = numbercheck;    // <<<<<<<<<<< This line is causing the password to not load about every 20th time and I can't for the life of me find out why.
   
}
var lowerPrompt = function() {
  var characterPrompt1 = window.confirm("Would you like to use lowercase letters? (OK for 'yes', Cancel for  'no'.)");
  if (characterPrompt1) {
    pwChecker= pwCharacters.push(...lowercaseOptions);
    window.alert("You chose yes");
  } else {
    window.alert("You chose no");
  }
} 
var upperPrompt = function() {
  var characterPrompt2 = window.confirm("Would you like to use uppercase letters? (OK for 'yes', Cancel for  'no'.)");
  if (characterPrompt2) {
    pwChecker= pwCharacters.push(...uppercaseOptions);
    window.alert("You chose yes");
  } else {
    window.alert("You chose no");

  }
}


function specialPrompt() {
  var characterPrompt3 = window.confirm("Would you like to use special characters? (OK for 'yes', Cancel for  'no'.)");
  if (characterPrompt3) {
    pwChecker=pwCharacters.push(...specialCharacters);
    window.alert("You chose yes");
  } else {
    window.alert("You chose no");
  }
}

var digitPrompt= function() {
  var characterPrompt4= window.confirm("Would you like to use numbers? (OK for 'yes', Cancel for  'no'.)");
  if (characterPrompt4) {
      pwChecker=pwCharacters.push(...digitOptions);
      window.alert("You chose yes");
  } else {
    window.alert("You chose no");
  }
}

function generatePassword() {
  // var password = generatePassword();
  
  var testw = [];
  for (var i=0; i<pwlong; i++) {
    testw.push(pwCharacters[(Math.floor(Math.random()*pwChecker))]);
  }
  console.log(testw);
  var pw = testw.join('');
  console.log(pw);

  var passwordText = document.querySelector("#password");
  passwordText.value = pw;
  if (pwCharacters = []) {
    window.alert("Please enable an alphabet");
    writePassword();
  }
  
}

function writePassword() {
  numberPrompt();
  lowerPrompt();
  upperPrompt();
  specialPrompt();
  digitPrompt();
  generatePassword();
  console.log(pwCharacters);
  pwlong = 0;
  pwCharacters = [];
  pwChecker = 0
}
// Write password to the #password input
// function writePassword() {






// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// console.log(pwlong);
// console.log(pwCharacters);
// numberPrompt();
// console.log(pwlong);
// console.log(pwCharacters);
// lowerPrompt();
// console.log(pwCharacters);
// upperPrompt();
// console.log(pwCharacters);
// specialPrompt();
// console.log(pwCharacters);
// digitPrompt();
// console.log(pwCharacters);
// generatePassword();
// for (var i = 0; i < pwlong; i++) { 
//   console.log(pwCharacters[(Math.floor(Math.random()*pwChecker))]);
// }

// var testw = [];
// for (var i=0; i<pwlong; i++) {
// testw.push(pwCharacters[(Math.floor(Math.random()*pwChecker))]);
// }
// console.log(testw);
// var finalpw = testw.join('');
// console.log(finalpw);