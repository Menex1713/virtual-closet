// get toggle theme button element
const toggleThemeBtn = document.querySelector('.toggle-theme-btn');

// check if user has set a theme preference
if (localStorage.getItem('theme') === 'dark') {
  // if user has set a dark theme preference, set the data-theme attribute to 'dark' on the root element
  document.documentElement.setAttribute('data-theme', 'dark');
  // also toggle the toggle theme button text to 'Light'
  toggleThemeBtn.textContent = 'Light';
} else {
  // if user has not set a theme preference, set the data-theme attribute to 'light' on the root element
  document.documentElement.setAttribute('data-theme', 'light');
}

// add event listener to toggle theme button
toggleThemeBtn.addEventListener('click', function() {
  // get the current theme setting
  const currentTheme = document.documentElement.getAttribute('data-theme');
  // toggle the data-theme attribute on the root element based on the current setting
  if (currentTheme === 'light') {
    document.documentElement.setAttribute('data-theme', 'dark');
    // set the theme preference in localStorage so it persists between sessions
    localStorage.setItem('theme', 'dark');
    toggleThemeBtn.textContent = 'Light';
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
    toggleThemeBtn.textContent = 'Dark';
  }
});
