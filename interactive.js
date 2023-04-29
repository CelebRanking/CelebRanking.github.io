function showImage(src, option) {
	var ausgewaehlt = document.getElementById("ausgewaehlt");
	ausgewaehlt.src = src;
	
	// Entferne die 'ausgewaehlt'-Klasse von allen Optionen
	var options = document.getElementsByClassName("option");
	for (var i = 0; i < options.length; i++) {
		options[i].classList.remove("ausgewaehlt");
	}
	
	// Füge die 'ausgewaehlt'-Klasse zur ausgewählten Option hinzu
	option.classList.add("ausgewaehlt");
}
