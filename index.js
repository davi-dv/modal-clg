const modal = document.getElementById("modal");
const btn = document.getElementById("btn");
const closeBtn = document.querySelector(".close-button");

const openModal = () => {
  console.log("clicoooo");
  modal.classList.add("show-modal");
};

const closeModal = () => {
  console.log("closeeee");
  modal.classList.remove("show-modal");
};

btn.addEventListener("click", openModal);

closeBtn.addEventListener("click", closeModal);

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal();
  }
});
