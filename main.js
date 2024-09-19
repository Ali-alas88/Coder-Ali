import './style.css'




document.addEventListener("DOMContentLoaded", function () {
  let mobileMenuToggle = document.getElementById("mobile-menu-toggle");
  let mobileMenu = document.getElementById("mobile-menu");
  let darkModeToggle = document.getElementById("dark-mode-toggle");
  let body = document.body;
  let header = document.getElementById("header");




  // Mobile Menu 

  let isMenuOpen = false;

  mobileMenuToggle.addEventListener("click", function () {
    isMenuOpen = !isMenuOpen;
    // console.log(isMenuOpen)
    mobileMenuToggle.textContent = isMenuOpen ? '✕' : '☰';
    mobileMenu.classList.toggle("hidden");
  });


  // ================================================================

  // Function to toggle dark mode

  function toggleDarkMode() {
    body.classList.toggle('bg-darkColor');
    body.classList.toggle('text-lightColor');

    if (body.classList.contains('bg-darkColor')) {
      darkModeToggle.innerHTML = '☀️';
      localStorage.setItem('mode', 'dark');
    } else {
      darkModeToggle.innerHTML = '🌙';
      localStorage.setItem('mode', 'light');
    }
  }


  darkModeToggle.addEventListener('click', toggleDarkMode);

  window.addEventListener('load', function () {
    const savedMode = localStorage.getItem('mode');
    if (savedMode === 'dark') {
      body.classList.add('bg-darkColor', 'text-lightColor');
      darkModeToggle.innerHTML = '☀️';
    } else {
      body.classList.remove('bg-darkColor', 'text-lightColor');
      darkModeToggle.innerHTML = '🌙';
    }
  });

  // ================================================================

  // header scroll
  window.addEventListener("scroll", function () {
    // console.log(window.scrollY)
    if (window.scrollY > 70) {
      header.classList.add("bg-header-gradient");
    } else {
      header.classList.remove("bg-header-gradient");
    }
  });

  // ================================================================

  // More Projects 
  let seeMore = document.getElementById("seeMore");

  seeMore.addEventListener("click", () => {
    alert("Thank you for your interest! I'm currently working on more exciting projects. Please check back soon for updates.");
  });


  // ======================================================================
  // Footer greetings
  let greetings = document.getElementById("greetings");
  let message;
  const today = new Date();
  // console.log(today.getFullYear());
  let currentyear = today.getFullYear();
  const options = { weekday: "long" };
  const day = today.toLocaleDateString("en-US", options);

  if (day === "Thursday" || day === "Friday") {
    if (today.getHours() >= 18) {
      message = "Enjoy the rest of your Weekend 😍";
    } else {
      message = "Happy Weekend 😍";
    }
  } else {
    if (today.getHours() >= 18) {
      message = `Enjoy the rest of your ${day} 😍`;
    } else {
      message = `Have a great ${day} 😍`;
    }
  }

  greetings.innerText = message;

  // ================================================================


  // footer Copywrite

  let copywrite = document.getElementById("copywrite");

  copywrite.innerHTML = `© ${currentyear} <a class="text-PrimColor" href="https://wa.me/252617020686?text=Hey%20Coder-Ali">Coder-Ali</a>`;

});


