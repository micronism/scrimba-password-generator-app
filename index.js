let password1 = document.getElementById("password-1");
let password2 = document.getElementById("password-2");
let passwordInput = document.querySelectorAll(".password-input");
let inputEl = document.getElementById("input-el");
let outputEl = document.getElementById("output-el");

let charSet = ["A", "a", "B", "b", "C", "c", "D", "d", "E", "e", "F", "f", "G", "g", "H", "h", "I", "i", "J", "j", "K", "k", "L", "l", "M", "m", "N", "n", "O", "o", "P", "p", "Q", "q", "R", "r", "S", "s", "T", "t", "U", "u", "V", "v", "W", "w", "X", "x", "Y", "y", "Z", "z", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

function displayValRange() {
  outputEl.textContent = inputEl.value;
}

function getRandomPassword() {
  let password = "";
  for (let i = 0; i < inputEl.value; i++) {
    let randomIndex = Math.floor(Math.random() * charSet.length); // 95 Zeichen
    password += charSet[randomIndex];
  }
  return password;
}

function generatePasswords() {
  password1.value = getRandomPassword();
  password2.value = getRandomPassword();
}

function copyToClipboard(event) {
  let targetPassword = event.target;
  for (let i = 0; i < passwordInput.length; i++) {
    if (passwordInput[i] === targetPassword) {
      navigator.clipboard.writeText(targetPassword.value);
      alert("Copied the password: " + targetPassword.value);
    }
  }
}
