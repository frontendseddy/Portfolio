const toggle = document.getElementById('darkmode-toggle');
const body = document.getElementsByClassName('area');

toggle.onclick = function() {
    toggle.classList.toggle('active')
}