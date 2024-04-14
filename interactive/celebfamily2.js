let budget = 25;
const selectedcelebs = [];

const updateBudget = () => {
  document.getElementById("budget").textContent = budget;
};
const updateselectedcelebs = () => {
  const joinedCelebs = "My celeb football team: " + selectedcelebs.map(item => `${item.name} (${item.position})`).join(", ");
  document.getElementById("selectedcelebs").value = joinedCelebs;
};

const copyToClipboard = () => {
  const textarea = document.getElementById("selectedcelebs");
  textarea.select();
  document.execCommand("copy");
  alert("Copied to clipboard!");
};

const selectImage = (id, points, position) => {
  const selectedImage = document.getElementById(id);
  const price = parseInt(points);

  // Check if the image is already selected
  const index = selectedcelebs.findIndex(item => item.position === position);

  if (index !== -1) {
    const prevSelectedImage = document.getElementById(selectedcelebs[index].id);
    budget += parseInt(selectedcelebs[index].points);
    prevSelectedImage.classList.remove("selected");
    selectedcelebs.splice(index, 1);
  } else {
    if (budget >= price) {
      budget -= price;
      selectedImage.classList.add("selected");
      selectedcelebs.push({ id, points, position, name: selectedImage.alt });
    } else {
      alert("Budget is already spent!");
    }
  }

  updateBudget();
  updateselectedcelebs();
  document.getElementById("globalpoints").innerHTML = "POINTS: " + budget;
};

  //Your mother
  document.getElementById("Brie Larson (3)").onclick = () => selectImage("Brie Larson (3)", 3, "Your mother");
  document.getElementById("Megan Fox (2)").onclick = () => selectImage("Megan Fox (2)", 2, "Your mother");
  document.getElementById("Salma Hayek (1)").onclick = () => selectImage("Salma Hayek (1)", 1, "Your mother");

  //Your older sister
  document.getElementById("Madison Beer (3)", 3).onclick = () => selectImage("Madison Beer (3)", 3, "Your older sister");
  document.getElementById("Florence Pugh (2)", 2).onclick = () => selectImage("Florence Pugh (2)", 2, "Your older sister");
  document.getElementById("Gigi Hadid (1)", 1).onclick = () => selectImage("Gigi Hadid (1)", 1, "Your older sister");

  //Your younger sister
  document.getElementById("Sydney Sweeney (3)", 3).onclick = () => selectImage("Sydney Sweeney (3)", 3, "Your younger sister");
  document.getElementById("Hailee Steinfeld (2)", 2).onclick = () => selectImage("Hailee Steinfeld (2)", 2, "Your younger sister");
  document.getElementById("Sadie Sink (1)", 1).onclick = () => selectImage("Sadie Sink (1)", 1, "Your younger sister");

  //Your 1st aunt
  document.getElementById("Dua Lipa (3)", 3).onclick = () => selectImage("Dua Lipa (3)", 3, "Your 1st aunt");
  document.getElementById("Emilia Clarke (2)", 2).onclick = () => selectImage("Emilia Clarke (2)", 2, "Your 1st aunt");
  document.getElementById("Camilla Cabello (1)", 1).onclick = () => selectImage("Camilla Cabello (1)", 1, "Your 1st aunt");

  //Your 2nd aunt
  document.getElementById("Emma Watson (3)", 3).onclick = () => selectImage("Emma Watson (3)", 3, "Your 2nd aunt");
  document.getElementById("Kate Upton (2)", 2).onclick = () => selectImage("Kate Upton (2)", 2, "Your 2nd aunt");
  document.getElementById("Jessica Chastain (1)", 1).onclick = () => selectImage("Jessica Chastain (1)", 1, "Your 2nd aunt");

  //Your friends mother
  document.getElementById("Elizabeth OIsen (3)", 3).onclick = () => selectImage("Elizabeth OIsen (3)", 3, "Your friends mother");
  document.getElementById("Jennifer Lawrence (2)", 2).onclick = () => selectImage("Jennifer Lawrence (2)", 2, "Your friends mother");
  document.getElementById("Natalie Portman (1)", 1).onclick = () => selectImage("Natalie Portman (1)", 1, "Your friends mother");
  
//buttons
document.getElementById("copyButton").onclick = copyToClipboard;
document.getElementById("gamehub-btn").addEventListener("click", function() {
  window.location.href = "gamehub.html";
});

window.onload = () => {
  updateBudget();
  updateSelectedCelebs();
};

document.getElementById("suggestions-btn").addEventListener("click", function() {
  window.location.href = "suggestions.html";
});