const submitBtnTag = document.querySelector(".submitBtn") as HTMLElement;
const successTag = document.querySelector(".success") as HTMLElement;
const containerTag = document.querySelector(".container") as HTMLElement;
const dismissBtnTag = document.querySelector(".dismissBtn") as HTMLElement;
const emailInputTag = document.querySelector(".input") as HTMLInputElement;
const errorTag = document.querySelector(".error") as HTMLElement;
const emailFromInputTag = document.querySelector(
  ".emailFromInput"
) as HTMLElement;

submitBtnTag.addEventListener("click", () => {
  const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const emailInput = emailInputTag.value;
  if (!emailInput.match(emailPattern)) {
    errorTag.innerHTML = "Invalid email";
    emailInputTag.classList.add("is-invalid");
  } else {
    containerTag.style.display = "none";
    emailFromInputTag.innerHTML = emailInput;
    successTag.style.display = "block";
  }
});

dismissBtnTag.addEventListener("click", () => {
  successTag.style.display = "none";
  containerTag.style.display = "flex";
});
