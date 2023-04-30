const images = [
  "assets/img/Alexa Bliss.jpg",
  "assets/img/Bayley.jpg",
  "assets/img/Carmella.jpg"
];

const selectImage = (id) => {
  const selectedImage = document.getElementById(id);
  selectedImage.classList.add("selected");
  selectedImage.onclick = null;

  const selectionDiv = document.getElementById("selection");
  selectionDiv.innerHTML = "";

  images.forEach((image, index) => {
    const imageDiv = document.createElement("div");
    imageDiv.classList.add("col-md-4");
    const img = document.createElement("img");
    img.src = image;
    img.classList.add("img-fluid", "rounded");
    img.onclick = () => selectImage(`image${index+4}`);
    imageDiv.appendChild(img);
    const p = document.createElement("p");
    p.textContent = `Bild ${index+4}`;
    imageDiv.appendChild(p);
    selectionDiv.appendChild(imageDiv);
  });
};

document.getElementById("image1").onclick = () => selectImage("image1");
document.getElementById("image2").onclick = () => selectImage("image2");
document.getElementById("image3").onclick = () => selectImage("image3");
