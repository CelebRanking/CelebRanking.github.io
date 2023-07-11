// Function to show the pop-up
function showPopup() {
  var popup = document.getElementById("popup");
  popup.style.display = "block";
}

// Function to hide the pop-up
function hidePopup() {
  var popup = document.getElementById("popup");
  popup.style.display = "none";
}

// Add click event listener to the image
var image = document.getElementById("gamehub-image");
image.addEventListener("click", showPopup);

// Add click event listener to the close button
var closeButton = document.getElementById("close-button");
closeButton.addEventListener("click", hidePopup);