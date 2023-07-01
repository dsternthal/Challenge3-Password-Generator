// Assignment Code
var generateBtn = document.querySelector("#generate");

//create variable to save special characters
//create variable to save numbers
//create variable for lowercase all letters from A through Z
//create variable for uppercase all letters from A through Z

var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialCharacter = "!@#$%^&*";
var number = "0123456789"

function generatePassword() {
  var savedPassword = ""
  var passwordLength = window.prompt("choose a password length between 8 and 128 characters")

  if (passwordLength >= 8 && passwordLength <= 128) {
    var isSpecialCharacter = window.confirm("Do you want to include special character in your password");
    var isNumber = window.confirm("Do you want to include numbers in your password");
    var isLowerCase = window.confirm("Do you want to include lowercase characters in your password");
    var isUpperCase = window.confirm("Do you want to include uppercase character in your password");

    for (let i = 0; i < passwordLength; i++) {
 
      if (isSpecialCharacter === true && savedPassword.length<passwordLength) {
        var randomIndex = Math.floor(Math.random() * specialCharacter.length)
        savedPassword = savedPassword + specialCharacter[randomIndex]
      }
      if (isNumber === true && savedPassword.length<passwordLength) {
        var randomIndex = Math.floor(Math.random() * number.length)
        savedPassword = savedPassword + number[randomIndex]
      }

      if (isLowerCase === true && savedPassword.length<passwordLength) {
        var randomIndex = Math.floor(Math.random() * lowerCase.length)
        savedPassword = savedPassword + lowerCase[randomIndex]
      }

      if (isUpperCase === true && savedPassword.length<passwordLength) {
        var randomIndex = Math.floor(Math.random() * upperCase.length)
        savedPassword = savedPassword + upperCase[randomIndex]
      }

      if (isSpecialCharacter === false && isNumber === false && isLowerCase === false && isUpperCase === false) {
        window.alert("You must pick one character type")
        return ""
      }
    }

  } else {
    window.alert("Sorry, you are outside the password range")
  }

  return savedPassword

  /*
  GIVEN I need a new, secure password
  WHEN I click the button to generate a password
  THEN I am presented with a series of prompts for password criteria
  WHEN prompted for password criteria
  THEN I select which criteria to include in the password
  WHEN prompted for the length of the password
  THEN I choose a length of at least 8 characters and no more than 128 characters
  WHEN asked for character types to include in the password
  THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
  WHEN I answer each prompt
  THEN my input should be validated and at least one character type should be selected
  WHEN all prompts are answered
  THEN a password is generated that matches the selected criteria
  WHEN the password is generated
  THEN the password is either displayed in an alert or written to the page
  */

  //first prompt (window.prompt - user input) - ask user for the size of password between 8 and 128.  if it the size is outside of 8 and 128, you alter use that says "Invalid"
  //second prompt: (window.confirm - boolean - true or false) - confirm special characters
  //3rd prompt: (window.confirm - boolean - true or false) - confirm numbers
  //4th prompt : (window.confirm - boolean - true or false) - confirm lowercase
  //5th prompt : (window.confirm - boolean - true or false) - confirm uppercase 


  // var userLength = window.prompt("Please provide the length of the your password");
  // var isLowerCase = window.confirm("Include Lowercase");
  // window.alert("Invalid");
  // console.log(userLength);
  // console.log(isLowerCase);

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword(); //return the final password
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
