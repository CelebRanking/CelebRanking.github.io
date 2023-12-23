let budget = 30;
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

  //Goalkeeper
  document.getElementById("Merle Frohms (3)").onclick = () => selectImage("Merle Frohms (3)", 3, "Goalkeeper");
  document.getElementById("Hope Solo (2)").onclick = () => selectImage("Hope Solo (2)", 2, "Goalkeeper");
  document.getElementById("Almuth Schult (1)").onclick = () => selectImage("Almuth Schult (1)", 1, "Goalkeeper");
  document.getElementById("Manuela Zinsberger (3)").onclick = () => selectImage("Manuela Zinsberger (3)", 3, "Goalkeeper");
  document.getElementById("Stephanie Labbe (2)").onclick = () => selectImage("Stephanie Labbe (2)", 2, "Goalkeeper");
  document.getElementById("Carly Telford (1)").onclick = () => selectImage("Carly Telford (1)", 1, "Goalkeeper");

  //Left-Back
  document.getElementById("Sakina Karchaoui (3)", 3).onclick = () => selectImage("Sakina Karchaoui (3)", 3, "Left-Back");
  document.getElementById("Magdalena Eriksson (2)", 2).onclick = () => selectImage("Magdalena Eriksson (2)", 2, "Left-Back");
  document.getElementById("Verena Hanshaw (1)", 1).onclick = () => selectImage("Verena Hanshaw (1)", 1, "Left-Back");
  document.getElementById("Niamh Charles (3)", 3).onclick = () => selectImage("Niamh Charles (3)", 3, "Left-Back");
  document.getElementById("Ines Belloumou (2)", 2).onclick = () => selectImage("Ines Belloumou (2)", 2, "Left-Back");
  document.getElementById("Nuria Rabano (1)", 1).onclick = () => selectImage("Nuria Rabano (1)", 1, "Left-Back");

  //Center-Back (left)
  document.getElementById("Mapi Leon (3)", 3).onclick = () => selectImage("Mapi Leon (3)", 3, "Centre-Back");
  document.getElementById("Amanda Ilestedt (2)", 2).onclick = () => selectImage("Amanda Ilestedt (2)", 2, "Centre-Back");
  document.getElementById("Sara Doorsoun (1)", 1).onclick = () => selectImage("Sara Doorsoun (1)", 1, "Centre-Back");

  //Centre-Back (right)
  document.getElementById("Jana Fernandez (3)", 3).onclick = () => selectImage("Jana Fernandez (3)", 3, "Centre-Back");
  document.getElementById("Kadeisha Buchanan (2)", 2).onclick = () => selectImage("Kadeisha Buchanan (2)", 2, "Centre-Back");
  document.getElementById("Irene Paredes (1)", 1).onclick = () => selectImage("Irene Paredes (1)", 1, "Centre-Back");

  //Right-Back
  document.getElementById("Giulia Gwinn (3)", 3).onclick = () => selectImage("Giulia Gwinn (3)", 3, "Right-Back");
  document.getElementById("Lucy Bronze (2)", 2).onclick = () => selectImage("Lucy Bronze (2)", 2, "Right-Back");
  document.getElementById("Eve Perisset (1)", 1).onclick = () => selectImage("Eve Perisset (1)", 1, "Right-Back");
  document.getElementById("Ashley Lawrence (3)", 3).onclick = () => selectImage("Ashley Lawrence (3)", 3, "Right-Back");
  document.getElementById("Tuva Hansen (2)", 2).onclick = () => selectImage("Tuva Hansen (2)", 2, "Right-Back");
  document.getElementById("Maximilliane Rall (1)", 1).onclick = () => selectImage("Maximilliane Rall (1)", 1, "Right-Back");

  //Centre-Midfield
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

  //Centre-Attacking-Midfield
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

  //Striker
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