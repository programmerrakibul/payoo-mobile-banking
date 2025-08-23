// DOM Selectors
const cardContainer = document.getElementById("card-container");
const cardContainers = document.getElementById("card-containers").children;
const addMoneyContainer = document.getElementById("add-money-container");
const cashoutContainer = document.getElementById("cash-out-container");
const transferMoneyContainer = document.getElementById(
  "transfer-money-container"
);
const getBonusContainer = document.getElementById("get-bonus-container");
const payBillContainer = document.getElementById("pay-bill-container");
const mainBalanceEl = document.getElementById("main-balance");
const mainBalance = parseInt(mainBalanceEl.textContent);
const myPin = "1234";

// Add Money
// const addAccNumber = document.getElementById("add-account-number");
const addAmount = document.getElementById("add-amount");
const addPin = document.getElementById("add-pin-number");
const addBtn = document.getElementById("add-money-btn");

// Casho Out

// Container Cards Array
const cardIDArray = [
  "add-money-card",
  "chashout-card",
  "transfer-money-card",
  "bonus-card",
  "pay-bill-card",
  "transaction-card",
];

// Listener function for some events
function colorEffects(e) {
  if (e.target === cardContainer) return;

  const cards = Array.from(cardContainer.children);
  const containers = Array.from(cardContainers);

  cards.forEach((item) => {
    item.classList.remove("bg-[#0874f20d]");
    item.classList.remove("text-[#0874F2]");
    item.classList.replace("border-[#0874F2]", "border-[#0808081a]");
  });

  const card = e.target.closest("div");

  card.classList.replace("border-[#0808081a]", "border-[#0874F2]");
  card.classList.add("bg-[#0874f20d]");
  card.classList.add("text-[#0874F2]");

  containers.forEach((container) => {
    container.hidden = true;
  });

  if (e.target.closest(`#${cardIDArray[0]}`)) {
    addMoneyContainer.hidden = false;
  } else if (e.target.closest(`#${cardIDArray[1]}`)) {
    cashoutContainer.hidden = false;
  } else if (e.target.closest(`#${cardIDArray[2]}`)) {
    transferMoneyContainer.hidden = false;
  } else if (e.target.closest(`#${cardIDArray[3]}`)) {
    getBonusContainer.hidden = false;
  } else if (e.target.closest(`#${cardIDArray[4]}`)) {
    payBillContainer.hidden = false;
  }
}

// Function for input validation
function validateData(amountStr, amount, pin) {
  if (amountStr === "") {
    return alert("Plese enter amount!");
  } else if (amount <= 0) {
    return alert("Plese enter valid amount!");
  }

  if (pin.length === 0) {
    return alert("Please enter your pin");
  } else if (pin.length !== 4) {
    return alert("Pin Number Must be 4 Digit");
  }
}

// Add Money Function
function addMoney(e) {
  e.preventDefault();

  const amountVal = parseInt(addAmount.value);
  const pinVal = addPin.value;

  validateData(addAmount.value, amountVal, pinVal);

  if (myPin === pinVal) {
    mainBalanceEl.textContent = mainBalance + amountVal;
    // console.log(mainBalance + amountVal);
  } else {
    return alert("Invalid Credential!");
  }
}

// Cash Out Function
function chashOutMoney() {}

// Event Handler
cardContainer.addEventListener("click", colorEffects);

// Add Money Event Handler
addBtn.addEventListener("click", addMoney);
