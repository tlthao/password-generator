// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
const pwReq = {
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  numbers: "0123456789",
  specialChar: "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~",
  password: "",
}
function generatePassword() {
  var pwChar = "";

  var length = prompt("How long would you like your password? (Please enter a number value - must be a minimum of 8 characters and maximum 128 characters.)");

  var upperCase = confirm("Would you like to include uppercase letters?");
  if (upperCase) {
    pwChar += pwReq.upperCase;
  }

  var lowerCase = confirm("Would you like to include lowercase letters?");
  if (lowerCase) {
    pwChar += pwReq.lowerCase;
  }

  var numbers = confirm("Would you like to include numbers?");
  if (numbers) {
    pwChar += pwReq.numbers;
  }

  var specialChar = confirm("Would you like to include special characters?");
  if (specialChar) {
    pwChar += pwReq.specialChar;
  }
  
  var password = "";
  for (var i = 0; i < length; i++) {
    password += pwChar[Math.floor(Math.random() * pwChar.length)]
    
  }
  return password;
}


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
