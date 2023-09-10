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

  //7 Points
  document.getElementById("Heidi Klum (7)").onclick = () => selectImage("Heidi Klum (7)");
  document.getElementById("Leni Klum (7)").onclick = () => selectImage("Leni Klum (7)");
  document.getElementById("Lena Meyer Landrut (7)").onclick = () => selectImage("Lena Meyer Landrut (7)");
  document.getElementById("Diane Kruger (7)").onclick = () => selectImage("Diane Kruger (7)");
  document.getElementById("Alica Schmidt (7)").onclick = () => selectImage("Alica Schmidt (7)");
  document.getElementById("Lena Gercke (7)").onclick = () => selectImage("Lena Gercke (7)");

  //6 Points
  document.getElementById("Elena Kamperi (6)").onclick = () => selectImage("Elena Kamperi (6)");
  document.getElementById("Helene Fischer (6)").onclick = () => selectImage("Helene Fischer (6)");
  document.getElementById("Vannessa Mai (6)").onclick = () => selectImage("Vannessa Mai (6)");
  document.getElementById("Stefanie Giesinger (6)").onclick = () => selectImage("Stefanie Giesinger (6)");
  document.getElementById("Palina Rojinski (6)").onclick = () => selectImage("Palina Rojinski (6)");
  document.getElementById("Verona Pooth (6)").onclick = () => selectImage("Verona Pooth (6)");

  //5 Points
  document.getElementById("Sophia Thomalla (5)").onclick = () => selectImage("Sophia Thomalla (5)");
  document.getElementById("Rebecca Mir (5)").onclick = () => selectImage("Rebecca Mir (5)");
  document.getElementById("Anne Wünsche (5)").onclick = () => selectImage("Anne Wünsche (5)");
  document.getElementById("Sarah Engels (5)").onclick = () => selectImage("Sarah Engels (5)");
  document.getElementById("Micaela Schäfer (5)").onclick = () => selectImage("Micaela Schäfer (5)");
  document.getElementById("Barbara Schöneberger (5)").onclick = () => selectImage("Barbara Schöneberger (5)");

  //4 Points
  document.getElementById("Motsi Mabuse (4)").onclick = () => selectImage("Motsi Mabuse (4)");
  document.getElementById("Annemarie Carpendale (4)").onclick = () => selectImage("Annemarie Carpendale (4)");
  document.getElementById("Sylvie Meis (4)").onclick = () => selectImage("Sylvie Meis (4)");
  document.getElementById("Victoria Swarowski (4)").onclick = () => selectImage("Victoria Swarowski (4)");
  document.getElementById("Janine Kunze (4)").onclick = () => selectImage("Janine Kunze (4)");
  document.getElementById("Laura Müller (4)").onclick = () => selectImage("Laura Müller (4)");

  //3 Points
  document.getElementById("Barbara Meier (3)").onclick = () => selectImage("Barbara Meier (3)");
  document.getElementById("Nilam Farooq (3)").onclick = () => selectImage("Nilam Farooq (3)");
  document.getElementById("Cheyenne Phade (3)").onclick = () => selectImage("Cheyenne Phade (3)");
  document.getElementById("Valentina Phade (3)").onclick = () => selectImage("Valentina Phade (3)");
  document.getElementById("Ann-Katrin Götze (3)").onclick = () => selectImage("Ann-Katrin Götze (3)");
  document.getElementById("Cathy Hummels (3)").onclick = () => selectImage("Cathy Hummels (3)");

  //2 Points
  document.getElementById("Dagi Bee (2)").onclick = () => selectImage("Dagi Bee (2)");
  document.getElementById("Evelyn Burdecki (2)").onclick = () => selectImage("Evelyn Burdecki (2)");
  document.getElementById("Jessica Haller (2)").onclick = () => selectImage("Jessica Haller (2)");
  document.getElementById("Emmy Russ (2)").onclick = () => selectImage("Emmy Russ (2)");
  document.getElementById("Sarah Knappik (2)").onclick = () => selectImage("Sarah Knappik (2)");
  document.getElementById("Claudia Obert (2)").onclick = () => selectImage("Claudia Obert (2)");

  //1 Point
  document.getElementById("Nazan Eckes (1)").onclick = () => selectImage("Nazan Eckes (1)");
  document.getElementById("Angelina Pannek (1)").onclick = () => selectImage("Angelina Pannek (1)");
  document.getElementById("Beatrice Egli (1)").onclick = () => selectImage("Beatrice Egli (1)");
  document.getElementById("Betty Taube (1)").onclick = () => selectImage("Betty Taube (1)");
  document.getElementById("Carina Spack (1)").onclick = () => selectImage("Carina Spack (1)");
  document.getElementById("Cathy Lugner (1)").onclick = () => selectImage("Cathy Lugner (1)");
  document.getElementById("Cheyenne Ochsenknecht (1)").onclick = () => selectImage("Cheyenne Ochsenknecht (1)");
  document.getElementById("Daniela Katzenberger (1)").onclick = () => selectImage("Daniela Katzenberger (1)");
  document.getElementById("Katja Krasavice (1)").onclick = () => selectImage("Katja Krasavice (1)");  

//buttons
document.getElementById("copyButton").onclick = copyToClipboard;
document.getElementById("gamehub-btn").addEventListener("click", function() {
  window.location.href = "gamehub.html";
});

document.getElementById("suggestions-btn").addEventListener("click", function() {
  window.location.href = "suggestions.html";
});