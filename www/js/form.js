var form = document.querySelector(".formWithValidation");
var fields = form.querySelectorAll(".field");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  var errors = form.querySelectorAll(".error");

  for (var i = 0; i < errors.length; i++) {
    errors[i].remove();
  }

  for (var i = 0; i < fields.length; i++) {
    if (!fields[i].value) {
      console.log("This field is required", fields[i]);

      var error = document.createElement("div");
      error.className = "error";
      error.style.color = "red";
      error.innerHTML = "This field is required";

      fields[i].parentNode.insertBefore(error, fields[i].nextSibling);
      fields[i].classList.add("error-input");
    } else {
      fields[i].classList.remove("error-input");
    }
  }
});
