const situations = document.querySelectorAll(".situation");

situations.forEach((situation) => {
  situation.addEventListener("click", (event) => {
    // Entfernen Sie zuerst die rote Umrandung von allen Situationen
    situations.forEach((situation) => {
      situation.classList.remove("selected");
    });
    
    // Fügen Sie der angeklickten Situation die rote Umrandung hinzu
    event.currentTarget.classList.add("selected");
  });
});
