// Modal elements
const modal = document.getElementById("modal");
const modalText = document.getElementById("modal-text");
const closeBtn = document.querySelector(".close");

// Select only clickable event cards
const clickableCards = document.querySelectorAll(".event-card.clickable");

// Add click event
clickableCards.forEach(card => {
  card.addEventListener("click", () => {
    const message = card.getAttribute("data-message");
    modalText.textContent = message;
    modal.style.display = "block";
  });
});

// Close modal when clicking X
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close modal when clicking outside
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
