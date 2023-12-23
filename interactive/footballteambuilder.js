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
  document.getElementById("Mapi Leon (3)", 3).onclick = () => selectImage("Mapi Leon (3)", 3, "Centre-Back-left");
  document.getElementById("Amanda Ilestedt (2)", 2).onclick = () => selectImage("Amanda Ilestedt (2)", 2, "Centre-Back-left");
  document.getElementById("Sara Doorsoun (1)", 1).onclick = () => selectImage("Sara Doorsoun (1)", 1, "Centre-Back-left");

  //Centre-Back (right)
  document.getElementById("Jana Fernandez (3)", 3).onclick = () => selectImage("Jana Fernandez (3)", 3, "Centre-Back-right");
  document.getElementById("Kadeisha Buchanan (2)", 2).onclick = () => selectImage("Kadeisha Buchanan (2)", 2, "Centre-Back-right");
  document.getElementById("Irene Paredes (1)", 1).onclick = () => selectImage("Irene Paredes (1)", 1, "Centre-Back-right");

  //Right-Back
  document.getElementById("Giulia Gwinn (3)", 3).onclick = () => selectImage("Giulia Gwinn (3)", 3, "Right-Back");
  document.getElementById("Lucy Bronze (2)", 2).onclick = () => selectImage("Lucy Bronze (2)", 2, "Right-Back");
  document.getElementById("Eve Perisset (1)", 1).onclick = () => selectImage("Eve Perisset (1)", 1, "Right-Back");
  document.getElementById("Ashley Lawrence (3)", 3).onclick = () => selectImage("Ashley Lawrence (3)", 3, "Right-Back");
  document.getElementById("Tuva Hansen (2)", 2).onclick = () => selectImage("Tuva Hansen (2)", 2, "Right-Back");
  document.getElementById("Maximilliane Rall (1)", 1).onclick = () => selectImage("Maximilliane Rall (1)", 1, "Right-Back");

  //Centre-Midfield (left)
  document.getElementById("Ingrid Syrstad Engen (3)", 3).onclick = () => selectImage("Ingrid Syrstad Engen (3)", 3, "Centre-Midfield-left");
  document.getElementById("Lena Oberdorf (2)", 2).onclick = () => selectImage("Lena Oberdorf (2)", 2, "Centre-Midfield-left");
  document.getElementById("Tierna Davidson (1)", 1).onclick = () => selectImage("Tierna Davidson (1)", 1, "Centre-Midfield-left");

  //Centre-Midfield (right)
  document.getElementById("Kristie Mewis (3)", 3).onclick = () => selectImage("Kristie Mewis (3)", 3, "Centre-Midfield-right");
  document.getElementById("Jennifer Hermoso (2)", 2).onclick = () => selectImage("Jennifer Hermoso (2)", 2, "Centre-Midfield-right");
  document.getElementById("Svenja Huth (1)", 1).onclick = () => selectImage("Svenja Huth (1)", 1, "Centre-Midfield-right");
  document.getElementById("Julie Ertz (3)", 3).onclick = () => selectImage("Julie Ertz (3)", 3, "Centre-Midfield-right");
  document.getElementById("Jackie Groenen (2)", 2).onclick = () => selectImage("Jackie Groenen (2)", 2, "Centre-Midfield-right");
  document.getElementById("Erin Cuthbert (1)", 1).onclick = () => selectImage("Erin Cuthbert (1)", 1, "Centre-Midfield-right");

  //Centre-Attacking-Midfield (left)
  document.getElementById("Aitana Bonmati (3)", 3).onclick = () => selectImage("Aitana Bonmati (3)", 3, "Centre-Attacking-Midfield-left");
  document.getElementById("Georgia Stanway (2)", 2).onclick = () => selectImage("Georgia Stanway (2)", 2, "Centre-Attacking-Midfield-left");
  document.getElementById("Glodis Perla Viggosdottir (1)", 1).onclick = () => selectImage("Glodis Perla Viggosdottir (1)", 1, "Centre-Attacking-Midfield-left");

  //Centre-Attacking-Midfield (right)
  document.getElementById("Alexia Putellas (3)", 3).onclick = () => selectImage("Alexia Putellas (3)", 3, "Centre-Attacking-Midfield-right");
  document.getElementById("Korbin Albert (2)", 2).onclick = () => selectImage("Korbin Albert (2)", 2, "Centre-Attacking-Midfield-right");
  document.getElementById("Lina Magull (1)", 1).onclick = () => selectImage("Lina Magull (1)", 1, "Centre-Attacking-Midfield-right");
  document.getElementById("Jule Brand (3)", 3).onclick = () => selectImage("Jule Brand (3)", 3, "Centre-Attacking-Midfield-right");
  document.getElementById("Johanna Rytting Kaneryd (2)", 2).onclick = () => selectImage("Johanna Rytting Kaneryd (2)", 2, "Centre-Attacking-Midfield-right");
  document.getElementById("Laurina Fazer (1)", 1).onclick = () => selectImage("Laurina Fazer (1)", 1, "Centre-Attacking-Midfield-right");

  //Striker (left)
  document.getElementById("Alex Morgan (3)", 3).onclick = () => selectImage("Alex Morgan (3)", 3, "Striker-left");
  document.getElementById("Alisha Lehmann (2)", 2).onclick = () => selectImage("Alisha Lehmann (2)", 2, "Striker-left");
  document.getElementById("Sydney Leroux (1)", 1).onclick = () => selectImage("Sydney Leroux (1)", 1, "Striker-left");

  //Striker (right)
  document.getElementById("Ana Maria Markovic (3)", 3).onclick = () => selectImage("Ana Maria Markovic (3)", 3, "Striker-right");
  document.getElementById("Jordyn Huitema (2)", 2).onclick = () => selectImage("Jordyn Huitema (2)", 2, "Striker-right");
  document.getElementById("Lieke Martens (1)", 1).onclick = () => selectImage("Lieke Martens (1)", 1, "Striker-right");
  document.getElementById("Sam Kerr (3)", 3).onclick = () => selectImage("Sam Kerr (3)", 3, "Striker-right");
  document.getElementById("Fridolina Rolfö (2)", 2).onclick = () => selectImage("Fridolina Rolfö (2)", 2, "Striker-right");
  document.getElementById("Salma Paralluelo (1)", 1).onclick = () => selectImage("Salma Paralluelo (1)", 1, "Striker-right");

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