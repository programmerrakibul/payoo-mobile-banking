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

// Add Money


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

// Event Handler
cardContainer.addEventListener("click", colorEffects);
