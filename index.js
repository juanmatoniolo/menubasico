// Espera a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function () {
    const switchInput = document.querySelector('.toggle-switch input');

    // Verifica el estado del interruptor al cargar la página
    checkDarkMode();

    // Agrega un event listener al interruptor si se encuentra
    if (switchInput) {
        switchInput.addEventListener('change', function () {
            toggleDarkMode();
        });
    }

    // Función para cambiar entre modo oscuro y modo claro
    function toggleDarkMode() {
        const body = document.querySelector('body');
        const icon = document.getElementById('icono-modo');
        const switchInput = document.querySelector('.toggle-switch input');

        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            icon.innerText = '🌑';
            localStorage.setItem('darkMode', 'enabled'); // Guarda el estado del modo oscuro en el almacenamiento local
        } else {
            icon.innerText = '☀';
            localStorage.setItem('darkMode', 'disabled'); // Guarda el estado del modo claro en el almacenamiento local
        }
        if (switchInput) {
            switchInput.checked = body.classList.contains('dark-mode');
        }
    }

    // Función para verificar y establecer el modo oscuro al cargar la página
    function checkDarkMode() {
        const currentMode = localStorage.getItem('darkMode');
        if (currentMode === 'enabled') {
            document.body.classList.add('dark-mode');
            document.getElementById('icono-modo').innerText = '🌑';
            if (switchInput) {
                switchInput.checked = true;
            }
        }
    }
});

// Función para cambiar el modo directamente desde el interruptor
function toggleDarkMode() {
    const body = document.querySelector('body');
    const icon = document.getElementById('icono-modo');
    const switchInput = document.querySelector('.toggle-switch input');

    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        icon.innerText = '🌑';
        localStorage.setItem('darkMode', 'enabled'); // Guarda el estado del modo oscuro en el almacenamiento local
    } else {
        icon.innerText = '☀';
        localStorage.setItem('darkMode', 'disabled'); // Guarda el estado del modo claro en el almacenamiento local
    }
    if (switchInput) {
        switchInput.checked = body.classList.contains('dark-mode');
    }
}
