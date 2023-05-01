let budget = 30;
 const selectedcelebs = [];
const updateBudget = () => {
  document.getElementById("budget").textContent = budget;
};
        
// const updateselectedcelebs = () => {
//   document.getElementById("selectedcelebs").value = selectedcelebs.join(", ");
// }

const updateSelectedCelebs = () => {
  const formattedCelebs = selectedcelebs.map((celeb, index) => {
    if (index === 0) {
      return `mother: ${celeb}`;
    } else if (index === 1) {
      return `older sister: ${celeb}`;
    } else if (index === 2) {
      return `younger sister: ${celeb}`;
    } else if (index === 3) {
      return `1st aunt : ${celeb}`;
    } else if (index === 4) {
      return `2nd aunt: ${celeb}`;
    } else if (index === 5) {
      return `3rd aunt: ${celeb}`;
    } else if (index === 6) {
      return `girlfriend: ${celeb}`;
    } else if (index === 7) {
      return `girlfirends mother: ${celeb}`;
    } else if (index === 8) {
      return `girlfriends sister: ${celeb}`;
    } else {
      return celeb;
    }
  });
  document.getElementById("selectedcelebs").value = formattedCelebs.join(", ");
};

   
const copyToClipboard = () => {
  const textarea = document.getElementById("selectedcelebs");
  textarea.value = `${getImageSelection()}`;
  textarea.select();
  document.execCommand("copy");
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
  }
  updateBudget();
  updateselectedcelebs();
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
