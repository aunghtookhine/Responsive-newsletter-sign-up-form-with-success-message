var submitBtnTag = document.querySelector(".submitBtn");
var successTag = document.querySelector(".success");
var containerTag = document.querySelector(".container");
var dismissBtnTag = document.querySelector(".dismissBtn");
var emailInputTag = document.querySelector(".input");
var errorTag = document.querySelector(".error");
var emailFromInputTag = document.querySelector(".emailFromInput");
submitBtnTag.addEventListener("click", function () {
    var emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var emailInput = emailInputTag.value;
    if (!emailInput.match(emailPattern)) {
        errorTag.innerHTML = "Invalid email";
        emailInputTag.classList.add("is-invalid");
    }
    else {
        containerTag.style.display = "none";
        emailFromInputTag.innerHTML = emailInput;
        successTag.style.display = "block";
    }
});
dismissBtnTag.addEventListener("click", function () {
    successTag.style.display = "none";
    containerTag.style.display = "flex";
});
