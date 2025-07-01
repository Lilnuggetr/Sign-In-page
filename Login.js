const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");

signupBtn.onclick = () => {
  loginForm.style.marginLeft = "-50%";
  loginText.style.marginLeft = "-50%";
};
loginBtn.onclick = () => {
  loginForm.style.marginLeft = "0%";
  loginText.style.marginLeft = "0%";
};
signupLink.onclick = () => {
  signupBtn.click();
  return false;
};

const userDB = {};

const signupForm = document.querySelector("form.signup");
signupForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = signupForm.querySelector('input[type="text"]').value.trim();
  const password = signupForm.querySelectorAll('input[type="password"]')[0].value.trim();
  const confirmPassword = signupForm.querySelectorAll('input[type="password"]')[1].value.trim();

  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  if (userDB[email]) {
    alert("User already exists!");
  } else {
    userDB[email] = { email, password };
    alert("Signup successful! You can now login.");
    document.getElementById("login").checked = true;
  }

  signupForm.reset();
});

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = loginForm.querySelector('input[type="text"]').value.trim();
  const password = loginForm.querySelector('input[type="password"]').value.trim();

  const user = userDB[email];

  if (!user) {
    alert("User not found!");
  } else if (user.password !== password) {
    alert("Incorrect password!");
  } else {
    alert(`Welcome back, ${email}!`);
  }

  loginForm.reset();
});

document.querySelectorAll(".toggle-password").forEach(function (eyeIcon) {
  eyeIcon.addEventListener("click", function () {
    const input = document.querySelector(this.getAttribute("toggle"));
    const isPassword = input.getAttribute("type") === "password";
    input.setAttribute("type", isPassword ? "text" : "password");
    this.textContent = isPassword ? "👁️" : "🙈";
  });
});
