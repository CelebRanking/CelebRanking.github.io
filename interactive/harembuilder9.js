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
  document.getElementById("Alexa Bliss").onclick = () => selectImage("Alexa Bliss");
  document.getElementById("Charlotte Flair").onclick = () => selectImage("Charlotte Flair");
  document.getElementById("Becky Lynch").onclick = () => selectImage("Becky Lynch");
  document.getElementById("Bayley").onclick = () => selectImage("Bayley");
  document.getElementById("Asuka").onclick = () => selectImage("Asuka");
  document.getElementById("Bianca Belair").onclick = () => selectImage("Bianca Belair");

  //6 Points
  document.getElementById("Rhea Ripley").onclick = () => selectImage("Rhea Ripley");
  document.getElementById("Carmella").onclick = () => selectImage("Carmella");
  document.getElementById("Liv Morgan").onclick = () => selectImage("Liv Morgan");
  document.getElementById("Jade Cargill").onclick = () => selectImage("Jade Cargill");
  document.getElementById("Mercedes Mone").onclick = () => selectImage("Mercedes Mone");
  document.getElementById("Ronda Rousey").onclick = () => selectImage("Ronda Rousey");

  //5 Points
  document.getElementById("Chelsea Green").onclick = () => selectImage("Chelsea Green");
  document.getElementById("Raquel Rodriguez").onclick = () => selectImage("Raquel Rodriguez");
  document.getElementById("Mandy Rose").onclick = () => selectImage("Mandy Rose");
  document.getElementById("Dana Brooke").onclick = () => selectImage("Dana Brooke");
  document.getElementById("Naomi").onclick = () => selectImage("Naomi");
  document.getElementById("Natalya").onclick = () => selectImage("Natalya");

  //4 Points
  document.getElementById("Zelina Vega").onclick = () => selectImage("Zelina Vega");
  document.getElementById("Sonya Deville").onclick = () => selectImage("Sonya Deville");
  document.getElementById("Trish Stratus").onclick = () => selectImage("Trish Stratus");
  document.getElementById("Shayna Baszler").onclick = () => selectImage("Shayna Baszler");
  document.getElementById("Alba Fyre").onclick = () => selectImage("Alba Fyre");
  document.getElementById("Iyo Sky").onclick = () => selectImage("Iyo Sky");

  //3 Points
  document.getElementById("Mia Yim").onclick = () => selectImage("Mia Yim");
  document.getElementById("Tegan Nox").onclick = () => selectImage("Tegan Nox");
  document.getElementById("Aliyah").onclick = () => selectImage("Aliyah");
  document.getElementById("Peyton Royce").onclick = () => selectImage("Peyton Royce");
  document.getElementById("Gigi Dolin").onclick = () => selectImage("Gigi Dolin");
  document.getElementById("Cora Jade").onclick = () => selectImage("Cora Jade");

  //2 Points
  document.getElementById("Tiffany Stratton").onclick = () => selectImage("Tiffany Stratton");
  document.getElementById("Scarlett").onclick = () => selectImage("Scarlett");
  document.getElementById("Lacey Evans").onclick = () => selectImage("Lacey Evans");
  document.getElementById("Dakota Kai").onclick = () => selectImage("Dakota Kai");
  document.getElementById("Ruby Riott").onclick = () => selectImage("Ruby Riott");
  document.getElementById("Scarlett Bordeaux").onclick = () => selectImage("Scarlett Bordeaux");

  //1 Points
  document.getElementById("Toni Storm").onclick = () => selectImage("Toni Storm");
  document.getElementById("Zoey Stark").onclick = () => selectImage("Zoey Stark");
  document.getElementById("Candice LeRae").onclick = () => selectImage("Candice LeRae");
  document.getElementById("Indi Hartwell").onclick = () => selectImage("Indi Hartwell");
  document.getElementById("Shotzi").onclick = () => selectImage("Shotzi");
  document.getElementById("Ember Moon").onclick = () => selectImage("Ember Moon");
  document.getElementById("Nia Jax").onclick = () => selectImage("Nia Jax");
  document.getElementById("Tamina").onclick = () => selectImage("Tamina");
  document.getElementById("Xia Li").onclick = () => selectImage("Xia Li");
  

//buttons
document.getElementById("copyButton").onclick = copyToClipboard;
document.getElementById("gamehub-btn").addEventListener("click", function() {
  window.location.href = "gamehub.html";
});

document.getElementById("suggestions-btn").addEventListener("click", function() {
  window.location.href = "suggestions.html";
});