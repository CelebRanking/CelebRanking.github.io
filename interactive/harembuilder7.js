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

  //6 Points 
  document.getElementById("Jennifer Lawrence").onclick = () => selectImage("Jennifer Lawrence");
  document.getElementById("Hailee Steinfeld").onclick = () => selectImage("Hailee Steinfeld");
  document.getElementById("Elizabeth Olsen").onclick = () => selectImage("Elizabeth Olsen");
  document.getElementById("Sydney Sweeney").onclick = () => selectImage("Sydney Sweeney");
  document.getElementById("Alexandra Daddario").onclick = () => selectImage("Alexandra Daddario");
  document.getElementById("Scarlett Johansson").onclick = () => selectImage("Scarlett Johansson");
  //5 Points
  document.getElementById("Jenna Ortega").onclick = () => selectImage("Jenna Ortega");
  document.getElementById("Megan Fox").onclick = () => selectImage("Megan Fox");
  document.getElementById("Emma Stone").onclick = () => selectImage("Emma Stone");
  document.getElementById("Natalie Portman").onclick = () => selectImage("Natalie Portman");
  document.getElementById("Vanessa Hudgens").onclick = () => selectImage("Vanessa Hudgens");
  document.getElementById("Selena Gomez").onclick = () => selectImage("Selena Gomez");
  //4 Points
  document.getElementById("Lili Reinhart").onclick = () => selectImage("Lili Reinhart");
  document.getElementById("Alison Brie").onclick = () => selectImage("Alison Brie");
  document.getElementById("Anne Hathaway").onclick = () => selectImage("Anne Hathaway");
  document.getElementById("Olivia Rodrigo").onclick = () => selectImage("Olivia Rodrigo");
  document.getElementById("Lucy Hale").onclick = () => selectImage("Lucy Hale");
  document.getElementById("Katherine McNamara").onclick = () => selectImage("Katherine McNamara");
  document.getElementById("Ariana Grande").onclick = () => selectImage("Ariana Grande");
  document.getElementById("Mila Kunis").onclick = () => selectImage("Mila Kunis");
  document.getElementById("Taylor Swift").onclick = () => selectImage("Taylor Swift");
  //3 Points
  document.getElementById("Charlize Theron").onclick = () => selectImage("Charlize Theron");
  document.getElementById("Aubrey Plaza").onclick = () => selectImage("Aubrey Plaza");
  document.getElementById("Angelina Jolie").onclick = () => selectImage("Angelina Jolie");
  document.getElementById("Cameron Diaz").onclick = () => selectImage("Cameron Diaz");
  document.getElementById("Blake Lively").onclick = () => selectImage("Blake Lively");
  document.getElementById("Sofia Vergara").onclick = () => selectImage("Sofia Vergara");
  document.getElementById("Jennifer Lopez").onclick = () => selectImage("Jennifer Lopez");
  document.getElementById("Emily Blunt").onclick = () => selectImage("Emily Blunt");
  document.getElementById("Kendall Jenner").onclick = () => selectImage("Kendall Jenner");
  //2 Points
  document.getElementById("Caity Lotz").onclick = () => selectImage("Caity Lotz");
  document.getElementById("Amy Adams").onclick = () => selectImage("Amy Adams");
  document.getElementById("Jessica Chastain").onclick = () => selectImage("Jessica Chastain");
  document.getElementById("Katy Perry").onclick = () => selectImage("Katy Perry");
  document.getElementById("Jessica Alba").onclick = () => selectImage("Jessica Alba");
  document.getElementById("Sandra Bullock").onclick = () => selectImage("Sandra Bullock");
  document.getElementById("Kristen Stewart").onclick = () => selectImage("Kristen Stewart");
  document.getElementById("Jessica Biel").onclick = () => selectImage("Jessica Biel");
  document.getElementById("Eva Mendes").onclick = () => selectImage("Eva Mendes");
  //1 Point
  document.getElementById("Gwyneth Paltrow").onclick = () => selectImage("Gwyneth Paltrow");
  document.getElementById("Michelle Rodriguez").onclick = () => selectImage("Michelle Rodriguez");
  document.getElementById("Demi Lovato").onclick = () => selectImage("Demi Lovato");
  document.getElementById("Demi Moore").onclick = () => selectImage("Demi Moore");
  document.getElementById("Julia Roberts").onclick = () => selectImage("Julia Roberts");
  document.getElementById("Jennifer Aniston").onclick = () => selectImage("Jennifer Aniston");
  document.getElementById("Marisa Tomei").onclick = () => selectImage("Marisa Tomei");
  document.getElementById("Ronda Rousey").onclick = () => selectImage("Ronda Rousey");
  document.getElementById("Amber Heard").onclick = () => selectImage("Amber Heard");  

//buttons
document.getElementById("copyButton").onclick = copyToClipboard;
document.getElementById("gamehub-btn").addEventListener("click", function() {
  window.location.href = "gamehub.html";
});

document.getElementById("suggestions-btn").addEventListener("click", function() {
  window.location.href = "suggestions.html";
});