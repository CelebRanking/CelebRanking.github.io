let budget = 30;
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

  //7 Points
  document.getElementById("Alexa Bliss (7)").onclick = () => selectImage("Alexa Bliss (7)");
  document.getElementById("Charlotte Flair (7)").onclick = () => selectImage("Charlotte Flair (7)");
  document.getElementById("Becky Lynch (7)").onclick = () => selectImage("Becky Lynch (7)");
  document.getElementById("Bayley (7)").onclick = () => selectImage("Bayley (7)");
  document.getElementById("Asuka (7)").onclick = () => selectImage("Asuka (7)");
  document.getElementById("Bianca Belair (7)").onclick = () => selectImage("Bianca Belair (7)");

  //6 Points
  document.getElementById("Rhea Ripley (6)").onclick = () => selectImage("Rhea Ripley (6)");
  document.getElementById("Carmella (6)").onclick = () => selectImage("Carmella (6)");
  document.getElementById("Liv Morgan (6)").onclick = () => selectImage("Liv Morgan (6)");
  document.getElementById("Jade Cargill (6)").onclick = () => selectImage("Jade Cargill (6)");
  document.getElementById("Mercedes Mone (6)").onclick = () => selectImage("Mercedes Mone (6)");
  document.getElementById("Ronda Rousey (6)").onclick = () => selectImage("Ronda Rousey (6)");

  //5 Points
  document.getElementById("Chelsea Green (5)").onclick = () => selectImage("Chelsea Green (5)");
  document.getElementById("Raquel Rodriguez (5)").onclick = () => selectImage("Raquel Rodriguez (5)");
  document.getElementById("Mandy Rose (5)").onclick = () => selectImage("Mandy Rose (5)");
  document.getElementById("Dana Brooke (5)").onclick = () => selectImage("Dana Brooke (5)");
  document.getElementById("Naomi (5)").onclick = () => selectImage("Naomi (5)");
  document.getElementById("Natalya (5)").onclick = () => selectImage("Natalya (5)");

  //4 Points
  document.getElementById("Zelina Vega (4)").onclick = () => selectImage("Zelina Vega (4)");
  document.getElementById("Sonya Deville (4)").onclick = () => selectImage("Sonya Deville (4)");
  document.getElementById("Trish Stratus (4)").onclick = () => selectImage("Trish Stratus (4)");
  document.getElementById("Shayna Baszler (4)").onclick = () => selectImage("Shayna Baszler (4)");
  document.getElementById("Alba Fyre (4)").onclick = () => selectImage("Alba Fyre (4)");
  document.getElementById("Iyo Sky (4)").onclick = () => selectImage("Iyo Sky (4)");

  //3 Points
  document.getElementById("Mia Yim (3)").onclick = () => selectImage("Mia Yim (3)");
  document.getElementById("Tegan Nox (3)").onclick = () => selectImage("Tegan Nox (3)");
  document.getElementById("Aliyah (3)").onclick = () => selectImage("Aliyah (3)");
  document.getElementById("Peyton Royce (3)").onclick = () => selectImage("Peyton Royce (3)");
  document.getElementById("Gigi Dolin (3)").onclick = () => selectImage("Gigi Dolin (3)");
  document.getElementById("Cora Jade (3)").onclick = () => selectImage("Cora Jade (3)");

  //2 Points
  document.getElementById("Tiffany Stratton (2)").onclick = () => selectImage("Tiffany Stratton (2)");
  document.getElementById("Scarlett (2)").onclick = () => selectImage("Scarlett (2)");
  document.getElementById("Lacey Evans (2)").onclick = () => selectImage("Lacey Evans (2)");
  document.getElementById("Dakota Kai (2)").onclick = () => selectImage("Dakota Kai (2)");
  document.getElementById("Ruby Riott (2)").onclick = () => selectImage("Ruby Riott (2)");
  document.getElementById("Scarlett Bordeaux (2)").onclick = () => selectImage("Scarlett Bordeaux (2)");

  //1 Points
  document.getElementById("Toni Storm (1)").onclick = () => selectImage("Toni Storm (1)");
  document.getElementById("Zoey Stark (1)").onclick = () => selectImage("Zoey Stark (1)");
  document.getElementById("Candice LeRae (1)").onclick = () => selectImage("Candice LeRae (1)");
  document.getElementById("Indi Hartwell (1)").onclick = () => selectImage("Indi Hartwell (1)");
  document.getElementById("Shotzi (1)").onclick = () => selectImage("Shotzi (1)");
  document.getElementById("Ember Moon (1)").onclick = () => selectImage("Ember Moon (1)");
  document.getElementById("Nia Jax (1)").onclick = () => selectImage("Nia Jax (1)");
  document.getElementById("Tamina (1)").onclick = () => selectImage("Tamina (1)");
  document.getElementById("Xia Li (1)").onclick = () => selectImage("Xia Li (1)");
  

//buttons
document.getElementById("copyButton").onclick = copyToClipboard;
document.getElementById("gamehub-btn").addEventListener("click", function() {
  window.location.href = "gamehub.html";
});

document.getElementById("suggestions-btn").addEventListener("click", function() {
  window.location.href = "suggestions.html";
});