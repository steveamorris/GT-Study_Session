  
console.log("This is my script.js");

// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
    console.log("I'm going to generate a password.");
    var pwdLength = prompt("Enter a number between 8 and 128");
    console.log(pwdLength);

    var charTypes = [];

    var lowCase = confirm("Lowercase?");
        if(lowCase === true) {
            charTypes.push(0);
        }
    console.log(lowCase);

    var upCase = confirm("Uppercase?");
    if(upCase === true) {
        charTypes.push(1);
    }
    console.log(upCase);

    var nums = confirm("Numbers");
    if(nums === true) {
        charTypes.push(2);
    }
    console.log(nums);

    var specChars = confirm("Special Characters?");
    if(specChars === true) {
        charTypes.push(3);
    }
    console.log(specChars);

    console.log(charTypes);

    var pwd = '';

    for (var i = 0; i < pwdLength; ++i) {
        if(pwdLength < 8 || pwdLength > 128) {
            alert("Pick a number between 8 and 128.");
            break;
        }
        if(charTypes.length < 1) {
            alert("You didn't pick and Character Types.");
            break;
        }


        var randomCharType = charTypes[Math.floor(Math.random() * charTypes.length)];
        console.log(randomCharType);
    
        if(randomCharType === 0) {
            console.log("Random lowercase");
            var randomCharCode = Math.floor(Math.random() * 25) + 97;
            console.log(randomCharCode);
            var asciiCode = String.fromCharCode(randomCharCode);
            console.log(asciiCode);
            pwd = pwd.concat(asciiCode);

        }
        else if (randomCharType === 1) {
            console.log("Random Uppercase");
            var randomCharCode = Math.floor(Math.random() * 25) + 65;
            console.log(randomCharCode);
            var asciiCode = String.fromCharCode(randomCharCode);
            console.log(asciiCode);
            pwd = pwd.concat(asciiCode);
        }
        else if (randomCharType === 2) {
            console.log("Random Number");
            var randomNumber = Math.floor(Math.random() * 9) + 1;
            console.log(randomNumber);
            pwd = pwd.concat(randomNumber);
        }
        else if (randomCharType === 3) {
            console.log("Random Spec Char");
            var randomCharCode = Math.floor(Math.random() * 14) + 33;
            console.log(randomCharCode);
            var asciiCode = String.fromCharCode(randomCharCode);
            console.log(asciiCode);
            pwd = pwd.concat(asciiCode);
        }
        else {
            console.log("Something bad happened")
        }
    }
    console.log(pwd);
    return pwd;
}


// Write password to the #password input
function writePassword() {
    console.log("You clicked my button!");
  var password = generatePassword();
  console.log("Here is your PWD " + password);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);