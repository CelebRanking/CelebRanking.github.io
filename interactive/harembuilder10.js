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
  document.getElementById("Mia Yim (3)").onclick = () => selectImage("Mia Yim (3)");
  document.getElementById("Tegan Nox (3)").onclick = () => selectImage("Tegan Nox (3)");
  document.getElementById("Aliyah (3)").onclick = () => selectImage("Aliyah (3)");
  document.getElementById("Peyton Royce (3)").onclick = () => selectImage("Peyton Royce (3)");
  document.getElementById("Gigi Dolin (3)").onclick = () => selectImage("Gigi Dolin (3)");
  document.getElementById("Cora Jade (3)").onclick = () => selectImage("Cora Jade (3)");

  //2 Points
  document.getElementById("Tiffany Stratton (2)").onclick = () => selectImage("Tiffany Stratton (2)");
  document.getElementById("Scarlett Bordeaux (2)").onclick = () => selectImage("Scarlett Bordeaux (2)");
  document.getElementById("Lacey Evans (2)").onclick = () => selectImage("Lacey Evans (2)");
  document.getElementById("Dakota Kai (2)").onclick = () => selectImage("Dakota Kai (2)");
  document.getElementById("Ruby Riott (2)").onclick = () => selectImage("Ruby Riott (2)");
  document.getElementById("Sarah Logan (2)").onclick = () => selectImage("Sarah Logan (2)");

  //1 Points
  document.getElementById("Toni Storm (1)").onclick = () => selectImage("Toni Storm (1)");
  document.getElementById("Zoey Stark (1)").onclick = () => selectImage("Zoey Stark (1)");
  document.getElementById("Candice LeRae (1)").onclick = () => selectImage("Candice LeRae (1)");
  document.getElementById("Indi Hartwell (1)").onclick = () => selectImage("Indi Hartwell (1)");
  document.getElementById("Shotzi (1)").onclick = () => selectImage("Shotzi (1)");
  document.getElementById("Ember Moon (1)").onclick = () => selectImage("Ember Moon (1)");
  

//buttons
document.getElementById("copyButton").onclick = copyToClipboard;
document.getElementById("gamehub-btn").addEventListener("click", function() {
  window.location.href = "gamehub.html";
});

document.getElementById("suggestions-btn").addEventListener("click", function() {
  window.location.href = "suggestions.html";
});

/*

Scarlett Johansson
Elizabeth Olsen
Brie Larson
Florence Pugh
Salma Hayek
Angelina Jolie

Natalie Portman
Hayley Atwell
Kat Dennings
Zoe Saldana
Gwyneth Paltrow
Evangeline Lilly

Karen Gillan
Tessa Thompson
Rachel McAdams
Lupita Nyong'o
Cobie Smulders
Chloe Bennet

Gemma Chan
Danai Gurira
Letitia Wright
Emily VanCamp
Michelle Pfeiffer
Rachel Weisz

Pom Klementieff
Jamie Alexander
Ming-Na Wen
Tatiana Maslany
Iman Vellani
Sophia Di Martino

Teyonah Parris
Alaqua Cox
Rene Russo
Hannah John-Kamen
Laura Haddock
Florence Kasumba

*/