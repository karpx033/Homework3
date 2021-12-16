// Assignment Code
var generateBtn = document.querySelector("#generate");
var NumberPrompt = window.prompt("How many digits would you like?","8-128");




var lowercaseOptions = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var uppercaseOptions = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var specialCharacters = [' ' ,'!', '"', '#', '$', '%', '&', "'", '(',  ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[",']', '^', '_', "`", "{", "|", "}", "~", '"']
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



generateBtn.textContent=passwordText


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
