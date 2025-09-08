// Get form elements
const signupForm = document.getElementById("signup-form");
const loginForm = document.getElementById("login-form");

const signupDiv = document.getElementById("signup");
const loginDiv = document.getElementById("login");

// Initially show signup, hide login
loginDiv.style.display = "none";

// Toggle functions
function showLogin() {
    signupDiv.style.display = "none";
    loginDiv.style.display = "block";
}

function showSignup() {
    loginDiv.style.display = "none";
    signupDiv.style.display = "block";
}

// Handle signup
signupForm.addEventListener("submit", function (e) {
e.preventDefault();

const username = document.getElementById("signup-username").value.trim();
const email = document.getElementById("signup-email").value.trim();
const password = document.getElementById("signup-password").value.trim();
const confirmPassword = document.getElementById("signup-confirm").value.trim();

if (!username || !email || !password || !confirmPassword) {
    alert("Please fill in all fields.");
    return;
}

if (password !== confirmPassword) {
    alert("Passwords do not match.");
    return;
}

let users = JSON.parse(localStorage.getItem("users")) || {};

if (users[email]) {
    alert("Email already registered. Please login.");
    return;
}

users[email] = { username, password };
localStorage.setItem("users", JSON.stringify(users));

alert("Signup successful! You can now log in.");
signupForm.reset();
showLogin();
});

// Handle login
loginForm.addEventListener("submit", function (e) {
e.preventDefault();

const email = document.getElementById("login-email").value.trim();
const password = document.getElementById("login-password").value.trim();

if (!email || !password) {
    alert("Please enter email and password.");
    return;
}

let users = JSON.parse(localStorage.getItem("users")) || {};

if (users[email] && users[email].password === password) {
    alert(`Welcome back, ${users[email].username}! 🎉`);
    loginForm.reset();
    // Redirect or load dashboard here if you want
    window.location.href = "src/dashboard.html";
    } else {
        alert("Invalid email or password.");
    }
});