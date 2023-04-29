function showImage(id) {
	var bild = document.getElementById(id).getElementsByTagName("img")[0].getAttribute("src");
	document.getElementById("ausgewaehlt").setAttribute("src", bild);
}
