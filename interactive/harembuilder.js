let budget = 20;
 const selectedcelebs = [];
const updateBudget = () => {
  document.getElementById("budget").textContent = budget;
};
        
const updateselectedcelebs = () => {
  const joinedCelebs = "My celeb harem: " + selectedcelebs.join(", ");
  document.getElementById("selectedcelebs").value = joinedCelebs;
}
   
const copyToClipboard = () => {
  const textarea = document.getElementById("selectedcelebs");
  textarea.select();
  document.execCommand("copy");
  alert("Copied to clipboard!");
};

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
  } else {
    alert("Budget is already spent!");
  }
  updateBudget();
  updateselectedcelebs();
  };

//5$
document.getElementById("Ana De Armas").onclick = () => selectImage("Ana De Armas");
document.getElementById("Emma Watson").onclick = () => selectImage("Emma Watson");
document.getElementById("Alexandra Daddario").onclick = () => selectImage("Alexandra Daddario");
document.getElementById("Hailee Steinfeld").onclick = () => selectImage("Hailee Steinfeld");
//4$
document.getElementById("Sydney Sweeney").onclick = () => selectImage("Sydney Sweeney");
document.getElementById("Margot Robbie").onclick = () => selectImage("Margot Robbie");
document.getElementById("Elizabeth Olsen").onclick = () => selectImage("Elizabeth Olsen");
document.getElementById("Emilia Clarke").onclick = () => selectImage("Emilia Clarke");
//3$
document.getElementById("Jenna Ortega").onclick = () => selectImage("Jenna Ortega");
document.getElementById("Olivia Rodrigo").onclick = () => selectImage("Olivia Rodrigo");
document.getElementById("Brie Larson").onclick = () => selectImage("Brie Larson");
document.getElementById("Madison Beer").onclick = () => selectImage("Madison Beer");
//2$
document.getElementById("Gal Gadot").onclick = () => selectImage("Gal Gadot");
document.getElementById("Megan Fox").onclick = () => selectImage("Megan Fox");
document.getElementById("Natalie Portman").onclick = () => selectImage("Natalie Portman");
document.getElementById("Jenna Ortega").onclick = () => selectImage("Jenna Ortega");
//1$
document.getElementById("Zendaya").onclick = () => selectImage("Zendaya");
document.getElementById("Taylor Swift").onclick = () => selectImage("Taylor Swift");
document.getElementById("Victoria Justice").onclick = () => selectImage("Victoria Justice");
document.getElementById("Dua Lipa").onclick = () => selectImage("Dua Lipa");
//buttons
document.getElementById("copyButton").onclick = copyToClipboard;
document.getElementById("gamehub-btn").addEventListener("click", function() {
  window.location.href = "interactive-hub.html";
});