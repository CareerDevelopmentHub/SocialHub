window.addEventListener('scroll', function() {
    var navbar = document.getElementById('mainNavbar');
    if (window.scrollY > 50) {
      navbar.style.backgroundColor = '#a2d2ff';
    } else {
      navbar.style.backgroundColor = 'transparent';
    }
  });
  