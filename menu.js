const checkboxMenu = document.getElementById('checkbox-menu');
const menuToggle = document.getElementById('menu-toggle');

menuToggle.addEventListener('click', function() {
  checkboxMenu.checked = !checkboxMenu.checked;
});