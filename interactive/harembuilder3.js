let budget = 20;
document.getElementById("currentbudget").innerHTML = "Current budget: " + budget;
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
  document.getElementById("currentbudget").innerHTML = "Current budget: " + budget;
};

//5P
document.getElementById("Alexandra Daddario").onclick = () => selectImage("Alexandra Daddario");
document.getElementById("Hailee Steinfeld").onclick = () => selectImage("Hailee Steinfeld");
document.getElementById("Gal Gadot").onclick = () => selectImage("Gal Gadot");
document.getElementById("Dua Lipa").onclick = () => selectImage("Dua Lipa");
document.getElementById("Zendaya").onclick = () => selectImage("Zendaya");
document.getElementById("Olivia Rodrigo").onclick = () => selectImage("Olivia Rodrigo");
document.getElementById("Selena Gomez").onclick = () => selectImage("Selena Gomez");
document.getElementById("Selma Hayek").onclick = () => selectImage("Selma Hayek");
//4P
document.getElementById("Vanessa Hudgens").onclick = () => selectImage("Vanessa Hudgens");
document.getElementById("Madison Beer").onclick = () => selectImage("Madison Beer");
document.getElementById("Mila Kunis").onclick = () => selectImage("Mila Kunis");
document.getElementById("Lucy Hale").onclick = () => selectImage("Lucy Hale");
document.getElementById("Nathalie Emmanuel").onclick = () => selectImage("Nathalie Emmanuel");
document.getElementById("Olivia Munn").onclick = () => selectImage("Olivia Munn");
document.getElementById("Zoe Kravitz").onclick = () => selectImage("Zoe Kravitz");
document.getElementById("Megan Fox").onclick = () => selectImage("Megan Fox");
//3P
document.getElementById("Jamie Alexander").onclick = () => selectImage("Jamie Alexander");
document.getElementById("Kat Dennings").onclick = () => selectImage("Kat Dennings");
document.getElementById("Kira Kosarin").onclick = () => selectImage("Kira Kosarin");
document.getElementById("Priyanka Chopra").onclick = () => selectImage("Priyanka Chopra");
document.getElementById("Kylie Jenner").onclick = () => selectImage("Kylie Jenner");
document.getElementById("Hayley Atwell").onclick = () => selectImage("Hayley Atwell");
document.getElementById("Naomi Scott").onclick = () => selectImage("Naomi Scott");
document.getElementById("Tessa Thompson").onclick = () => selectImage("Tessa Thompson");
//2P
document.getElementById("Kendall Jenner").onclick = () => selectImage("Kendall Jenner");
document.getElementById("Jennifer Connelly").onclick = () => selectImage("Jennifer Connelly");
document.getElementById("Diane Guerrero").onclick = () => selectImage("Diane Guerrero");
document.getElementById("Maisie Williams").onclick = () => selectImage("Maisie Williams");
document.getElementById("Felicity Jones").onclick = () => selectImage("Felicity Jones");
document.getElementById("Ariel Winter").onclick = () => selectImage("Ariel Winter");
document.getElementById("Emmy Rossum").onclick = () => selectImage("Emmy Rossum");
document.getElementById("Constance Wu").onclick = () => selectImage("Constance Wu");
//1P
document.getElementById("Emmanuelle Chriqui").onclick = () => selectImage("Emmanuelle Chriqui");
document.getElementById("Lucy Liu").onclick = () => selectImage("Lucy Liu");
document.getElementById("Kim Kardashian").onclick = () => selectImage("Kim Kardashian");
document.getElementById("Mary Elizabeth Winstead").onclick = () => selectImage("Mary Elizabeth Winstead");
document.getElementById("Morena Baccarin").onclick = () => selectImage("Morena Baccarin");
document.getElementById("Charly Caruso").onclick = () => selectImage("Charly Caruso");
document.getElementById("Anya Chalotra").onclick = () => selectImage("Anya Chalotra");
document.getElementById("Nina Dobrev").onclick = () => selectImage("Nina Dobrev");
//buttons
document.getElementById("copyButton").onclick = copyToClipboard;
document.getElementById("gamehub-btn").addEventListener("click", function() {
  window.location.href = "gamehub.html";
});