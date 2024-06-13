var frstNameInp = document.querySelector(".frstNameInp");
var frstNameLab = document.querySelector(".frstNameLab");
var lastNameInp = document.querySelector(".lastNameInp");
var lastNameLab = document.querySelector(".lastNameLab");
var emailInp = document.querySelector(".emailInp");
var emailLab = document.querySelector(".emailLab");
var phoneInp = document.querySelector(".phoneInp");
var phoneLab = document.querySelector(".phoneLab");
var passInp = document.querySelector(".passInp");
var passLab = document.querySelector(".passLab");
var confPassInp = document.querySelector(".confPassInp");
var confPassLab = document.querySelector(".confPassLab");
var maleInp = document.querySelector(".maleInp");
var femaleInp = document.querySelector(".femaleInp");
var genderLab = document.querySelector(".genderLab");
var brthInp = document.querySelector(".brthInp");
var brthLab = document.querySelector(".brthLab");
var emailChecker = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var phoneChecker = /^(\+201|01|00201)[0-2,5]{1}[0-9]{8}/;

function redMsg(Lab, redName) {
  Lab.classList.replace("text-primary", "warningMsg");
  Lab.innerHTML = redName + " <i class='fa-solid fa-hand'></i>";
}

function clearer() {
  frstNameLab.innerHTML = "First Name :";
  frstNameLab.classList.replace("warningMsg", "text-primary");
  lastNameLab.innerHTML = "Last Name :";
  lastNameLab.classList.replace("warningMsg", "text-primary");
  emailLab.innerHTML = "Email :";
  emailLab.classList.replace("warningMsg", "text-primary");
  phoneLab.innerHTML = "Phone Number :";
  phoneLab.classList.replace("warningMsg", "text-primary");
  passLab.innerHTML = "Password :";
  passLab.classList.replace("warningMsg", "text-primary");
  confPassLab.innerHTML = "Confirm Password :";
  confPassLab.classList.replace("warningMsg", "text-primary");
  genderLab.innerHTML = "Gender :";
  genderLab.classList.replace("warningMsg", "text-primary");
  brthLab.innerHTML = "Birthdate :";
  brthLab.classList.replace("warningMsg", "text-primary");
}

function formChecker() {
  if (
    !isNaN(frstNameInp.value) ||
    frstNameInp.value.includes(" ") ||
    frstNameInp.value.length < 3
  ) {
    clearer();
    redMsg(frstNameLab, "Please Enter Valid UserName");
    return false;
  } else if (
    !isNaN(lastNameInp.value) ||
    lastNameInp.value.includes(" ") ||
    lastNameInp.value.length < 3
  ) {
    clearer();
    redMsg(lastNameLab, "Please Enter Valid LastName");
    return false;
  } else if (!emailChecker.test(emailInp.value)) {
    clearer();
    redMsg(emailLab, "Please enter Valid Email");
    return false;
  } else if (!phoneChecker.test(phoneInp.value)) {
    clearer();
    redMsg(phoneLab, "Valid PhoneNumber Only");
    return false;
  } else if (passInp.value.length < 8 || !passInp.value.includes("!")) {
    clearer();
    redMsg(passLab, "Please Enter Valid Password");
    return false;
  } else if (confPassInp.value !== passInp.value) {
    clearer();
    redMsg(confPassLab, "Password Not matched");
    return false;
  } else if (!maleInp.checked && !femaleInp.checked) {
    clearer();
    redMsg(genderLab, "Gender Must Be Selected");
    return false;
  } else if (isNaN(brthInp.valueAsNumber)) {
    clearer();
    redMsg(brthLab, "Birthdate Must Be selected");
    return false;
  } else {
    return true;
  }
}
