/*=============== LINK ACTIVE ===============*/
const linkColor = document.querySelectorAll('.nav-link')

function colorLink() {
    linkColor.forEach(l => l.classList.remove('active-link'))
    this.classList.add('active-link')
}

linkColor.forEach(l => l.addEventListener('click', colorLink))


// De click funcite
const infoContainer = document.getElementById("infoContainer")
const infoContainer2 = document.getElementById("infoContainer2")
const infoContainer3 = document.getElementById("infoContainer3")
const infoContainer4 = document.getElementById("infoContainer4")
const infoContainer5 = document.getElementById("infoContainer5")
const infoContainer6 = document.getElementById("infoContainer6")
const infoContainer7 = document.getElementById("infoContainer7")
const infoContainer8 = document.getElementById("infoContainer8")

document.getElementById("svgDiv").onclick = function () {
    infoToggle()
};
function infoToggle() {
    infoContainer.classList.toggle("hide")
    infoContainer2.classList.toggle("hide")
    infoContainer3.classList.toggle("hide")
    infoContainer4.classList.toggle("hide")
    infoContainer5.classList.toggle("hide")
    infoContainer6.classList.toggle("hide")
    infoContainer7.classList.toggle("hide")
    infoContainer8.classList.toggle("hide")
    window.location.href = '#infoContainer';
}

//Darkmode

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
        root.style.setProperty('--accentGray', 'rgb(228, 228, 228)');
        root.style.setProperty('--textColor', '#143653');
        root.style.setProperty('--boxShadow', 'rgba(128, 128, 128, 0.132)');
        darkText.innerHTML = "Light";
        initialTheme = false;
    } else {
        root.style.setProperty('--darkBlue', '#ffffff');
        root.style.setProperty('--lightBlue', '#5CC8DE');
        root.style.setProperty('--whiteColor', '#143653');
        root.style.setProperty('--lightGray', '#0D2437');
        root.style.setProperty('--accentGray', '#1a4f7e');
        root.style.setProperty('--textColor', '#ffffff');
        root.style.setProperty('--boxShadow', 'rgba(128, 128, 128, 0.0)');
        darkText.innerHTML = "Dark";
        initialTheme = true;
    }
}

// Counter
$('.count-num').each(function () {
    var $this = $(this),
        countTo = $this.attr('data-count');

    $({ countNum: $this.text() }).animate({
        countNum: countTo
    },
        {
            duration: 30000000000,
            easing: 'linear',
            step: function () {
                $this.text(Math.floor(this.countNum));
            },
            complete: function () {
                $this.text(this.countNum);
            }
        });
});




