
const loginModal = document.getElementById("loginModal");
const signupModal = document.getElementById("signupModal");
const loginBtn = document.getElementById("loginBtn");
const signupBtn = document.getElementById("signupBtn");
const closeLogin = document.getElementById("closeLogin");
const closeSignup = document.getElementById("closeSignup");

const todoSection = document.getElementById("todo");
const homeSection = document.getElementById("home");

const text = "Welcome to My To-Do List App";
let index = 0;
const typingElement = document.getElementById("typing");

function type() {
  if(index < text.length){
    typingElement.textContent += text[index];
    index++;
    setTimeout(type, 100); // speed of typing
  }
}

window.onload = type;


// Open modals
loginBtn.addEventListener("click", () => loginModal.style.display = "flex");
signupBtn.addEventListener("click", () => signupModal.style.display = "flex");

// Close modals
closeLogin.onclick = () => loginModal.style.display = "none";
closeSignup.onclick = () => signupModal.style.display = "none";

// Clicking outside modal closes it
window.onclick = (e) => {
    if (e.target === loginModal) loginModal.style.display = "none";
    if (e.target === signupModal) signupModal.style.display = "none";
}

// After login/signup
document.getElementById("loginSubmit").addEventListener("click", () => {
    loginModal.style.display = "none";
    homeSection.style.display = "none"; // hide landing page
    todoSection.style.display = "block"; // show To-Do
});

document.getElementById("signupSubmit").addEventListener("click", () => {
    signupModal.style.display = "none";
    homeSection.style.display = "none"; // hide landing page
    todoSection.style.display = "block"; // show To-Do
});



const inputBox = document.getElementById('inputBox');
const listcont = document.getElementById('listcont');

function addTask() {
    const task = inputBox.value.trim();
    if (task === "") {
        alert('Please enter a task');
        return;
    }

    // Create li and set its text
    const li = document.createElement('li');
    li.textContent = task;

    // Create delete button
    const span = document.createElement('span');
    span.textContent = "×"; // cross symbol
    span.onclick = () => li.remove();

    // Append span to li
    li.appendChild(span);

    // Toggle checked on li click
    li.addEventListener("click", (e) => {
        if (e.target.tagName !== "SPAN") { // ignore delete click
            li.classList.toggle("checked");
        }
    });

    // Append li to the ul
    listcont.appendChild(li);

    // Clear input box
    inputBox.value = "";
}
