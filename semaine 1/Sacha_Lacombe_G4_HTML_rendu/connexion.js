let form = document.querySelector(".form-container");
console.log(form); // Vérifier si le formulaire est bien sélectionné

form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("bababa");  // Vérifier si l'événement est bien déclenché

  let email = document.querySelector("#email");

  if (email.value == "") {
    console.log("email invalide");
    email.classList.add("failure");
  } else {
    email.classList.add("success");
  }

  let name= document.querySelector("#name")
  if (name.value.length < 2) {
    name.classList.add("failure");
    console.log("pseudo invalide");
  } else {
    name.classList.add("success");
  }

  let surname= document.querySelector("#surname")
  if (surname.value.length < 6) {
    surname.classList.add("failure");
    console.log("pseudo invalide");
  } else {
    surname.classList.add("success");
  }

  let passCheck = new RegExp("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?\":{}|<>])(?!.* ).{8,16}$");
  let password = document.querySelector("#password");

  if (passCheck.test(password.value)== false) {
    password.classList.add("failure");
    console.log(password.value);

  } else {
    password.classList.add("success");
  }

  let confirm_password = document.querySelector("#confirm-password");

if( confirm_password.value !== password.value) {
    confirm_password.classList.add("failure")
} else {confirm_password.classList.add("success")}
});
