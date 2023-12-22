let budget = 30;
const selectedcelebs = [];

const updateBudget = () => {
  document.getElementById("budget").textContent = budget;
};

const updateselectedcelebs = () => {
  const joinedCelebs = "My celeb harem: " + selectedcelebs.map(item => item.name).join(", ");
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

  //Goalkeeper
  document.getElementById("Alexa Bliss (7)").onclick = () => selectImage("Alexa Bliss (7)", 7, "Goalkeeper");
  document.getElementById("Charlotte Flair (7)").onclick = () => selectImage("Charlotte Flair (7)", 7, "Goalkeeper");
  document.getElementById("Becky Lynch (7)").onclick = () => selectImage("Becky Lynch (7)", 7, "Goalkeeper");
  document.getElementById("Bayley (7)").onclick = () => selectImage("Bayley (7)", 7, "Goalkeeper");
  document.getElementById("Asuka (7)").onclick = () => selectImage("Asuka (7)", 7, "Goalkeeper");
  document.getElementById("Bianca Belair (7)").onclick = () => selectImage("Bianca Belair (7)", 7, "Goalkeeper");

  //Left-Back
  document.getElementById("Rhea Ripley (6)").onclick = () => selectImage("Rhea Ripley (6)", 6, "Left-Back");
  document.getElementById("Carmella (6)", 6).onclick = () => selectImage("Carmella (6)", 6, "Left-Back");
  document.getElementById("Liv Morgan (6)", 6).onclick = () => selectImage("Liv Morgan (6)", 6, "Left-Back");
  document.getElementById("Jade Cargill (6)", 6).onclick = () => selectImage("Jade Cargill (6)", 6, "Left-Back");
  document.getElementById("Mercedes Mone (6)", 6).onclick = () => selectImage("Mercedes Mone (6)", 6, "Left-Back");
  document.getElementById("Ronda Rousey (6)", 6).onclick = () => selectImage("Ronda Rousey (6)", 6, "Left-Back");

  //Center-Back (left)
  document.getElementById("Chelsea Green (5)", 5).onclick = () => selectImage("Chelsea Green (5)", 5, "Centre-Back (left)");
  document.getElementById("Raquel Rodriguez (5)", 5).onclick = () => selectImage("Raquel Rodriguez (5)", 5, "Centre-Back (left)");
  document.getElementById("Mandy Rose (5)", 5).onclick = () => selectImage("Mandy Rose (5)", 5, "Centre-Back (left)");
  document.getElementById("Dana Brooke (5)", 5).onclick = () => selectImage("Dana Brooke (5)", 5, "Centre-Back (left)");
  document.getElementById("Naomi (5)", 5).onclick = () => selectImage("Naomi (5)", 5, "Centre-Back (left)");
  document.getElementById("Natalya (5)", 5).onclick = () => selectImage("Natalya (5)", 5, "Centre-Back (left)");

  //Centre-Back (right)
  document.getElementById("Zelina Vega (4)").onclick = () => selectImage("Zelina Vega (4)", 4, "Centre-Back (right)");
  document.getElementById("Sonya Deville (4)").onclick = () => selectImage("Sonya Deville (4)", 4, "Centre-Back (right)");
  document.getElementById("Trish Stratus (4)").onclick = () => selectImage("Trish Stratus (4)", 4, "Centre-Back (right)");
  document.getElementById("Shayna Baszler (4)").onclick = () => selectImage("Shayna Baszler (4)", 4, "Centre-Back (right)");
  document.getElementById("Alba Fyre (4)").onclick = () => selectImage("Alba Fyre (4)", 4, "Centre-Back (right)");
  document.getElementById("Iyo Sky (4)").onclick = () => selectImage("Iyo Sky (4)", 4, "Centre-Back (right)");

  //Right-Back
  document.getElementById("Mia Yim (3)").onclick = () => selectImage("Mia Yim (3)", 3, "Right-Back");
  document.getElementById("Tegan Nox (3)").onclick = () => selectImage("Tegan Nox (3)", 3, "Right-Back");
  document.getElementById("Aliyah (3)").onclick = () => selectImage("Aliyah (3)", 3, "Right-Back");
  document.getElementById("Peyton Royce (3)").onclick = () => selectImage("Peyton Royce (3)", 3, "Right-Back");
  document.getElementById("Gigi Dolin (3)").onclick = () => selectImage("Gigi Dolin (3)", 3, "Right-Back");
  document.getElementById("Cora Jade (3)").onclick = () => selectImage("Cora Jade (3)", 3, "Right-Back");

  //Centre-Defensive-Midfield
  document.getElementById("Chelsea Green (5)", 5).onclick = () => selectImage("Chelsea Green (5)", 5, "Centre-Defensive-Midfield");
  document.getElementById("Raquel Rodriguez (5)", 5).onclick = () => selectImage("Raquel Rodriguez (5)", 5, "Centre-Defensive-Midfield");
  document.getElementById("Mandy Rose (5)", 5).onclick = () => selectImage("Mandy Rose (5)", 5, "Centre-Defensive-Midfield");
  document.getElementById("Dana Brooke (5)", 5).onclick = () => selectImage("Dana Brooke (5)", 5, "Centre-Defensive-Midfield");
  document.getElementById("Naomi (5)", 5).onclick = () => selectImage("Naomi (5)", 5, "Centre-Defensive-Midfield");
  document.getElementById("Natalya (5)", 5).onclick = () => selectImage("Natalya (5)", 5, "Centre-Defensive-Midfield");

  //Centre-Midfield
  document.getElementById("Chelsea Green (5)", 5).onclick = () => selectImage("Chelsea Green (5)", 5, "Centre-Midfield");
  document.getElementById("Raquel Rodriguez (5)", 5).onclick = () => selectImage("Raquel Rodriguez (5)", 5, "Centre-Midfield");
  document.getElementById("Mandy Rose (5)", 5).onclick = () => selectImage("Mandy Rose (5)", 5, "Centre-Midfield");
  document.getElementById("Dana Brooke (5)", 5).onclick = () => selectImage("Dana Brooke (5)", 5, "Centre-Midfield");
  document.getElementById("Naomi (5)", 5).onclick = () => selectImage("Naomi (5)", 5, "Centre-Midfield");
  document.getElementById("Natalya (5)", 5).onclick = () => selectImage("Natalya (5)", 5, "Centre-Midfield");

  //Centre-Attacking-Midfield
  document.getElementById("Chelsea Green (5)", 5).onclick = () => selectImage("Chelsea Green (5)", 5, "Centre-Attacking-Midfield");
  document.getElementById("Raquel Rodriguez (5)", 5).onclick = () => selectImage("Raquel Rodriguez (5)", 5, "Centre-Attacking-Midfield");
  document.getElementById("Mandy Rose (5)", 5).onclick = () => selectImage("Mandy Rose (5)", 5, "Centre-Attacking-Midfield");
  document.getElementById("Dana Brooke (5)", 5).onclick = () => selectImage("Dana Brooke (5)", 5, "Centre-Attacking-Midfield");
  document.getElementById("Naomi (5)", 5).onclick = () => selectImage("Naomi (5)", 5, "Centre-Attacking-Midfield");
  document.getElementById("Natalya (5)", 5).onclick = () => selectImage("Natalya (5)", 5, "Centre-Attacking-Midfield");

  //Left-Wing
  document.getElementById("Chelsea Green (5)", 5).onclick = () => selectImage("Chelsea Green (5)", 5, "Left-Wing");
  document.getElementById("Raquel Rodriguez (5)", 5).onclick = () => selectImage("Raquel Rodriguez (5)", 5, "Left-Wing");
  document.getElementById("Mandy Rose (5)", 5).onclick = () => selectImage("Mandy Rose (5)", 5, "Left-Wing");
  document.getElementById("Dana Brooke (5)", 5).onclick = () => selectImage("Dana Brooke (5)", 5, "Left-Wing");
  document.getElementById("Naomi (5)", 5).onclick = () => selectImage("Naomi (5)", 5, "Left-Wing");
  document.getElementById("Natalya (5)", 5).onclick = () => selectImage("Natalya (5)", 5, "Left-Wing");

  //Striker
  document.getElementById("Chelsea Green (5)", 5).onclick = () => selectImage("Chelsea Green (5)", 5, "Striker");
  document.getElementById("Raquel Rodriguez (5)", 5).onclick = () => selectImage("Raquel Rodriguez (5)", 5, "Striker");
  document.getElementById("Mandy Rose (5)", 5).onclick = () => selectImage("Mandy Rose (5)", 5, "Striker");
  document.getElementById("Dana Brooke (5)", 5).onclick = () => selectImage("Dana Brooke (5)", 5, "Striker");
  document.getElementById("Naomi (5)", 5).onclick = () => selectImage("Naomi (5)", 5, "Striker");
  document.getElementById("Natalya (5)", 5).onclick = () => selectImage("Natalya (5)", 5, "Striker");

  //Right-Wing
  document.getElementById("Chelsea Green (5)", 5).onclick = () => selectImage("Chelsea Green (5)", 5, "Right-Wing");
  document.getElementById("Raquel Rodriguez (5)", 5).onclick = () => selectImage("Raquel Rodriguez (5)", 5, "Right-Wing");
  document.getElementById("Mandy Rose (5)", 5).onclick = () => selectImage("Mandy Rose (5)", 5, "Right-Wing");
  document.getElementById("Dana Brooke (5)", 5).onclick = () => selectImage("Dana Brooke (5)", 5, "Right-Wing");
  document.getElementById("Naomi (5)", 5).onclick = () => selectImage("Naomi (5)", 5, "Right-Wing");
  document.getElementById("Natalya (5)", 5).onclick = () => selectImage("Natalya (5)", 5, "Right-Wing");

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