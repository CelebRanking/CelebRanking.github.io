document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("suggestions-btn").addEventListener("click", function() {
    window.location.href = "suggestions.html";
  });
});

document.getElementById("gamehub-btn").addEventListener("click", function() {
  window.location.href = "gamehub.html";
});

var categoryImages = document.querySelectorAll(".category img");
categoryImages.forEach(function(image) {
  image.addEventListener("click", showPopup);
});
