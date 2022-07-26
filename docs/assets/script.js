// Assignment Code
var generateBtn = document.querySelector("#generate");

//Store prompt answers
var acceptanceCriteria = {
  lenght: null, //JBE: Must be between 8 to 128 characters
  //JBE: At least one of the following options must be confirmed.
  lowerCase: false,
  upperCase: false,
  numericValue: false,
  specialCharacter: false
}

//valid characters
var lower = 'abcdefghijklmnopqrstuvwxyz';
var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numeric = '0123456789';
var special = '!@#$%^&*()';

// ##############################################################################################
// Functions that asks user the lengh and character that may contain the password.
// ##############################################################################################
function getCriteria() {
  //JBE:Local variable to contol the while loop.
  let responseCorrect = true;
  // ---------------------------------------------------------------------------------------------
  //Get password lenght from user.
  // ---------------------------------------------------------------------------------------------
  while(responseCorrect){
     //JBE: Get password lenght must be between 8 and 128
    acceptanceCriteria.lenght = prompt("Please enter password length (8-128 Characters)", "8");
    acceptanceCriteria.lenght = Number(acceptanceCriteria.lenght);
    //JBE: Convert input to a number, and validate it is a whole number.
    if (isNaN(acceptanceCriteria.lenght)){
      alert("Invalid! Cann't be a string value.");
    }
    //JBE: Confirm that the value entered is a whole number
    else if (acceptanceCriteria.lenght % 1 > 0){
      alert("Invalid! Needs to be a whole numeric value");
    }
    //JBE: Confirm that the value will be in between the range.
    else if (acceptanceCriteria.lenght < 8 || acceptanceCriteria.lenght > 128){
      alert("Invalid! Lenght must be bwteen the range. (8 to 128 Characters)");
    }
    //JBE: Valid input is provided
    else{
      responseCorrect = false;
    }
  } //JBE: end of lenght while
  
  // ---------------------------------------------------------------------------------------------
  //Get password criteria from user.
  // ---------------------------------------------------------------------------------------------
  while(   !acceptanceCriteria.lowerCase 
        && !acceptanceCriteria.upperCase 
        && !acceptanceCriteria.numericValue 
        && !acceptanceCriteria.specialCharacter){
    alert("Important! Select at least one option. (Ok = YES, and Cancel = NO)");
    //NOTE: prompt buttons cannot be edited, another option is to use a hidden html div.
    //JBE: Validate if user wants lower case caracter in their password.
    if (confirm("Password with: Lower Case?") == true) {
      acceptanceCriteria.lowerCase = true;
    }
    else{
      acceptanceCriteria.lowerCase = false;
    }

    //JBE: Validate if user wants upper case caracter in their password.
    if (confirm("Password with: Upper Case?") == true) {
      acceptanceCriteria.upperCase = true;
    }
    else{
      acceptanceCriteria.upperCase = false;
    }

    //JBE: Validate if user wants numeric  caracter in their password.
    if (confirm("Password with: Numeric Values?") == true) {
      acceptanceCriteria.numericValue = true;
    }
    else{
      acceptanceCriteria.numericValue = false;
    }

    //JBE: Validate if user wants special  caracter in their password.
    if (confirm("Password with: Special Characters?") == true) {
      acceptanceCriteria.specialCharacter = true;
    }
    else{
      acceptanceCriteria.specialCharacter = false;
    }
    
  } //JBE: end of criteria loop
}

// ##############################################################################################
// Functions that asks for user criteria, and generate the password acordingly.
// ##############################################################################################
function generatePassword() {
  let char = null;
  let validChars = '';
  var passwordAux = '';
  var validPass = {
    //JBE: At least one of the following options must be confirmed.
    lowerCase: false,
    upperCase: false,
    numericValue: false,
    specialCharacter: false
  }
  acceptanceCriteria = {
    lenght: null, //JBE: Must be between 8 to 128 characters
    //JBE: At least one of the following options must be confirmed.
    lowerCase: false,
    upperCase: false,
    numericValue: false,
    specialCharacter: false
  }
  //JBE: Get user critieria
  getCriteria();
  // ---------------------------------------------------------------------------------------------
  //JBE: Generate array with criteria from user
  // ---------------------------------------------------------------------------------------------
  if (acceptanceCriteria.lowerCase){
    validChars = validChars.concat(lower)
  }
  if(acceptanceCriteria.upperCase){
    validChars = validChars.concat(upper)
  }
  if(acceptanceCriteria.numericValue){
    validChars = validChars.concat(numeric)
  }
  if(acceptanceCriteria.specialCharacter){
    validChars = validChars.concat(special)
  }
  // ---------------------------------------------------------------------------------------------
  //JBE: Generate, and assign Password, and re attempt if password does not fulfils user input.
  // ---------------------------------------------------------------------------------------------
  while(!validPass.lowerCase || !validPass.upperCase || !validPass.numericValue || !validPass.specialCharacter){
    passwordAux = ''
    validPass = {
      //JBE: all options must be confirmed.
      lowerCase: true,
      upperCase: true,
      numericValue: true,
      specialCharacter: true
    }

    // JBE:select random characters to form the string
    for (var i = 0; i < acceptanceCriteria.lenght; i++){
      let value1 = Math.floor(Math.random() * validChars.length);
      char = validChars.charAt(value1);
      passwordAux = passwordAux.concat(char)
    } //JBE: end of for loop

    //Validate that the criteria is met
    if (acceptanceCriteria.lowerCase){
      validPass.lowerCase = /[a-z]/.test(passwordAux);
    }
    if(acceptanceCriteria.upperCase){
      validPass.upperCase = /[A-Z]/.test(passwordAux);
    }

    if(acceptanceCriteria.numericValue){
      validPass.numericValue = /[0-9]/.test(passwordAux);
    }

    if(acceptanceCriteria.specialCharacter){
      validPass.specialCharacter = /[!@#$%^&*()]/.test(passwordAux);
    }

    // console.log(validPass);
    // console.log('pass: ',passwordAux);
  }

}
// ##############################################################################################
// Write password to the #password input
// ##############################################################################################
function writePassword() {
  var password = generatePassword();
  //JBE: Selects the html id, and displays the password in div.
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// ##############################################################################################
// Add event listener to generate button
// ##############################################################################################
generateBtn.addEventListener("click", writePassword);
