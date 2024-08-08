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
  document.getElementById("Scarlett Johansson (6)").onclick = () => selectImage("Scarlett Johansson (6)");
  document.getElementById("Elizabeth Olsen (6)").onclick = () => selectImage("Elizabeth Olsen (6)");
  document.getElementById("Brie Larson (6)").onclick = () => selectImage("Brie Larson (6)");
  document.getElementById("Florence Pugh (6)").onclick = () => selectImage("Florence Pugh (6)");
  document.getElementById("Salma Hayek (6)").onclick = () => selectImage("Salma Hayek (6)");
  document.getElementById("Angelina Jolie (6)").onclick = () => selectImage("Angelina Jolie (6)");

  //5 Points
  document.getElementById("Natalie Portman (5)").onclick = () => selectImage("Natalie Portman (5)");
  document.getElementById("Hayley Atwell (5)").onclick = () => selectImage("Hayley Atwell (5)");
  document.getElementById("Kat Dennings (5)").onclick = () => selectImage("Kat Dennings (5)");
  document.getElementById("Zoe Saldana (5)").onclick = () => selectImage("Zoe Saldana (5)");
  document.getElementById("Gwyneth Paltrow (5)").onclick = () => selectImage("Gwyneth Paltrow (5)");
  document.getElementById("Evangeline Lilly (5)").onclick = () => selectImage("Evangeline Lilly (5)");

  //4 Points
  document.getElementById("Karen Gillan (4)").onclick = () => selectImage("Karen Gillan (4)");
  document.getElementById("Tessa Thompson (4)").onclick = () => selectImage("Tessa Thompson (4)");
  document.getElementById("Rachel McAdams (4)").onclick = () => selectImage("Rachel McAdams (4)");
  document.getElementById("Lupita Nyong'o (4)").onclick = () => selectImage("Lupita Nyong'o (4)");
  document.getElementById("Cobie Smulders (4)").onclick = () => selectImage("Cobie Smulders (4)");
  document.getElementById("Chloe Bennet (4)").onclick = () => selectImage("Chloe Bennet (4)");

  //3 Points
  document.getElementById("Gemma Chan (3)").onclick = () => selectImage("Gemma Chan (3)");
  document.getElementById("Danai Gurira (3)").onclick = () => selectImage("Danai Gurira (3)");
  document.getElementById("Letitia Wright (3)").onclick = () => selectImage("Letitia Wright (3)");
  document.getElementById("Emily VanCamp (3)").onclick = () => selectImage("Emily VanCamp (3)");
  document.getElementById("Michelle Pfeiffer (3)").onclick = () => selectImage("Michelle Pfeiffer (3)");
  document.getElementById("Rachel Weisz (3)").onclick = () => selectImage("Rachel Weisz (3)");

  //2 Points
  document.getElementById("Pom Klementieff (2)").onclick = () => selectImage("Pom Klementieff (2)");
  document.getElementById("Jamie Alexander (2)").onclick = () => selectImage("Jamie Alexander (2)");
  document.getElementById("Ming-Na Wen (2)").onclick = () => selectImage("Ming-Na Wen (2)");
  document.getElementById("Tatiana Maslany (2)").onclick = () => selectImage("Tatiana Maslany (2)");
  document.getElementById("Iman Vellani (2)").onclick = () => selectImage("Iman Vellani (2)");
  document.getElementById("Sophia Di Martino (2)").onclick = () => selectImage("Sophia Di Martino (2)");

  //1 Points
  document.getElementById("Teyonah Parris (1)").onclick = () => selectImage("Teyonah Parris (1)");
  document.getElementById("Alaqua Cox (1)").onclick = () => selectImage("Alaqua Cox (1)");
  document.getElementById("Rene Russo (1)").onclick = () => selectImage("Rene Russo (1)");
  document.getElementById("Hannah John-Kamen (1)").onclick = () => selectImage("Hannah John-Kamen (1)");
  document.getElementById("Laura Haddock (1)").onclick = () => selectImage("Laura Haddock (1)");
  document.getElementById("Florence Kasumba (1)").onclick = () => selectImage("Florence Kasumba (1)");
  

//buttons
document.getElementById("copyButton").onclick = copyToClipboard;
document.getElementById("gamehub-btn").addEventListener("click", function() {
  window.location.href = "gamehub.html";
});

document.getElementById("suggestions-btn").addEventListener("click", function() {
  window.location.href = "suggestions.html";
});
