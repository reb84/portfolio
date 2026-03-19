const SHOW_ON_PX = 100;
const backToTopButton = document.querySelector(".back-to-top");
const pageProgressBar = document.querySelector(".progress-bar");
const themeToggle = document.getElementById("theme-toggle");

// Scroll handler — for both progress bar and back-to-top

const scrollContainer = () => document.documentElement || document.body;

document.addEventListener(
  "scroll",
  () => {
    const scrolled = scrollContainer().scrollTop;
    const total =
      scrollContainer().scrollHeight - scrollContainer().clientHeight;

    pageProgressBar.style.width = `${(scrolled / total) * 100}%`;
    backToTopButton.classList.toggle("hidden", scrolled <= SHOW_ON_PX);
  },
  { passive: true },
);

// Back to top button handler

backToTopButton.addEventListener("click", () => {
  document.body.scrollIntoView({ behavior: "smooth" });
});

// Dark Mode into local storage

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
  themeToggle.checked = true;
}

themeToggle.addEventListener("change", () => {
  const isDark = document.body.classList.toggle("dark-mode");
  localStorage.setItem("theme", isDark ? "dark" : "light");
});
