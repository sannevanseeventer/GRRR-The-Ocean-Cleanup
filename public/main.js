/*=============== LINK ACTIVE ===============*/
const linkColor = document.querySelectorAll('.nav-link')

function colorLink() {
    linkColor.forEach(l => l.classList.remove('active-link'))
    this.classList.add('active-link')
}

linkColor.forEach(l => l.addEventListener('click', colorLink))


// // De click funcite
// const infoContainer = document.getElementById("infoContainer")

// document.getElementById("svgDiv").onclick = function () {
//     infoToggle()
// };
// function infoToggle() {
//     infoContainer.classList.toggle("hide")
//     window.location.href = '#infoContainer';
// }

const darkButton = document.querySelector('.darkmode');
const darkText = document.getElementById("darkmode-btn-text");
const root = document.documentElement;
let initialTheme = false;

darkButton.addEventListener('click', toggleDarkMode);

function toggleDarkMode() {
    if (initialTheme) {
        root.style.setProperty('--darkBlue', '#143653');
        root.style.setProperty('--lightBlue', '#5CC8DE');
        root.style.setProperty('--whiteColor', '#ffffff');
        root.style.setProperty('--lightGray', '#f7f7f7');
        root.style.setProperty('--textColor', '#143653');
        root.style.setProperty('--boxShadow', 'rgba(128, 128, 128, 0.132)');
        // darkText.innerHTML = "Light";
        initialTheme = false;
    } else {
        root.style.setProperty('--darkBlue', '#ffffff');
        root.style.setProperty('--lightBlue', '#5CC8DE');
        root.style.setProperty('--whiteColor', '#143653');
        root.style.setProperty('--lightGray', '#0D2437');
        root.style.setProperty('--textColor', '#ffffff');
        root.style.setProperty('--boxShadow', 'rgba(128, 128, 128, 0.0)');
        // darkText.innerHTML = "Dark";
        initialTheme = true;
    }
}

