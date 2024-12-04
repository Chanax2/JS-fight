// document.addEventListener("DOMContentLoaded", function () {
// var ActionUtilisateur = document.querySelectorAll(".Action-utilisateur");

// ActionUtilisateur.forEach(function (element) {
//     element.style.color = "white";
// });

// });

let black = false;
var button_black = document.getElementById("black_mode");
var ActionUtilisateur = document.querySelectorAll(".Action-utilisateur");

//une fois que tout le style à été chargé
document.addEventListener("DOMContentLoaded", function () {
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: drk)a").matches
  ) {
    console.log("PREFERED BLACK MODE");
    black = true;
    document.body.classList.add("dark-mode");  
    button_black.textContent = "White Mode";
    ActionUtilisateur.forEach(function (element) {
      element.style.color = "white";
    });
  }
});

//quand le bouton dakr mode est clické
button_black.addEventListener("click", function () {
  black = !black;
  if (black) {
    document.body.classList.add("dark-mode");  
    button_black.textContent = "White Mode"; 

    ActionUtilisateur.forEach(function (element) {
      element.style.color = "white";
    });
    
  } else {
    document.body.classList.remove("dark-mode");  
    button_black.textContent = "Black Mode"; 
    ActionUtilisateur.forEach(function (element) {
      element.style.color = "rgb(29,69,140,255)";
    });
    console.log("WHITE MODDDDDDDDDDDDE");
  }
});

//gestion des tabs
var AllLi = document.querySelectorAll(".tab");

console.log(AllLi);
let i = 0;

AllLi.forEach((element) => {
  element.addEventListener("click", function () {
    console.log("CLIQUE");

    //gestion class des li
    //on eleve la classe tab-active de tout les éléments
    AllLi.forEach((tab) => {
      tab.classList.remove("tab-active");
    });

    // on ajoute la classe tab-active au bonne élément
    element.classList.add("tab-active");

    //gestion des div
    //ici on prends toute les div qui nous intéressent
    var content = document.querySelectorAll(".content");
    console.log(content);

    //ici on retire la classe active de tout les éléments
    content.forEach((active) => {
      active.classList.remove("active");
    });

    //ici on applique la classe active la bonne div
    if (element.classList.contains("tab-1")) {
      var targetContent = document.querySelector(".numéro1");

      targetContent.classList.add("active");
    } else  if (element.classList.contains("tab-2")) {
      var targetContent = document.querySelector(".numéro2");

      targetContent.classList.add("active");
    } else if (element.classList.contains("tab-3")) {
      var targetContent = document.querySelector(".numéro3");

      targetContent.classList.add("active");
    }
  });3

  i += 1;

  console.log(element);
  console.log(i);
});

// var ActionUtilisateurColor = document.querySelector(".Action-utilisateur");

// if (ActionUtilisateurColor.color == "blue") {

//     }

// })
