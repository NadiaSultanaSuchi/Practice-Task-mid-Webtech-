
const nameTF = document.getElementById("nameTF");
const emailTF = document.getElementById("emailTF");
const passwordTF = document.getElementById("passwordTF");
const confirmPasswordTF = document.getElementById("confirmPasswordTF");
const phoneTF = document.getElementById("phoneTF");


const nameERR = document.getElementById("nameERR");
const emailERR = document.getElementById("emailERR");
const passwordERR = document.getElementById("passwordERR");
const confirmERR = document.getElementById("confirmERR");
const phoneERR = document.getElementById("phoneERR");
const successMSG = document.getElementById("successMSG");


function validateForm() {

    
    nameERR.innerHTML = "";
    emailERR.innerHTML = "";
    passwordERR.innerHTML = "";
    confirmERR.innerHTML = "";
    phoneERR.innerHTML = "";
    successMSG.innerHTML = "";

    let isErr = false;

    let nameRegex = /^[A-Za-z ]+$/;
    if (nameTF.value.trim() === "") {
        isErr = true;
        nameERR.innerHTML = "Name cannot be empty";
    } else if (!nameRegex.test(nameTF.value)) {
        isErr = true;
        nameERR.innerHTML = "Name cannot contain numbers or special characters";
    }


    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (emailTF.value.trim() === "") {
        isErr = true;
        emailERR.innerHTML = "Email cannot be empty";
    } else if (!emailPattern.test(emailTF.value)) {
        isErr = true;
        emailERR.innerHTML = "Invalid email format";
    }

    
    if (passwordTF.value.length < 6) {
        isErr = true;
        passwordERR.innerHTML = "Password must be at least 8 characters";
    }

    
    if (passwordTF.value !== confirmPasswordTF.value) {
        isErr = true;
        confirmERR.innerHTML = "Passwords do not match";
    }

    
    let phoneRegex = /^[0-9]+$/;
    if (phoneTF.value.trim() === "") {
        isErr = true;
        phoneERR.innerHTML = "Phone number cannot be empty";
    } else if (!phoneRegex.test(phoneTF.value)) {
        isErr = true;
        phoneERR.innerHTML = "Phone must contain digits only";
    }

    if (isErr) {
        return false;
    }

    successMSG.innerHTML = "Registration Successful!";
    return false;
}
