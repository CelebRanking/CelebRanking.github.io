let budget = 25;
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
  document.getElementById("globalpoints").innerHTML = "POINTS: " + budget;
  };

// 5 Points
document.getElementById("Emma Watson").onclick = () => selectImage("Emma Watson");
document.getElementById("Emilia Clarke").onclick = () => selectImage("Emilia Clarke");
document.getElementById("Lily James").onclick = () => selectImage("Lily James");
document.getElementById("Keira Knightley").onclick = () => selectImage("Keira Knightley");
document.getElementById("Lily Collins").onclick = () => selectImage("Lily Collins");
document.getElementById("Cara Delevingne").onclick = () => selectImage("Cara Delevingne");

// 4 Points
document.getElementById("Kate Beckinsale").onclick = () => selectImage("Kate Beckinsale");
document.getElementById("Sophie Turner").onclick = () => selectImage("Sophie Turner");
document.getElementById("Rachel Weisz").onclick = () => selectImage("Rachel Weisz");
document.getElementById("Kate Winslet").onclick = () => selectImage("Kate Winslet");
document.getElementById("Kate Middleton").onclick = () => selectImage("Kate Middleton");
document.getElementById("Rita Ora").onclick = () => selectImage("Rita Ora");

// 3 Points
document.getElementById("Jenna Coleman").onclick = () => selectImage("Jenna Coleman");
document.getElementById("Ellie Goulding").onclick = () => selectImage("Ellie Goulding");
document.getElementById("Carey Mulligan").onclick = () => selectImage("Carey Mulligan");
document.getElementById("Naomi Campbell").onclick = () => selectImage("Naomi Campbell");
document.getElementById("Kate Moss").onclick = () => selectImage("Kate Moss");
document.getElementById("Victoria Beckham").onclick = () => selectImage("Victoria Beckham");

// 2 Points
document.getElementById("Emma Thompson").onclick = () => selectImage("Emma Thompson");
document.getElementById("Judi Dench").onclick = () => selectImage("Judi Dench");
document.getElementById("Helen Mirren").onclick = () => selectImage("Helen Mirren");
document.getElementById("Thandie Newton").onclick = () => selectImage("Thandie Newton");
document.getElementById("Jodie Comer").onclick = () => selectImage("Jodie Comer");
document.getElementById("Rosamund Pike").onclick = () => selectImage("Rosamund Pike");

// 1 Point
document.getElementById("Helena Bonham Carter").onclick = () => selectImage("Helena Bonham Carter");
document.getElementById("Tilda Swinton").onclick = () => selectImage("Tilda Swinton");
document.getElementById("Jodie Comer").onclick = () => selectImage("Jodie Comer");
document.getElementById("Sophie Ellis-Bextor").onclick = () => selectImage("Sophie Ellis-Bextor");
document.getElementById("Sienna Miller").onclick = () => selectImage("Sienna Miller");
document.getElementById("Kelly Brook").onclick = () => selectImage("Kelly Brook");
document.getElementById("Florence Welch").onclick = () => selectImage("Florence Welch");

//buttons
document.getElementById("copyButton").onclick = copyToClipboard;
document.getElementById("gamehub-btn").addEventListener("click", function() {
  window.location.href = "gamehub.html";
});

document.getElementById("suggestions-btn").addEventListener("click", function() {
  window.location.href = "suggestions.html";
});