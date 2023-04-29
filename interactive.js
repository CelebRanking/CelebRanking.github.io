const situations = document.querySelectorAll('.situation');

situations.forEach(situation => {
  situation.addEventListener('click', () => {
    // Entferne zuerst alle aktiven Klassen von den Situationen
    situations.forEach(s => {
      s.classList.remove('active');
    });
    // Füge der angeklickten Situation die aktive Klasse hinzu
    situation.classList.add('active');
    // Erstelle neue Situationen und füge sie dem Container hinzu
    const newSituations = `
      <div class="situation">
        <img src="assets/img/Asuka.jpg" alt="Situation 4">
        <h2>Situation 4</h2>
        <p>Dies ist eine Beschreibung von Situation 4.</p>
      </div>
      <div class="situation">
        <img src="assets/img/Bayley.jpg" alt="Situation 5">
        <h2>Situation 5</h2>
        <p>Dies ist eine Beschreibung von Situation 5.</p>
      </div>
      <div class="situation">
        <img src="assets/img/Carmella.jpg" alt="Situation 6">
        <h2>Situation 6</h2>
        <p>Dies ist eine Beschreibung von Situation 6.</p>
      </div>
    `;
    const situationsContainer = document.getElementById('situations');
    situationsContainer.innerHTML += newSituations;
  });
});
