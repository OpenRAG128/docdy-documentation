// Add smooth scrolling to section links
// Toggle between light and dark mode
const toggleButton = document.createElement('button');
toggleButton.className = 'toggle-mode';
toggleButton.textContent = 'Toggle Mode';
toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  toggleButton.textContent = document.body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
});
document.body.appendChild(toggleButton);


const links = document.querySelectorAll("nav a");

links.forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});
