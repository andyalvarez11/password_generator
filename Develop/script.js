// Step1: when generate password button is first clicked prompt user to select which criteria to include in password:
  // 1st prompt: Input how many characters user would like password to contain: < 8 > 128 characters
  // 2nd prompt: click OK to confirm including special characters
  // 3rd prompt: click OK to confirm inclduing numeric characters
  // 4th prompt: click OK to confrim including lowercase characters
  // 5th prompt: click OK to confirm including uppercase characters
// Step2: program generates random password dispalyed in box with given criteria


// Assignment code here


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

function clickHandler(event) {
  console.log('Button Clicked');
}

const btn = document.querySelector('.btn');
btn.addEventListener('click', clickHandler);