const images = document.querySelectorAll(".image");

images.forEach((image) => {
  image.addEventListener("click", () => {
    // remove the 'selected' class from all images
    images.forEach((img) => {
      img.classList.remove("selected");
    });
    // add the 'selected' class to the clicked image
    image.classList.add("selected");
    // generate three new images to choose from
    const gallery = document.querySelector(".gallery");
    gallery.innerHTML = `
      <img class="image" src="assets/img/Bayley.jpg">
      <img class="image" src="assets/img/Carmella.jpg">
      <img class="image" src="assets/img/Alexa Bliss.jpg">
    `;
  });
});
