// DOM Selectors
const btnLogin = document.getElementById("login-btn");
const myNum = "01888419206";
const myPin = "1234";

// Function for convert input values
function input(id, needVal) {
  const input = document.getElementById(id);
  const inputVal = input.value;
  if (!needVal) {
    const inputNum = parseInt(inputVal);
    return inputNum;
  }

  return inputVal;
}

// Function for input values. if input value don't have digits then return an alert
function checkNum(val) {
  const digit = /\d/g;
  const isDigit = digit.test(val);
  return isDigit;
}

// Function for Login button
function logIn(e) {
  e.preventDefault();

  const mobileVal = input("mobile-number", true);
  const pinVal = input("pin-number", true);

  if (mobileVal.length === 0) {
    return alert("Invalid Mobile Number");
  } else if (pinVal.length === 0) {
    return alert("Invalid Pin Number");
  }

  if (!checkNum(mobileVal)) {
    return alert("Please Provide a valid number");
  } else if (!checkNum(pinVal)) {
    return alert("Please Provide a valid pin");
  }

  if (mobileVal.length !== 11) {
    console.log(mobileVal.length);

    return alert("Mobile number must be 11 digit");
  } else if (pinVal.length !== 4) {
    console.log(pinVal.length);

    return alert("Pin number must be 4 digit");
  }

  if (myNum === mobileVal && myPin === pinVal) {
    window.location.href = "./home.html";
    return;
  } else {
    return alert("Wrong credentials");
  }
}

// Event handler for login button
btnLogin.addEventListener("click", logIn);
