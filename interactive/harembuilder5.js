let budget = 20;
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
document.getElementById("Hailee Steinfeld (5)").onclick = () => selectImage("Hailee Steinfeld (5)");
document.getElementById("Emilia Clarke (5)").onclick = () => selectImage("Emilia Clarke (5)");
document.getElementById("Selena Gomez (5)").onclick = () => selectImage("Selena Gomez (5)");
document.getElementById("Elizabeth Olsen (5)").onclick = () => selectImage("Elizabeth Olsen (5)");
document.getElementById("Vanessa Hudgens (5)").onclick = () => selectImage("Vanessa Hudgens (5)");
document.getElementById("Megan Fox (5)").onclick = () => selectImage("Megan Fox (5)");
document.getElementById("Emma Watson (5)").onclick = () => selectImage("Emma Watson (5)");
document.getElementById("Natalie Portman (5)").onclick = () => selectImage("Natalie Portman (5)");
document.getElementById("Angelina Jolie (5)").onclick = () => selectImage("Angelina Jolie (5)");

// 4 Points
document.getElementById("Lily-Rose Depp (4)").onclick = () => selectImage("Lily-Rose Depp (4)");
document.getElementById("Lily James (4)").onclick = () => selectImage("Lily James (4)");
document.getElementById("Kaley Cuoco (4)").onclick = () => selectImage("Kaley Cuoco (4)");
document.getElementById("Penelope Cruz (4)").onclick = () => selectImage("Penelope Cruz (4)");
document.getElementById("Keira Knightley (4)").onclick = () => selectImage("Keira Knightley (4)");
document.getElementById("Olivia Wilde (4)").onclick = () => selectImage("Olivia Wilde (4)");
document.getElementById("Rachel McAdams (4)").onclick = () => selectImage("Rachel McAdams (4)");
document.getElementById("Lucy Hale (4)").onclick = () => selectImage("Lucy Hale (4)");
document.getElementById("Alessandra Ambrosio (4)").onclick = () => selectImage("Alessandra Ambrosio (4)");

// 3 Points
document.getElementById("Eva Mendes (3)").onclick = () => selectImage("Eva Mendes (3)");
document.getElementById("Meghan Markle (3)").onclick = () => selectImage("Meghan Markle (3)");
document.getElementById("Kate Middleton (3)").onclick = () => selectImage("Kate Middleton (3)");
document.getElementById("Dakota Johnson (3)").onclick = () => selectImage("Dakota Johnson (3)");
document.getElementById("Camila Cabello (3)").onclick = () => selectImage("Camila Cabello (3)");
document.getElementById("Priyanka Chopra (3)").onclick = () => selectImage("Priyanka Chopra (3)");
document.getElementById("Barbara Palvin (3)").onclick = () => selectImage("Barbara Palvin (3)");
document.getElementById("Lily Collins (3)").onclick = () => selectImage("Lily Collins (3)");
document.getElementById("Zooey Deschanel (3)").onclick = () => selectImage("Zooey Deschanel (3)");

// 2 Points
document.getElementById("Lily Aldridge (2)").onclick = () => selectImage("Lily Aldridge (2)");
document.getElementById("Jessica Biel (2)").onclick = () => selectImage("Jessica Biel (2)");
document.getElementById("Demi Lovato (2)").onclick = () => selectImage("Demi Lovato (2)");
document.getElementById("Mila Kunis (2)").onclick = () => selectImage("Mila Kunis (2)");
document.getElementById("Amber Heard (2)").onclick = () => selectImage("Amber Heard (2)");
document.getElementById("Anne Hathaway (2)").onclick = () => selectImage("Anne Hathaway (2)");
document.getElementById("Jennifer Aniston (2)").onclick = () => selectImage("Jennifer Aniston (2)");
document.getElementById("Bella Hadid (2)").onclick = () => selectImage("Bella Hadid (2)");
document.getElementById("Sarah Jessica Parker (2)").onclick = () => selectImage("Sarah Jessica Parker (2)");

// 1 Point
document.getElementById("Sandra Bullock (1)").onclick = () => selectImage("Sandra Bullock (1)");
document.getElementById("Jessica Alba (1)").onclick = () => selectImage("Jessica Alba (1)");
document.getElementById("Jennifer Love Hewitt (1)").onclick = () => selectImage("Jennifer Love Hewitt (1)");
document.getElementById("Margaret Qualley (1)").onclick = () => selectImage("Margaret Qualley (1)");
document.getElementById("Ashley Benson (1)").onclick = () => selectImage("Ashley Benson (1)");
document.getElementById("Jenna Dewan (1)").onclick = () => selectImage("Jenna Dewan (1)");
document.getElementById("Leighton Meester (1)").onclick = () => selectImage("Leighton Meester (1)");
document.getElementById("Shay Mitchell (1)").onclick = () => selectImage("Shay Mitchell (1)");
document.getElementById("Rachel Bilson (1)").onclick = () => selectImage("Rachel Bilson (1)");

//buttons
document.getElementById("copyButton").onclick = copyToClipboard;
document.getElementById("gamehub-btn").addEventListener("click", function() {
  window.location.href = "gamehub.html";
});