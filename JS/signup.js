let b = $("#signupbutton");
let su = $(".sustatus");
var signinlist;
signin();
function waitforsignin(){
    if (resp != undefined){
        signinlist = resp;
    }
    else{
        setTimeout(waitforsignin,5000);
    }
}
waitforsignin();

b.click(()=>{
    let username = $("#signupUsername").val();
    let address = $("#signupAddress").val();
    let password = $("#signupPwd").val();
    let cpassword = $("#signupcPwd").val();
    for (let x = 0; x < signinlist.length; x++){
        if (signinlist[x].username == username){
            su.html("<p>Username has been taken. Please enter another username.</p>");
            return; 
        }
    }
    if (password != cpassword){
        su.html("<p>Passwords do not match. Please make sure both passwords match.</p>");
        return;
    }
    signindata({"username": username, "address": address, "password": cpassword, "points": 0});
    su.html("<p>Successful creation.</p>");
    delaybeforeredirect();
    window.location.href = "signin.html";
});

function delaybeforeredirect(){
    setTimeout(b,100)
}


function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message");

    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "form__message--error");
    messageElement.classList.add(`form__message--${type}`);
}

function setInputError(inputElement, message) {
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}

function clearInputError(inputElement) {
    inputElement.classList.remove("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
}

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
    });

    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
    });

    loginForm.addEventListener("submit", e => {
        e.preventDefault();



        setFormMessage(loginForm, "error", "Invalid username/password combination");
    });

    document.querySelectorAll(".form__input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 10) {
                setInputError(inputElement, "Username must be at least 10 characters in length");
            }
        });

        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
        });
    });
});
