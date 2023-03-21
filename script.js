function toggleMenu() {
    var menu = document.getElementById("menu");
    if (menu.style.display === "block") {
      menu.style.display = "none";
    } else {
      menu.style.display = "block";
    }
  }
  
  function scrollToElement(id) {
    var element = document.querySelector(id);
    element.scrollIntoView({
      behavior: 'smooth'
    });
  }