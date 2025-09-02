const signUpButton = document.getElementById("sign-up-btn");

// Function for convert input values
const input = (id, needVal) => {
  const input = document.getElementById(id);
  const inputVal = input.value;
  if (!needVal) {
    const inputNum = parseInt(inputVal);
    return inputNum;
  }

  return inputVal;
};

// Function for input values. if input value don't have digits then return an alert
const checkNum = (val) => {
  const digit = /\d/g;
  const isDigit = digit.test(val);
  return isDigit;
};

const preventDuplicate = (userInputData) => {
  const { name, email, number } = userInputData;
  const dataBase = JSON.parse(localStorage.getItem("userAuth")) || [];

  let isDuplicate = false;
  dataBase.forEach((user) => {
    if (user.number === number) {
      alert("This number is already existed!");
      isDuplicate = true;
      return;
    } else if (user.email === email) {
      alert("This email is already existed!");
      isDuplicate = true;
      return;
    }
  });
  return isDuplicate;
};

// Function for SignUp button
function logIn(e) {
  e.preventDefault();

  const nameVal = input("name", true);
  const emailVal = input("email", true);
  const mobileVal = input("mobile-number", true);
  const pinVal = input("pin-number", true);

  if (!nameVal) {
    return alert("Invalid Name");
  }
  if (!emailVal) {
    return alert("Invalid Email");
  }
  if (!mobileVal) {
    return alert("Invalid Mobile Number");
  } else if (!pinVal) {
    return alert("Invalid Pin Number");
  }

  if (!checkNum(mobileVal)) {
    return alert("Please Provide a valid number");
  } else if (!checkNum(pinVal)) {
    return alert("Please Provide a valid pin");
  }

  if (mobileVal.length !== 11) {
    return alert("Mobile number must be 11 digit");
  } else if (pinVal.length !== 4) {
    return alert("Pin number must be 4 digit");
  }

  const userData = {
    name: nameVal,
    email: emailVal,
    number: mobileVal,
    pin: pinVal,
  };

  const duplicate = preventDuplicate(userData);
  if (!duplicate) {
    const storedAuth = JSON.parse(localStorage.getItem("userAuth")) || [];
    storedAuth.push(userData);
    localStorage.setItem("userAuth", JSON.stringify(storedAuth));

    alert(`Welcome ${userData.name}, Your account is succesfully created!`);
    window.location = "./index.html";
  }
}

// Event handler for login button
signUpButton.addEventListener("click", logIn);
