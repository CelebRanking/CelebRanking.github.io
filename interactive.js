let budget = 30;

const updateBudget = () => {
  document.getElementById("budget").textContent = budget;
};

const selectImage = (id) => {
  const selectedImage = document.getElementById(id);
  const price = parseInt(selectedImage.dataset.price);
  
  if (selectedImage.classList.contains("selected")) {
    budget += price;
    selectedImage.classList.remove("selected");
  } else if (budget >= price) {
    budget -= price;
    selectedImage.classList.add("selected");
  }
  
  updateBudget();
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
