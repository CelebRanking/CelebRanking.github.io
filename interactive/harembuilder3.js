let budget = 20;
const selectedcelebs = [];
const updateBudget = () => {
  document.getElementById("budget").textContent = budget;
};
        
const updateselectedcelebs = () => {
  const joinedCelebs = "My celeb harem: " + selectedcelebs.join(", ");
  document.getElementById("selectedcelebs").value = joinedCelebs;
};
   
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
document.getElementById("Alexandra Daddario").onclick = () => selectImage("Alexandra Daddario");
document.getElementById("Hailee Steinfeld").onclick = () => selectImage("Hailee Steinfeld");
document.getElementById("Gal Gadot").onclick = () => selectImage("Gal Gadot");
document.getElementById("Dua Lipa").onclick = () => selectImage("Dua Lipa");
document.getElementById("Olivia Rodrigo").onclick = () => selectImage("Olivia Rodrigo");
//4$
document.getElementById("Selena Gomez").onclick = () => selectImage("Selena Gomez");
document.getElementById("Selma Hayek").onclick = () => selectImage("Selma Hayek");
document.getElementById("Vanessa Hudgens").onclick = () => selectImage("Vanessa Hudgens");
document.getElementById("Nathalie Emmanuel").onclick = () => selectImage("Nathalie Emmanuel");
document.getElementById("Olivia Munn").onclick = () => selectImage("Olivia Munn");
//3$
document.getElementById("Zoe Kravitz").onclick = () => selectImage("Zoe Kravitz");
document.getElementById("Megan Fox").onclick = () => selectImage("Megan Fox");
document.getElementById("Jamie Alexander").onclick = () => selectImage("Jamie Alexander");
document.getElementById("Kat Dennings").onclick = () => selectImage("Kat Dennings");
document.getElementById("Priyanka Chopra").onclick = () => selectImage("Priyanka Chopra");
//2$
document.getElementById("Kylie Jenner").onclick = () => selectImage("Kylie Jenner");
document.getElementById("Naomi Scott").onclick = () => selectImage("Naomi Scott");
document.getElementById("Tessa Thompson").onclick = () => selectImage("Tessa Thompson");
document.getElementById("Kendall Jenner").onclick = () => selectImage("Kendall Jenner");
document.getElementById("Diane Guerrero").onclick = () => selectImage("Diane Guerrero");
//1$
document.getElementById("Ariel Winter").onclick = () => selectImage("Ariel Winter");
document.getElementById("Emmanuelle Chriqui").onclick = () => selectImage("Emmanuelle Chriqui");
document.getElementById("Morena Baccarin").onclick = () => selectImage("Morena Baccarin");
document.getElementById("Nina Dobrev").onclick = () => selectImage("Nina Dobrev");
//buttons
document.getElementById("copyButton").onclick = copyToClipboard;
document.getElementById("gamehub-btn").addEventListener("click", function() {
  window.location.href = "gamehub.html";
});