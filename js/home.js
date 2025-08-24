// Function to get IDs
function getEl(id) {
  const el = document.getElementById(id);
  return el;
}

// DOM Selectors
const cardBtns = getEl("card-container");
const formContainers = getEl("card-containers").children;
const mainBalanceEl = getEl("main-balance");

// Database Numbers
const accNum = "01888419206";
const myPin = "1234";

// Function for input values. if input value don't have digits then return an alert
function checkNum(val) {
  const digit = /\d/g;
  const isDigit = digit.test(val);
  return isDigit;
}

// Function for convert input values
function input(id, needVal, isNormalTag) {
  const input = getEl(id);
  let inputVal;

  // Checking tag is input type or not
  if (isNormalTag) {
    inputVal = input.textContent;
  } else {
    inputVal = input.value;
  }

  // Converting value from string to integer
  if (!needVal) {
    const inputNum = parseInt(inputVal);
    return inputNum;
  }

  return inputVal;
}

// Listener function for some events
function colorEffects(e) {
  if (e.target === cardBtns) return;

  const buttons = Array.from(cardBtns.children);
  const containers = Array.from(formContainers);
  const cardIDArray = [];

  buttons.forEach((btn) => {
    btn.classList.remove("bg-[#0874f20d]");
    btn.classList.remove("text-[#0874F2]");
    btn.classList.replace("border-[#0874F2]", "border-[#0808081a]");

    const ID = btn.getAttribute("id");
    cardIDArray.push(ID);
  });

  const card = e.target.closest("div");

  card.classList.replace("border-[#0808081a]", "border-[#0874F2]");
  card.classList.add("bg-[#0874f20d]");
  card.classList.add("text-[#0874F2]");

  containers.forEach((container) => {
    container.hidden = true;
  });

  if (e.target.closest(`#${cardIDArray[0]}`)) {
    containers[0].hidden = false;
  } else if (e.target.closest(`#${cardIDArray[1]}`)) {
    containers[1].hidden = false;
  } else if (e.target.closest(`#${cardIDArray[2]}`)) {
    containers[2].hidden = false;
  } else if (e.target.closest(`#${cardIDArray[3]}`)) {
    containers[3].hidden = false;
  } else if (e.target.closest(`#${cardIDArray[4]}`)) {
    containers[4].hidden = false;
  }
}

// Function for input validation
function validateData(accNum, amountStr, amount, pin) {
  if (accNum.length === 0) {
    alert("Plese enter Account Number!");
    return;
  } else if (accNum.length !== 11) {
    alert("Account Number must be 11 digit!");
    return;
  } else if (!checkNum(accNum)) {
    alert("Please provide a valid Account Number!");
    return;
  } else if (amountStr.length === 0) {
    alert("Plese enter amount!");
    return;
  } else if (amount <= 0) {
    alert("Plese enter valid amount!");
    return;
  } else if (pin.length === 0) {
    alert("Please enter your pin");
    return;
  } else if (pin.length !== 4) {
    alert("Pin Number Must be 4 Digit");
    return;
  } else {
    return false;
  }
}

// Converted main balance
const mainBalance = input("main-balance", false, true);

// Common Function for add money and pay bill
function validateOption(name, str) {
  if (name.match(str)) {
    alert(`Plese ${str}!`);
    return false;
  } else {
    return true;
  }
}

// Common function for cashout, transfer money, pay bill
function sub(number, inputVal, input, pin) {
  const validation = validateData(number, inputVal, input, pin);

  if (validation === false) {
    if (accNum === number && myPin === pin) {
      if (input > mainBalance) {
        return alert("Your balance is too low.");
      } else {
        mainBalanceEl.textContent = mainBalance - input;
      }
    } else {
      return alert("Invalid Credential!");
    }
  }
}

//* Add Money Function
function addMoney(e) {
  e.preventDefault();

  const bankName = input("banks", true, false);
  const accNumNum = input("add-account-number", true, false);
  const amountVal = input("add-amount", true, false);
  const amount = input("add-amount", false, false);
  const pinVal = input("add-pin-number", true, false);

  const options = validateOption(bankName, "Select Bank");

  if (options) {
    const validation = validateData(accNumNum, amountVal, amount, pinVal);

    if (validation === false) {
      if (accNum === accNumNum && myPin === pinVal) {
        mainBalanceEl.textContent = mainBalance + amount;
      } else {
        return alert("Invalid Credential!");
      }
    }
  }
}

//* Cash Out Function
function chashOutMoney(e) {
  e.preventDefault();

  const agentAccNum = input("agent-number", true, false);
  const amountVal = input("withdraw-amount", true, false);
  const amount = input("withdraw-amount", false, false);
  const pinVal = input("cash-out-pin", true, false);

  sub(agentAccNum, amountVal, amount, pinVal);
}

//* Money Transfer Function
function moneyTransfer(e) {
  e.preventDefault();

  const userAccNum = input("user-account-number", true, false);
  const amountVal = input("transfer-amount", true, false);
  const amount = input("transfer-amount", false, false);
  const pinVal = input("transfer-pin", true, false);

  sub(userAccNum, amountVal, amount, pinVal);
}

//* Pay Bill Function
function payBill(e) {
  e.preventDefault();

  const billerName = input("pay", true, false);
  const billerNum = input("biller-account-number", true, false);
  const amountVal = input("pay-amount", true, false);
  const amount = input("pay-amount", false, false);
  const pinVal = input("pay-bill-pin", true, false);

  const options = validateOption(billerName, "Select To Pay");
  if (options) {
    sub(billerNum, amountVal, amount, pinVal);
  }

  // sub(billerNum, amountVal, amount, pinVal);
}

// Logout Function
function logOut() {
  location.href = "./index.html";
}

// Function for Event Listeners
function click(id, func) {
  const el = getEl(id);
  el.addEventListener("click", func);
}

click("card-container", colorEffects);
click("add-money-btn", addMoney);
click("cash-out-btn", chashOutMoney);
click("transfer-money-btn", moneyTransfer);
click("pay-bill-btn", payBill);
click("log-out-btn", logOut);
