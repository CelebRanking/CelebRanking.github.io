const situations = document.querySelectorAll('.situation');
situations.forEach(situation => {
  situation.addEventListener('click', () => {
	// Entferne die Klasse 'selected' von allen Situationen
	situations.forEach(s => s.classList.remove('selected'));
	// Füge die Klasse 'selected' zur angeklickten Situation hinzu
	situation.classList.add('selected');
  });
});