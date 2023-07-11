// Function to show the news pop-up
function showNewsPopup() {
  var newsPopup = document.getElementById("news-popup");
  newsPopup.style.display = "block";
}

// Add click event listener to the image
var image = document.getElementById("gamehub-image");
image.addEventListener("click", showNewsPopup);