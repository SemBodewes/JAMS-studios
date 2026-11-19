// Selecteer de knop en de body
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// Controleer of de bezoeker al eerder voor light mode heeft gekozen
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'light') {
  body.classList.add('light-mode');
  themeToggleBtn.innerHTML = '🌙 Dark';
}

// Luister naar een klik op de knop
themeToggleBtn.addEventListener('click', () => {
  // Wissel de light-mode class op de body
  body.classList.toggle('light-mode');
  
  // Controleer wat de huidige status is
  let theme = 'dark';
  if (body.classList.contains('light-mode')) {
    theme = 'light';
    themeToggleBtn.innerHTML = '🌙 Dark';
  } else {
    themeToggleBtn.innerHTML = '☀️ Light';
  }
  
  // Sla de voorkeur op in de browser
  localStorage.setItem('theme', theme);
});
