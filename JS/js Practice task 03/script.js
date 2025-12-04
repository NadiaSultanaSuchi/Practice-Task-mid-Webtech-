
var isDark = false;

function toggleTheme() {
    var body = document.body;
    var header = document.getElementById("header");
    var content = document.getElementById("content");
    var footer = document.getElementById("footer");
    var btn = document.getElementById("themeBtn");

    body.classList.toggle("dark-mode");

    if (!isDark) {
        header.style.backgroundColor = "wheat";
        content.style.backgroundColor = "#222";
        footer.style.backgroundColor = "#333";
        btn.textContent = "Switch to Light Mode";
        isDark = true;
    } else {
        header.style.backgroundColor = "rgba(184, 133, 185, 1)";
        content.style.backgroundColor = "white";
        footer.style.backgroundColor = "rgba(230, 207, 207, 1)";
        btn.textContent = "Switch to Dark Mode";
        isDark = false;
    }
}

document.getElementById("themeBtn").onclick = toggleTheme;

function startClock() {
    setInterval(showTime, 1000);
    showTime();
}

function showTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();

    let time = "AM"; 
    if (h >= 12) 
        {
             time = "PM"; 
         } 
        h = h % 12; 
    if (h === 0) { 
        h = 12; 
    } 
    h = checkTime(h);
    m = checkTime(m);
     s = checkTime(s);

    let greeting = "Good Morning";
    if (today.getHours() >= 12 && today.getHours() < 17) greeting = "Good Afternoon";
    if (today.getHours() >= 17) greeting = "Good Evening";

    document.getElementById("clock").innerHTML = h + ":" + m + ":" + s + " " + session + " — " + greeting;
}

startClock();

function showSection(sectionId) {
    document.getElementById("bio").style.display = "none";
    document.getElementById("education").style.display = "none";
    document.getElementById("contact").style.display = "none";

    document.getElementById(sectionId).style.display = "block";
}

const form = document.getElementById("contactForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    let valid = true;

    if (name === "") {
        document.getElementById("nameError").innerText = "Name cannot be empty";
        valid = false;
    } else {
        document.getElementById("nameError").innerText = "";
    }
    if (!email.match(/^[^@]+@[^@]+\.[^@]+$/)) {
        document.getElementById("emailError").innerText = "Enter a valid email";
        valid = false;
    } else {
        document.getElementById("emailError").innerText = "";
    }

    if (message.length < 10) {
        document.getElementById("messageError").innerText = "Message must be at least 50 characters";
        valid = false;
    } else {
        document.getElementById("messageError").innerText = "";
    }

    if (valid) {
        alert("Your message has been sent!");
        form.reset();
    }
});
