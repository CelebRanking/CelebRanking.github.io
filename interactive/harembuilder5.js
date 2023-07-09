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
document.getElementById("Madelaine Petsch (5)").onclick = () => selectImage("Madelaine Petsch");
document.getElementById("Emma Stone (5)").onclick = () => selectImage("Emma Stone");
document.getElementById("Sadie Sink (5)").onclick = () => selectImage("Sadie Sink");
document.getElementById("Sophie Turner (5)").onclick = () => selectImage("Sophie Turner");
document.getElementById("Jessica Chastain (5)").onclick = () => selectImage("Jessica Chastain");
document.getElementById("Amy Adams (5)").onclick = () => selectImage("Amy Adams");

// 4 Points
document.getElementById("Bella Thorne").onclick = () => selectImage("Bella Thorne");
document.getElementById("Karen Gillan").onclick = () => selectImage("Karen Gillan");
document.getElementById("Bryce Dallas Howard").onclick = () => selectImage("Bryce Dallas Howard");
document.getElementById("Christina Hendricks").onclick = () => selectImage("Christina Hendricks");
document.getElementById("Katherine McNamara").onclick = () => selectImage("Katherine McNamara");
document.getElementById("Debby Ryan").onclick = () => selectImage("Debby Ryan");

// 3 Points
document.getElementById("Rachel McAdams").onclick = () => selectImage("Rachel McAdams");
document.getElementById("Emma Roberts").onclick = () => selectImage("Emma Roberts");
document.getElementById("Isla Fisher").onclick = () => selectImage("Isla Fisher");
document.getElementById("Rose Leslie").onclick = () => selectImage("Rose Leslie");
document.getElementById("Deborah Ann Woll").onclick = () => selectImage("Deborah Ann Woll");
document.getElementById("Kate Mara").onclick = () => selectImage("Kate Mara");

// 2 Points
document.getElementById("Ellie Kemper").onclick = () => selectImage("Ellie Kemper");
document.getElementById("Julianne Moore").onclick = () => selectImage("Julianne Moore");
document.getElementById("Sarah Snook").onclick = () => selectImage("Sarah Snook");
document.getElementById("Jayma Mays").onclick = () => selectImage("Jayma Mays");
document.getElementById("Zoey Deutch").onclick = () => selectImage("Zoey Deutch");
document.getElementById("Lindsay Lohan").onclick = () => selectImage("Lindsay Lohan");

// 1 Point
document.getElementById("Palina Rojinski").onclick = () => selectImage("Palina Rojinski");
document.getElementById("Bonnie Wright").onclick = () => selectImage("Bonnie Wright");
document.getElementById("Ellie Bamber").onclick = () => selectImage("Ellie Bamber");
document.getElementById("Jenna Fischer").onclick = () => selectImage("Jenna Fischer");
document.getElementById("Jane Levy").onclick = () => selectImage("Jane Levy");
document.getElementById("Rachelle Lefevre").onclick = () => selectImage("Rachelle Lefevre");

//buttons
document.getElementById("copyButton").onclick = copyToClipboard;
document.getElementById("gamehub-btn").addEventListener("click", function() {
  window.location.href = "gamehub.html";
});