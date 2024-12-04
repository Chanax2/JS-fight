var black_mode = document.querySelector(".text");
console.log(black_mode);

var button_black = document.getElementById("black");
console.log(button_black);

button_black.addEventListener("click", function () {
  if (document.body.style.backgroundColor == "black") {
    document.body.style.backgroundColor = "white";
  } else {
    document.body.style.backgroundColor = "black";
  }

  black_mode.classList.toggle("white_color");
  
});
