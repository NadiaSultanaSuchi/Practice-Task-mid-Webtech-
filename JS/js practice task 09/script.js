
let mode = "light";
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {
    if (mode === "light") {
        document.body.classList.add("dark-mode");
        themeBtn.innerText = "Switch to Light Mode";
        mode = "dark";
    } else {
        document.body.classList.remove("dark-mode");
        themeBtn.innerText = "Switch to Dark Mode";
        mode = "light";
    }
});

function updateGreeting() {
    let now = new Date();
    let hour = now.getHours();
    let greetText = "";

    if (hour < 12) {
        greetText = "Good Morning!";
    } else if (hour < 18) {
        greetText = "Good Afternoon!";
    } else {
        greetText = "Good Evening!";
    }

    document.getElementById("greeting").innerHTML = greetText;
}

updateGreeting(); 

function showSection(sectionID) {
    let sections = document.querySelectorAll(".section");
    sections.forEach(sec => sec.style.display = "none");
    document.getElementById(sectionID).style.display = "block";
}


function submitForm() {
    const nameTF = document.getElementById("name");
    const emailTF = document.getElementById("email");
    const messageTF = document.getElementById("message");

    const nameERR = document.getElementById("nameERR");
    const emailERR = document.getElementById("emailERR");
    const msgERR = document.getElementById("msgERR");
    const successMsg = document.getElementById("successMsg");

    nameERR.innerHTML = "";
    emailERR.innerHTML = "";
    msgERR.innerHTML = "";
    successMsg.innerHTML = "";

    let isErr = false;

    if (nameTF.value.trim() === "") {
        nameERR.innerHTML = "Name cannot be empty!";
        isErr = true;
    }

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (emailTF.value.trim() === "") {
        emailERR.innerHTML = "Email cannot be empty!";
        isErr = true;
    } else if (!emailPattern.test(emailTF.value)) {
        emailERR.innerHTML = "Invalid email format!";
        isErr = true;
    }

    if (messageTF.value.trim().length < 100) {
        msgERR.innerHTML = "Message must be at least 10 characters!";
        isErr = true;
    }

    if (!isErr) {
        successMsg.innerHTML = "Message Sent Successfully!";
        nameTF.value = "";
        emailTF.value = "";
        messageTF.value = "";
    }

    return false; 
}
