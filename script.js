const alertContainer = document.getElementById("alert-container");

document
  .getElementById("copy-link-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const currentURL = window.location.href;
    navigator.clipboard
      .writeText(currentURL)
      .then(() => {
        alertContainer.classList.add("active");

        setTimeout(() => {
          alertContainer.classList.remove("active");
        }, 2000);
      })
      .catch((err) => {
        console.error("Failed to copy link: ", err);
      });
  });
