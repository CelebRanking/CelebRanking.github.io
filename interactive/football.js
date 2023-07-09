// Sample list of female celebrity names
const celebrities = [
  "Angelina Jolie",
  "Beyoncé",
  "Emma Watson",
  "Jennifer Lawrence",
  "Scarlett Johansson",
  "Taylor Swift"
];

const team = []; // Array to store drafted team players

// Function to render the list of celebrities
function renderCelebrities() {
  const celebritiesList = document.getElementById("celebrities-list");
  celebritiesList.innerHTML = ""; // Clear the list

  for (const celebrity of celebrities) {
    const listItem = document.createElement("li");
    listItem.textContent = celebrity;
    listItem.addEventListener("click", () => draftPlayer(celebrity));
    celebritiesList.appendChild(listItem);
  }
}

// Function to handle drafting a player
function draftPlayer(celebrity) {
  const teamList = document.getElementById("team-list");
  
  // Check if the player is already in the team
  if (team.includes(celebrity)) {
    alert("Player already drafted!");
    return;
  }
  
  // Check if the team is already full (limit to 11 players)
  if (team.length >= 11) {
    alert("Team is already full!");
    return;
  }

  team.push(celebrity);
  
  const listItem = document.createElement("li");
  listItem.textContent = celebrity;
  teamList.appendChild(listItem);

  // Remove the drafted celebrity from the available list
  const celebritiesList = document.getElementById("celebrities-list");
  celebritiesList.removeChild(celebritiesList.childNodes[0]);
  
  if (team.length === 11) {
    alert("Team is complete!");
  }
}

// Render the initial list of celebrities
renderCelebrities();