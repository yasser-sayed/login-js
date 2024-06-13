var emailInp = document.querySelector(".emailInp");
var passInp = document.querySelector(".passInp");
var loginError = document.querySelector(".loginError");
var passHider = document.querySelector(".passHider");
var passWarn = document.querySelector(".passWarning");
var passIcon = document.querySelector(".passIcon");
var mailCheck = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function formChecker() {
  if (!mailCheck.test(emailInp.value)) {
    loginError.classList.replace("d-none", "d-block");
    return false;
  } else if (passInp.value.length < 8 || passInp.value.includes(" ")) {
    loginError.classList.replace("d-none", "d-block");
    return false;
  } else {
    return true;
  }
}

passInp.addEventListener("focus", () => {
  passWarn.classList.replace("d-none", "d-block");
});

passInp.addEventListener("blur", () => {
  passWarn.classList.replace("d-block", "d-none");
});

passInp.addEventListener("keyup", (passInp) => {
  if (passInp.target.value.length > 7) {
    passWarn.classList.replace("warningMsg", "grnWay");
    passIcon.classList.replace("fa-xmark", "fa-check");
  } else {
    passWarn.classList.replace("grnWay", "warningMsg");
    passIcon.classList.replace("fa-check", "fa-xmark");
  }
});

passHider.addEventListener("click", () => {
  if (passInp.type == "password") {
    passInp.type = "text";
  } else {
    passInp.type = "password";
  }
});
