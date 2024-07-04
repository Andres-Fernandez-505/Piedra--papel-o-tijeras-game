

document.addEventListener('DOMContentLoaded', () => {
    const themeSelector = document.getElementById('themeSelector');

    themeSelector.addEventListener('change', () => {
        const selectedTheme = themeSelector.value;
        document.body.className = ''; // Elimina cualquier clase previa
        document.body.classList.add(`${selectedTheme}-theme`);
    });
});


// document.addEventListener('DOMContentLoaded', () => {
//     const themeSelector = document.getElementById('themeSelector');

//     themeSelector.addEventListener('change', () => {
//         const selectedTheme = themeSelector.value;
//         document.documentElement.setAttribute('data-theme', selectedTheme);
//     });
// });





// document.addEventListener('DOMContentLoaded', () => {
//     const toggleThemeButton = document.getElementById('toggleTheme');

//     toggleThemeButton.addEventListener('click', () => {
//         const currentTheme = document.documentElement.getAttribute('data-theme');
//         const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

//         document.documentElement.setAttribute('data-theme', newTheme);
//     });
// });




// const toggleThemeButton = document.getElementById('toggleTheme');

// toggleThemeButton.addEventListener('click', () => {
//   const currentTheme = document.documentElement.getAttribute('data-theme');
//   const newTheme = currentTheme === 'light' ? 'dark' : 'light';

//   document.documentElement.setAttribute('data-theme', newTheme);

// });
