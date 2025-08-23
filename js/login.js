// DOM Selectors
const btnLogin = document.getElementById("login-btn");
const mobileNumber = document.getElementById("mobile-number");
const pinNumber = document.getElementById("pin-number");
const myNum = "01888419206";
const myPin = "1234";

function logIn(e) {
  e.preventDefault();

  let mobileVal = mobileNumber.value;
  let pinVal = pinNumber.value;

  if (mobileVal === "") {
    return alert("Invalid Mobile Number");
  }
  if (pinVal === "") {
    return alert("Invalid Pin Number");
  }

  if (myNum === mobileVal && myPin === pinVal) {
    window.location.href = "./home.html";
    return;
  } else {
    return alert("Wrong credentials");
  }
}

btnLogin.addEventListener("click", logIn);
