// Toggle: if it selects the dark class then dark mode and vice versa

// console.log(localStorage.getItem('colorMode'));

const darkButton = document.getElementById('dark');
const lightButton = document.getElementById('light');

// const setColorMode = () => {
//   // console.log('Set Color Mode');
//   // console.log(localStorage.getItem('colorMode'));

//   if (localStorage.getItem('colorMode') == 'dark') {
//     setDarkMode();
//     darkButton.click();
//   } else if (localStorage.getItem('colorMode') == 'light') setLightMode();
//   lightButton.click();
// };

// const checkMode = () => {
//   // we want dark mode to be the default
//   if (window.matchMedia('(prefers-color-scheme: light)').matches) {
//     lightButton.click();
//   } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
//     darkButton.click();
//   }
// };

// const checkModeChange = () => {
//   window
//     .matchMedia('(prefers-color-scheme:dark)')
//     .addEventListener('change', (e) => {
//       console.log('checkModeChange');
//       checkMode();
//     });
// };
const setDarkMode = () => {
  document.querySelector('body').classList = 'dark';
  localStorage.setItem('colorMode', 'dark');
};
// const setLightMode = () => {
//   document.querySelector('body').classList = 'light';
// };
const setLightMode = () => {
  document.querySelector('body').classList = 'light';
  localStorage.setItem('colorMode', 'light');
};

const colorModeFromLocalStorage = () => {
  return localStorage.getItem('colorMode');
};

const colorModeFromPreferences = () => {
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'; // If preference is set or does not match anything (light is default)
};

// setColorMode();
// checkMode();

// const radioButtons = document.querySelectorAll('.toggle__wrapper input');

// for (let i = 0; i < radioButtons.length; i++) {
//   radioButtons[i].addEventListener('click', (e) => {
//     if (darkButton.checked) {
//       document.querySelector('body').classList = 'dark';
//       localStorage.setItem('colorMode', 'dark');
//     } else {
//       document.querySelector('body').classList = 'light';
//       localStorage.setItem('colorMode', 'light');
//     }
//   });
// }
// add logic if its checked

const loadAndUpdateColor = () => {
  // local storage has precendence over the prefers-color-scheme
  const color = colorModeFromLocalStorage() || colorModeFromPreferences();
  color == 'dark' ? darkButton.click() : lightButton.click();
};

// when the inputs are clicked, check which radio button is checked and change the color
const radioButtons = document.querySelectorAll('.toggle__wrapper input');
radioButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    darkButton.checked ? setDarkMode() : setLightMode();
  });
});

// when the prefers-color-scheme changes, this event will be emitted
// event reflects the media query, if it matches, the new color is dark, else it is light
window
  .matchMedia('(prefers-color-scheme: dark)')
  .addEventListener('change', (event) => {
    event.matches ? darkButton.click() : lightButton.click();
  });

// Load the right color on startup - localStorage has precedence
loadAndUpdateColor();
