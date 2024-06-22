const passwordBox = document.getElementById("password");
const lenght = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqurstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+";
const generateBtn = document.getElementById("generate");

const allChar = upperCase + lowerCase + numbers + symbols;

function createPassword() {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    while (password.length < lenght) {
        password += allChar[Math.floor(Math.random() * allChar.length)];
    }

    passwordBox.value = password;
    
}

function copyPassword() {
    passwordBox.select();
    document.execCommand("copy");
}