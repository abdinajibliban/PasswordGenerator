// Assignment Code
var generateBtn = document.querySelector("#generate");

// defining our characters (Uppercase, lowercase, numbers and symbols)
const upperChar   = charCodeArray(65, 90);
const lowerChar   = charCodeArray(97, 122);
const numberChar  = charCodeArray(48, 57);
const symbolChar  = charCodeArray(33, 47).concat(charCodeArray(58,64)).concat(
  charCodeArray(91,96)
  ).concat(
  charCodeArray(123,126)
  )
// Write password to the #password input
function writePassword() {
  //defining parameters for genPass() and our question prompt
  const charAmount = parseInt(prompt("How many letters do you want for your password. Choose between 8 and 128."))
  const upperCase = confirm("Do want to include uppercase letters in your password?")
  const incNum = confirm("Do want to include numbers in your password?")
  const incSymbol = confirm("Do want to include symbols letters in your password?");
  //this is assigning value to our password and links it to the Password text box.
  var newPass = genPass(charAmount, upperCase, incNum, incSymbol)
  var passwordText = document.querySelector("#password");
  
 
  // my if statement in regards to user input validation
  if (charAmount < 8 || charAmount > 128) {
    alert('The password must be between 8 and 128 characters!');
    return;
    }else {
      //this code is what is displayed in the password TextBox
      passwordText.value = newPass;
    }
}

// this is our generate Password function, its parameters were predifined earlier
function genPass(charAmount, upperCase, incNum, incSymbol){
  // this defines our default character group. in this code, the password will always include lowercase.
  let carCodes = lowerChar
    if (upperCase) carCodes = carCodes.concat(upperChar)
    if (incNum) carCodes = carCodes.concat(numberChar)
    if (incSymbol) carCodes = carCodes.concat(symbolChar)

    const passChar = []
    for (let i=0; i < charAmount ; i++){
        const character = carCodes[Math.floor(Math.random() * carCodes.length)]
        passChar.push(String.fromCharCode(character))
    }
    return passChar.join('')
}
//this function allows us to use character codes in reference to uppercase, lowercase
//numbers and symbols. Each character is represented by a singluar number. Each group of characters
//are represented by their start number (low) and their end number (high)
function charCodeArray(low , high){
    const array = []
    for(let i = low; i <= high; i++){
        array.push(i)
    }
    return array
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);