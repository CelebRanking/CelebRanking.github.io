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
document.getElementById("Sydney Sweeney").onclick = () => selectImage("Sydney Sweeney");
document.getElementById("Margot Robbie").onclick = () => selectImage("Margot Robbie");
document.getElementById("Elizabeth Olsen").onclick = () => selectImage("Elizabeth Olsen");
document.getElementById("Taylor Swift").onclick = () => selectImage("Taylor Swift");
//4$
document.getElementById("Jennifer Lawrence").onclick = () => selectImage("Jennifer Lawrence");
document.getElementById("Kate Upton").onclick = () => selectImage("Kate Upton");
document.getElementById("Brie Larson").onclick = () => selectImage("Brie Larson");
document.getElementById("Anya Taylor Joy").onclick = () => selectImage("Anya Taylor Joy");
//3$
document.getElementById("Dove Cameron").onclick = () => selectImage("Dove Cameron");
document.getElementById("Sophie Turner").onclick = () => selectImage("Sophie Turner");
document.getElementById("Lilli Reinhart").onclick = () => selectImage("Lilli Reinhart");
document.getElementById("Chloe Grace Moretz").onclick = () => selectImage("Chloe Grace Moretz");
//2$
document.getElementById("Sabrina Carpenter").onclick = () => selectImage("Sabrina Carpenter");
document.getElementById("Katherine McNamara").onclick = () => selectImage("Katherine McNamara");
document.getElementById("Leni Klum").onclick = () => selectImage("Leni Klum");
document.getElementById("Amenda Seyfried").onclick = () => selectImage("Amenda Seyfried");
//1$
document.getElementById("Kate Hudson").onclick = () => selectImage("Kate Hudson");
document.getElementById("Charlize Theron").onclick = () => selectImage("Charlize Theron");
document.getElementById("Blake Lively").onclick = () => selectImage("Blake Lively");
document.getElementById("Peyton List").onclick = () => selectImage("Peyton List");
//buttons
document.getElementById("copyButton").onclick = copyToClipboard;
document.getElementById("gamehub-btn").addEventListener("click", function() {
  window.location.href = "gamehub.html";
});