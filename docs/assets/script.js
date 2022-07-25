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
  while(!acceptanceCriteria.lowerCase && !acceptanceCriteria.upperCase && !acceptanceCriteria.numericValue && !acceptanceCriteria.specialCharacter){
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

function generatePassword() {
  //JBE: Get user critieria
  getCriteria();
  console.log(acceptanceCriteria)
  //JBE: Generate, and assign Password

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  //JBE: Selects the html id, and displays the password in div.
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
