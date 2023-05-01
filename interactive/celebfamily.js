let budget = 30;
 const selectedImages = [];

const updateBudget = () => {
  document.getElementById("budget").textContent = budget;
};

const resetSelectedImages = (row) => {
  const selectedRowImages = Array.from(row.querySelectorAll(".selected"));
  selectedRowImages.forEach((imgElem) => {
    imgElem.classList.remove("selected");
    const index = selectedImages.indexOf(imgElem.id);
    if (index > -1) {
      selectedImages.splice(index, 1);
    }
  });
  updateSelectedCelebs();
};
        
const updateSelectedCelebs = () => {
  const textarea = document.getElementById("selectedcelebs");
  textarea.value = "";
  selectedImages.forEach((imgId) => {
    const imgElem = document.getElementById(imgId);
    const celebName = imgElem.nextElementSibling.textContent.split(" - ")[0];
    textarea.value += celebName + ": " + imgElem.alt + "\n";
  });
};

let familyMember = ["Your mother", "Your older sister", "Your younger sister"];
const getFamilyMember = () => {
  let selected = "";
  for (let i = 0; i < familyMember.length; i++) {
    if (document.getElementById(familyMember[i]).classList.contains("selected")) {
      if (selected !== "") {
        selected += "\n";
      }
      selected += `Your ${familyMember[i]}`;
    }
  }
  return selected;
}
        
const copyToClipboard = () => {
  const textarea = document.getElementById("selectedcelebs");
  textarea.value = `${getFamilyMember()}\n\n${getImageSelection()}`;
  textarea.select();
  document.execCommand("copy");
};

const selectImage = (id) => {
  const selectedImage = document.getElementById(id);
  const price = parseInt(selectedImage.dataset.price);
  const row = selectedImage.closest(".row");

  if (selectedImage.classList.contains("selected")) {
    budget += price;
    selectedImage.classList.remove("selected");
    const index = selectedImages.indexOf(id);
    if (index > -1) {
      selectedImages.splice(index, 1);
    }
  } else if (budget >= price) {
    resetSelectedImages(row);
    budget -= price;
    selectedImage.classList.add("selected");
    selectedImages.push(id);
  } else {
    alert("Not enough budget!");
  }

  updateBudget();
  updateSelectedCelebs();
};

//mother
document.getElementById("Salma Hayek").onclick = () => selectImage("Salma Hayek");
document.getElementById("Gal Gadot").onclick = () => selectImage("Gal Gadot");
document.getElementById("Jessica Chastain").onclick = () => selectImage("Jessica Chastain");
//older sister
document.getElementById("Sydney Sweeney").onclick = () => selectImage("Sydney Sweeney");
document.getElementById("Florence Pugh").onclick = () => selectImage("Florence Pugh");
document.getElementById("Madison Pettis").onclick = () => selectImage("Madison Pettis");
//younger sister
document.getElementById("Jenna Ortega").onclick = () => selectImage("Jenna Ortega");
document.getElementById("Millie Bobby Brown").onclick = () => selectImage("Millie Bobby Brown");
document.getElementById("Olivia Rodrigo").onclick = () => selectImage("Olivia Rodrigo");
//aunt 1st
document.getElementById("Mila Kunis").onclick = () => selectImage("Mila Kunis");
document.getElementById("Megan Fox").onclick = () => selectImage("Megan Fox");
document.getElementById("Margot Robbie").onclick = () => selectImage("Margot Robbie");
//aunt 2nd
document.getElementById("Emilia Clarke").onclick = () => selectImage("Emilia Clarke");
document.getElementById("Alexandra Daddario").onclick = () => selectImage("Alexandra Daddario");
document.getElementById("Kaley Cuoco").onclick = () => selectImage("Kaley Cuoco");
//aunt 3rd
document.getElementById("Elizabeth Olsen").onclick = () => selectImage("Elizabeth Olsen");
document.getElementById("Jennifer Lawrence").onclick = () => selectImage("Jennifer Lawrence");
document.getElementById("Zoe Kravitz").onclick = () => selectImage("Zoe Kravitz");
//girlfriend
document.getElementById("Hailee Steinfeld").onclick = () => selectImage("Hailee Steinfeld");
document.getElementById("Madison Beer").onclick = () => selectImage("Madison Beer");
document.getElementById("Lili Reinhart").onclick = () => selectImage("Lili Reinhart");
//girlfriends mother
document.getElementById("Ana De Armas").onclick = () => selectImage("Ana De Armas");
document.getElementById("Felicity Jones").onclick = () => selectImage("Felicity Jones");
document.getElementById("Natalie Portman").onclick = () => selectImage("Natalie Portman");
//girlfriends sister
document.getElementById("Victoria Justice").onclick = () => selectImage("Victoria Justice");
document.getElementById("Natalie Emmanuel").onclick = () => selectImage("Natalie Emmanuel");
document.getElementById("Elle Fanning").onclick = () => selectImage("Elle Fanning");
//button
document.getElementById("copyButton").onclick = copyToClipboard;
