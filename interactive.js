let budget = 30;
 const selectedImages = [];

const updateBudget = () => {
  document.getElementById("budget").textContent = budget;
};
        
const updateSelectedImages = () => {
  document.getElementById("selectedImages").value = selectedImages.join(", ");
}
        
const copyToClipboard = () => {
  const textarea = document.getElementById("selectedImages");
  textarea.select();
  document.execCommand("copy");
}

const selectImage = (id) => {
  const selectedImage = document.getElementById(id);
  const price = parseInt(selectedImage.dataset.price);

  if (selectedImage.classList.contains("selected")) {
    budget += price;
    selectedImage.classList.remove("selected");
    const index = selectedImages.indexOf(id);
    selectedImages.splice(index, 1);
  } else if (budget >= price) {
    budget -= price;
    selectedImage.classList.add("selected");
    selectedImages.push(id);
  }

  updateBudget();
  updateSelectedImages();
  };

document.getElementById("image1").onclick = () => selectImage("image1");
document.getElementById("image2").onclick = () => selectImage("image2");
document.getElementById("image3").onclick = () => selectImage("image3");
document.getElementById("image4").onclick = () => selectImage("image4");
document.getElementById("image5").onclick = () => selectImage("image5");
document.getElementById("image6").onclick = () => selectImage("image6");
document.getElementById("image7").onclick = () => selectImage("image7");
document.getElementById("image8").onclick = () => selectImage("image8");
document.getElementById("image9").onclick = () => selectImage("image9");
document.getElementById("copyButton").onclick = copyToClipboard;
