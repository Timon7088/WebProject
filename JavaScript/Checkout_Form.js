'use strict';

const phoneErr = document.querySelector("#phoneErr");
const emailErr = document.querySelector("#emailErr");
const email = document.querySelector("#email");
const checkoutBtn = document.querySelector("#checkout")
const phoneNum = document.querySelector("#phone");
const textArea = document.querySelector("#request");
const remain = document.querySelector("#remain");
const limitText = document.querySelector("#charLimit");
const limit = 200;


textArea.addEventListener("input", () => {
    remain.innerHTML = limit - textArea.value.length;

    if (parseInt(remain.innerHTML) <= limit * 0.1) {
        limitText.style.color = 'red';
    } else {
        limitText.style.color = null;
    }
});

function phoneInput() {
    if (phoneNum.value.includes("-") == true) {
        let cleanNum = phoneNum.value.replaceAll("-", "");
        if (cleanNum.length == 10 && cleanNum.substring(0, 2) == "05") {
            phoneErr.style.display = null;
        }
        
        else if (cleanNum.length == 9 && cleanNum.substring(0, 1) == "0") {
            phoneErr.style.display = null;
        }
        
        else {
            phoneErr.style.display = "block";
        }
    }
    
    else {
        if (phoneNum.value.length == 10 && phoneNum.value.substring(0, 2) == "05") {
            phoneErr.style.display = null;
        }
    
        else if (phoneNum.value.length == 9 && phoneNum.value.substring(0, 1) == "0") {
            phoneErr.style.display = null;
        }

        else {
            phoneErr.style.display = "block";
        }

    }
}

function EmailCheck(email) {
    if (email.value.includes("@")) {

        if (email.value.length - 1 == email.value.lastIndexOf(".")) {
            emailErr.style.display = "block";
        }

        else {
            emailErr.style.display = null;
        }
    }

    else {
        emailErr.style.display = "block";
    }
}

checkoutBtn.addEventListener("click", () => {
    phoneInput(phoneNum);
    EmailCheck(email);
})