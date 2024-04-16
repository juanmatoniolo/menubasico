function toggleDarkMode() {
	var body = document.body;
	var iconoModo = document.getElementById("icono-modo");

	body.classList.toggle("dark-mode");

	if (body.classList.contains("dark-mode")) {
		iconoModo.innerHTML = "🌑 "; // Cambia a icono de luna
		iconoModo.title = "Cambiar a modo día";
	} else {
		iconoModo.innerHTML = "☀"; // Cambia a icono de sol
		iconoModo.title = "Cambiar a modo noche";
	}
}

