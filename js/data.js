document.addEventListener('DOMContentLoaded', function() {
    mostrar_dato = document.getElementById("data");
    mostrar_dato.innerHTML = localStorage.getItem("dato");
});