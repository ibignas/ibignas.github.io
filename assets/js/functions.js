function toggleTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    body.setAttribute('data-theme', newTheme);
    themeToggle.checked = newTheme === 'dark';
    localStorage.setItem('theme', newTheme);
  }
  
  function initializeTheme() {
    const savedTheme = localStorage.getItem('theme');
    const themeToggle = document.getElementById('theme-toggle');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    if (savedTheme) {
      document.body.setAttribute('data-theme', savedTheme);
      themeToggle.checked = savedTheme === 'dark';
    } else if (prefersDarkScheme.matches) {
      document.body.setAttribute('data-theme', 'dark');
      themeToggle.checked = true;
    }
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    initializeTheme();
    
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('change', toggleTheme);
  });
  