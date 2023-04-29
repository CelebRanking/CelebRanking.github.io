const images = document.querySelectorAll(".image");

images.forEach((image) => {
  image.addEventListener("click", () => {
    images.forEach((img) => {
      img.classList.remove("selected");
    });
    image.classList.add("selected");
  });
});
