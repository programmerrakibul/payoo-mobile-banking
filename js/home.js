// DOM Selectors
const cardContainer = document.getElementById("card-container");

function colorEffects(e) {
  if (e.target === cardContainer) return;

  const cards = Array.from(cardContainer.children);
  cards.forEach((item) => {
    item.classList.remove("bg-[#0874f20d]");
    item.classList.remove("text-[#0874F2]");
    item.classList.replace("border-[#0874F2]", "border-[#0808081a]");
  });

  const card = e.target.closest("div");
  card.classList.replace("border-[#0808081a]", "border-[#0874F2]");
  card.classList.add("bg-[#0874f20d]");
  card.classList.add("text-[#0874F2]");
}

cardContainer.addEventListener("click", colorEffects);
