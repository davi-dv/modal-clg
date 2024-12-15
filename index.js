const modal = document.getElementById("modal");
const btn = document.getElementById("btn");
const closeBtn = document.querySelector(".close-button");

const openModal = () => {
  modal.classList.add("show-modal");
};

const closeModal = () => {
  modal.classList.remove("show-modal");
};

const loadImages = () => {
  const headers = new Headers({
    "Content-Type": "application/json",
    "x-api-key":
      "live_5zzbUNJF5BAF5z40uyeHmMjfhP5eydvt6W5UX69jK3LCWzhlB2xlLFIR45D1Fac5",
  });
  const requestOptions = {
    method: "GET",
    headers: headers,
    redirect: "follow",
  };

  fetch(
    "https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1",
    requestOptions
  )
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      const imageUrl = result[0].url;
      document.getElementById("img-update").src = imageUrl;
      return result;
    })
    .catch((error) => console.log("error", error));

  const btnUpdate = document.getElementById("updateButton");
  btnUpdate.addEventListener("click", loadImages);
};

btn.addEventListener("click", openModal);

closeBtn.addEventListener("click", closeModal);

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal();
  }
});
