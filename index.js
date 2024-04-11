function toggleDarkMode() {
	var body = document.body;
	var icono = document.getElementById("modo-icono");

	body.classList.toggle("dark-mode");

	// Cambiar el icono según el modo
	if (body.classList.contains("dark-mode")) {
		// Modo claro activado
		icono.classList.remove("bi-moon");
		icono.classList.add("bi-sun");
		icono.innerHTML = "Cambiar a ☀";
	} else {
		// Modo oscuro activado
		icono.classList.remove("bi-sun");
		icono.classList.add("bi-moon");
		icono.innerHTML = "CAmbiar a 🌑";
	}
}
