const menuToggle = document.getElementById('menu-toggle');
const menuNav = document.getElementById('menu-nav');

toggleMenu = () => {
  console.log("Called toggleMenu");
  menuNav.classList.toggle("menu-toggle");
}

menuToggle.addEventListener('click', toggleMenu);
