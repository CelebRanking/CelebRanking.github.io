const images1 = [
  "assets/img/Alexa Bliss.jpg",
  "assets/img/Bayley.jpg",
  "assets/img/Carmella.jpg",
  "assets/img/Victoria Justice.jpg",
  "assets/img/Shakira.jpg",
  "assets/img/Zendaya.jpg"
];

const images2 = [
  "assets/img/Victoria Justice.jpg",
  "assets/img/Shakira.jpg",
  "assets/img/Zendaya.jpg"
];

const selectImage = (id, selection) => {
  const selectedImage = document.getElementById(id);
  selectedImage.classList.add("selected");
  selectedImage.onclick = null;

  const selectionDiv = document.getElementById(selection);
  selectionDiv.innerHTML = "";

  const images = (selection === "selection1") ? images2 : images1;
  
  images.forEach((image, index) => {
    const imageDiv = document.createElement("div");
    imageDiv.classList.add("col-md-4");
    const img = document.createElement("img");
    img.src = image;
    img.classList.add("img-fluid", "rounded");
    img.onclick = () => selectImage(`image${index+4}`, selection === "selection1" ? "selection2" : "selection3");
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
