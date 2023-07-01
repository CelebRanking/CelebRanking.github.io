// Celeb Array
var celebs = [
  { name: "Sydney Sweeney", img: "../assets/img/Sydney Sweeney.jpg", price: 5 },
  { name: "Margot Robbie", img: "../assets/img/Margot Robbie.jpg", price: 5 },
  { name: "Elizabeth Olsen", img: "../assets/img/Elizabeth Olsen.jpg", price: 5 },
  { name: "Taylor Swift", img: "../assets/img/Taylor Swift.jpg", price: 5 },
  { name: "Jennifer Lawrence", img: "../assets/img/Jennifer Lawrence.jpg", price: 4 },
  { name: "Kate Upton", img: "../assets/img/Kate Upton.jpg", price: 4 },
  { name: "Brie Larson", img: "../assets/img/Brie Larson.jpg", price: 4 },
  { name: "Anya Taylor-Joy", img: "../assets/img/Anya Taylor-Joy.jpg", price: 4 },
  { name: "Dove Cameron", img: "../assets/img/Dove Cameron.jpg", price: 3 },
  { name: "Sophie Turner", img: "../assets/img/Sophie Turner.jpg", price: 3 },
  { name: "Lili Reinhart", img: "../assets/img/Lili Reinhart.jpg", price: 3 },
  { name: "Chloe Grace Moretz", img: "../assets/img/Chloe Grace Moretz.jpg", price: 3 },
  { name: "Sabrina Carpenter", img: "../assets/img/Sabrina Carpenter.jpg", price: 2 },
  { name: "Florence Pugh", img: "../assets/img/Florence Pugh.jpg", price: 2 },
  { name: "Leni Klum", img: "../assets/img/Leni Klum.jpg", price: 2 },
  { name: "Amanda Seyfried", img: "../assets/img/Amanda Seyfried.jpg", price: 2 },
  { name: "Kate Hudson", img: "../assets/img/Kate Hudson.jpg", price: 1 },
  { name: "Charlize Theron", img: "../assets/img/Charlize Theron.jpg", price: 1 },
  { name: "Blake Lively", img: "../assets/img/Blake Lively.jpg", price: 1 },
  { name: "Dakota Fanning", img: "../assets/img/Dakota Fanning.jpg", price: 1 }
];

// Generate celeb HTML
function generateCelebs() {
  var celebSections = {
    5: document.getElementById("celeb-section-5"),
    4: document.getElementById("celeb-section-4"),
    3: document.getElementById("celeb-section-3"),
    2: document.getElementById("celeb-section-2"),
    1: document.getElementById("celeb-section-1")
  };

  celebs.forEach(function (celeb) {
    var celebSection = celebSections[celeb.price];

    var div = document.createElement("div");
    div.className = "col-md-3";

    var img = document.createElement("img");
    img.src = celeb.img;
    img.className = "img-fluid rounded";
    img.alt = celeb.name;
    img.setAttribute("data-price", celeb.price);
    img.addEventListener("click", selectCeleb);

    div.appendChild(img);
    celebSection.appendChild(div);
  });
}

// Select celeb and update budget
function selectCeleb(event) {
  var celebImg = event.target;
  var budgetElement = document.getElementById("budget");
  var selectedCelebsElement = document.getElementById("selectedcelebs");

  var price = parseInt(celebImg.getAttribute("data-price"));
  var budget = parseInt(budgetElement.textContent);

  if (budget >= price) {
    budget -= price;
    budgetElement.textContent = budget;

    var selectedCelebs = selectedCelebsElement.value;
    selectedCelebs += celebImg.alt + "\n";
    selectedCelebsElement.value = selectedCelebs;
  }
}

// Copy selected celebs to clipboard
function copyToClipboard() {
  var selectedCelebsElement = document.getElementById("selectedcelebs");
  selectedCelebsElement.select();
  document.execCommand("copy");
  alert("Selected celebs copied to clipboard!");
}

// Go to Gamehub
function goToGamehub() {
  window.location.href = "https://gamehub.com";
}

// Initialize
function init() {
  generateCelebs();

  var copyButton = document.getElementById("copyButton");
  copyButton.addEventListener("click", copyToClipboard);

  var gamehubButton = document.getElementById("gamehub-btn");
  gamehubButton.addEventListener("click", goToGamehub);
}

document.addEventListener("DOMContentLoaded", init);
