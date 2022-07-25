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

    //JBE: Validate if user wants upper case caracter in their password.
    if (confirm("Password with: Upper Case?") == true) {
      acceptanceCriteria.upperCase = true;
    }

    //JBE: Validate if user wants numeric  caracter in their password.
    if (confirm("Password with: Numeric Values?") == true) {
      acceptanceCriteria.numericValue = true;
    }

    //JBE: Validate if user wants special  caracter in their password.
    if (confirm("Password with: Special Characters?") == true) {
      acceptanceCriteria.specialCharacter = true;
    }
  } //JBE: end of criteria loop
}

// ##############################################################################################
// Functions that asks for user criteria, and generate the password acordingly.
// ##############################################################################################
function generatePassword() {
  let value1 = null; //JBE: Select a character set
  let value2 = null; //JBE: Select a charaacter from the set selected.
  let char = null;
  var passwordAux = '';
  //JBE: Get user critieria
  getCriteria();
  //JBE: Generate, and assign Password
  for (var i = 0; i < acceptanceCriteria.lenght; i++){
    let value1 = Math.floor(Math.random() * 4);
    console.log('befor switch', value1)
    switch (value1) {
      case 0:
        console.log('0 switch', value1)
        if(acceptanceCriteria.lowerCase){
          value2 = Math.floor(Math.random() * lower.length);
          //JBE select substring string.substr(start, length)
          char = lower.substr(value2, 1);
          passwordAux.concat(passwordAux, char)
          passwordAux.concat
        }
        break;
      case 1:
        console.log('1 switch', value1)
        if(acceptanceCriteria.upperCase){
          value2 = Math.floor(Math.random() * upper.length);
          //JBE select substring string.substr(start, length)
          char = upper.substr(value2, 1);
          passwordAux.concat(passwordAux, char)
        }
        break;
      case 2:
        console.log('2 switch', value1)
        if(acceptanceCriteria.numericValue){
          value2 = Math.floor(Math.random() * numeric.length);
          //JBE select substring string.substr(start, length)
          char = numeric.substr(value2, 1);
          passwordAux.concat(passwordAux, char)
        }
        break;
      case 3:
        console.log('3 switch', value1)
        if(acceptanceCriteria.specialCharacter){
          value2 = Math.floor(Math.random() * special.length);
          //JBE select substring string.substr(start, length)
          char = special.substr(value2, 1);
          passwordAux.concat(passwordAux, char)
        }
        break;
    }
  } //JBE: end of for loop
  console.log(passwordAux);
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

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
