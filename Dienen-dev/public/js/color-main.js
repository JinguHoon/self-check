const isUserColorTheme = localStorage.getItem('color-theme');
const isOsColorTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
const $clickbox = document.getElementById('toggleTheme');
const $logo_text = document.getElementsByTagName('img');
const getUserTheme = isUserColorTheme;

window.onload = function () {
    if (getUserTheme === 'dark') {
        localStorage.setItem('color-theme', 'dark');
        document.documentElement.setAttribute('color-theme', 'dark');
        document.documentElement.classList.remove("light");
    } else {
        localStorage.setItem('color-theme', 'light');
        $clickbox.checked=true;
        document.documentElement.classList.add("light");
        document.documentElement.setAttribute('color-theme', 'light');
    }
};

$clickbox.addEventListener("click", e => {
    if (e.target.checked) {
        localStorage.setItem('color-theme', 'light');
        document.documentElement.classList.add("light");
        document.documentElement.setAttribute('color-theme', 'light');
    } else {
        localStorage.setItem('color-theme', 'dark');
        document.documentElement.classList.remove("light");
        document.documentElement.setAttribute('color-theme', 'dark');
      }
});

