let budget = 30;
 const selectedcelebs = [];

const updateBudget = () => {
  document.getElementById("budget").textContent = budget;
};
        
const updateselectedcelebs = () => {
  document.getElementById("selectedcelebs").value = selectedcelebs.join(", ");
}
        
const copyToClipboard = () => {
  const textarea = document.getElementById("selectedcelebs");
  textarea.select();
  document.execCommand("copy");
}

const selectImage = (id) => {
  const selectedImage = document.getElementById(id);
  const price = parseInt(selectedImage.dataset.price);

  if (selectedImage.classList.contains("selected")) {
    budget += price;
    selectedImage.classList.remove("selected");
    const index = selectedcelebs.indexOf(id);
    selectedcelebs.splice(index, 1);
  } else if (budget >= price) {
    budget -= price;
    selectedImage.classList.add("selected");
    selectedcelebs.push(id);
  }

  updateBudget();
  updateselectedcelebs();
  };

document.getElementById("Hailee Steinfeld").onclick = () => selectImage("Hailee Steinfeld");
document.getElementById("Ana De Armas").onclick = () => selectImage("Ana De Armas");
document.getElementById("Natalie Portman").onclick = () => selectImage("Natalie Portman");
document.getElementById("Sydney Sweeney").onclick = () => selectImage("Sydney Sweeney");
document.getElementById("Florence Pugh").onclick = () => selectImage("Florence Pugh");
document.getElementById("Jenna Ortega").onclick = () => selectImage("Jenna Ortega");
document.getElementById("Felicity Jones").onclick = () => selectImage("Felicity Jones");
document.getElementById("Kate Upton").onclick = () => selectImage("Kate Upton");
document.getElementById("Taylor Swift").onclick = () => selectImage("Taylor Swift");
document.getElementById("copyButton").onclick = copyToClipboard;
