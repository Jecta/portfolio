var toggles = document.querySelectorAll(".theme-toggle");

var storedTheme = localStorage.getItem("theme");

if (!storedTheme) {
  storedTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

document.documentElement.setAttribute("data-theme", storedTheme);

toggles.forEach(function (toggle) {
  if (storedTheme === "light") {
    toggle.innerHTML = "<button>🌙</button>";
  } else {
    toggle.innerHTML = "<button>☀️</button>";
  }
});

toggles.forEach(function (toggle) {
  toggle.onclick = function (event) {
    var currentTheme = document.documentElement.getAttribute("data-theme");
    var targetTheme = "light";

    if (event.altKey) {
      targetTheme = "coffee";
      toggle.innerHTML = "<button>☕️</button>";
    } else if (currentTheme === "light") {
      targetTheme = "dark";
      toggle.innerHTML = "<button>☀️</button>";
    } else {
      toggle.innerHTML = "<button>🌙</button>";
    }

    document.documentElement.setAttribute("data-theme", targetTheme);
    localStorage.setItem("theme", targetTheme);
  };
});

const birthdate = new Date(2007, 12, 2); // Adjusted month index to 11 (December is 11th month)
const today = new Date();
const age = today.getFullYear() - birthdate.getFullYear();
const ageElement = document.getElementById("age");

if (ageElement) {
  ageElement.textContent = age;
}