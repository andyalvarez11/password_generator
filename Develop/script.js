
// passwordCharacters is a global var and usable anywhere in the code
var passwordCharacters=" ";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

// ask user for input about password parameters
    var numberOfCharacters=prompt("How many characters would you like?")
    if(numberOfCharacters >=8 && numberOfCharacters<=128){
        console.log("good length");
    } else {
        alert("Password needs to be between 8 and 128 characters")
        writePassword();
    }
    // ask user if they want special characters
    var includeSpecialCharacters=confirm("Do you want special characters?")
    if(includeSpecialCharacters){
        passwordCharacters+="!@#$%^&*()_?><";
    }
    // ask user if they want upper case characters
    var upperCase=confirm("Do you want to include Uppercase characters?")
    if(upperCase){
        passwordCharacters+="QWERTYUIOPASDFGHJKLZXCVBNM";
    }
    // ask user if they want lower case characters
    var lowerCase=confirm("Do you want to include Lowercase characters?")
    if(lowerCase){
        passwordCharacters+="qwertyuiopasdfghjklzxcvbnm"
    }
    // generate password with user's requests

    var finalPassword="";
    for(var i=0;i<numberOfCharacters;i++){
        // create a random character x number of times
        var randomChar=passwordCharacters[Math.floor(Math.random()*passwordCharacters.length)]
        15, 45, 23, 8
        passwordCharacters[15]
        example = '!@#$%^&*()_+ABCDEFGHYDKLJAGPOEakldsdklndskojto'
        finalPassword+=randomChar;
    }
    
    // last step is to display the finalPassword on the page for the user to see
    var passwordText = document.querySelector("#password");
    passwordText.value = finalPassword;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);