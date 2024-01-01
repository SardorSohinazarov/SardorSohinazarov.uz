



var darkModeToggle = document.getElementById('darkModeToggle');
var body = document.body;

darkModeToggle.addEventListener('click', function () {
    body.classList.toggle('dark-mode');
});