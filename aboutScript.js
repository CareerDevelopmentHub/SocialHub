
window.addEventListener('scroll', function() {
  var navbar = document.getElementById('mainNavbar');
  if (window.scrollY > 50) {
    navbar.style.backgroundColor = '#D0BFFF';
  } else {
    navbar.style.backgroundColor = 'transparent';
  }
});
