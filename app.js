/**
 * app.js - Beheert de Light/Dark mode thema-wisselaar voor JAMS Studio
 */
document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const darkIcon = document.getElementById('theme-toggle-dark-icon');
    const lightIcon = document.getElementById('theme-toggle-light-icon');
    const htmlElement = document.documentElement;

    /**
     * Past het gekozen thema toe op de HTML-tag en werkt de iconen bij
     * @param {boolean} isDark - True voor dark mode, false voor light mode
     */
    function applyTheme(isDark) {
        try {
            if (isDark) {
                htmlElement.classList.add('dark');
                if (lightIcon) lightIcon.classList.remove('hidden');
                if (darkIcon) darkIcon.classList.add('hidden');
                localStorage.setItem('jams-theme', 'dark');
            } else {
                htmlElement.classList.remove('dark');
                if (darkIcon) darkIcon.classList.remove('hidden');
                if (lightIcon) lightIcon.classList.add('hidden');
                localStorage.setItem('jams-theme', 'light');
            }
        } catch (error) {
            console.error('Fout bij het toepassen van het thema:', error);
        }
    }

    // Controleer opgeslagen voorkeur in localStorage; standaard is donker ('dark')
    const savedTheme = localStorage.getItem('jams-theme');
    if (savedTheme === 'light') {
        applyTheme(false);
    } else {
        applyTheme(true);
    }

    // Luister naar klikken op de thema-knop in de navigatiebalk
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const isCurrentlyDark = htmlElement.classList.contains('dark');
            applyTheme(!isCurrentlyDark);
        });
    }
});
