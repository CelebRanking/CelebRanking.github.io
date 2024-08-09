document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("suggestions-btn").addEventListener("click", function() {
    window.location.href = "../interactive/suggestions.html";
  });
});

document.getElementById("rankinghub-btn").addEventListener("click", function() {
  window.location.href = "rankinghub.html";
});

var categoryImages = document.querySelectorAll(".category img");
categoryImages.forEach(function(image) {
  image.addEventListener("click", showPopup);
});
