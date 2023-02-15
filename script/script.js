const root = document.documentElement.style;
const switchButton = document.querySelector('.theme-toggle');
let mode = 'dark';

switchButton.addEventListener('change', () => {
    mode === 'dark' ? lightMode() : darkMode();
});

function darkMode() {
    mode = 'dark';
    root.setProperty('--background', 'hsl(0, 0%, 100%)');
    root.setProperty('--pattern', 'hsl(255, 100%, 98%)');
    root.setProperty('--card-bg', 'hsl(227, 47%, 96%)');
    root.setProperty('--primary-text', 'hsl(228, 12%, 44%)');
    root.setProperty('--secondary-text', 'hsl(230, 17%, 14%)');
    root.setProperty('--toggle-gradient', 'hsl(230, 22%, 74%)');
    root.setProperty('--overview', 'hsl(228, 12%, 44%)');
}

function lightMode() {
    mode = 'light';
    root.setProperty('--background', 'hsl(230, 17%, 14%)');
    root.setProperty('--pattern', 'hsl(232, 19%, 15%)');
    root.setProperty('--card-bg', 'hsl(228, 28%, 20%)');
    root.setProperty('--primary-text', 'hsl(228, 34%, 66%)');
    root.setProperty('--secondary-text', 'hsl(0, 0%, 100%)');
    root.setProperty('--toggle-gradient', 'linear-gradient(45deg, hsl(210, 78%, 56%), hsl(146, 68%, 55%))');
    root.setProperty('--overview', 'hsl(0, 0%, 100%)');
}