/*=============== LINK ACTIVE ===============*/
const linkColor = document.querySelectorAll('.nav-link')

function colorLink() {
    linkColor.forEach(l => l.classList.remove('active-link'))
    this.classList.add('active-link')
}

linkColor.forEach(l => l.addEventListener('click', colorLink))


// De click funcite
// const infoContainer = document.getElementById("infoContainer")
// const infoContainer2 = document.getElementById("infoContainer2")
// const infoContainer3 = document.getElementById("infoContainer3")
// const infoContainer4 = document.getElementById("infoContainer4")
// const infoContainer5 = document.getElementById("infoContainer5")
// const infoContainer6 = document.getElementById("infoContainer6")
// const infoContainer7 = document.getElementById("infoContainer7")
// const infoContainer8 = document.getElementById("infoContainer8")

// document.getElementById("svgDiv").onclick = function () {
//     infoToggle()
// };
// function infoToggle() {
//     infoContainer.classList.toggle("hide")
//     infoContainer2.classList.toggle("hide")
//     infoContainer3.classList.toggle("hide")
//     infoContainer4.classList.toggle("hide")
//     infoContainer5.classList.toggle("hide")
//     infoContainer6.classList.toggle("hide")
//     infoContainer7.classList.toggle("hide")
//     infoContainer8.classList.toggle("hide")
//     window.location.href = '#infoContainer';
// }

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
        root.style.setProperty('--worldmapGray', '#dbdbdb');
        root.style.setProperty('--worldmapBorder', '#8c8c8c');
        root.style.setProperty('--worldmapbuttons', 'rgb(235, 235, 235)');
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
        root.style.setProperty('--worldmapGray', '#0D2437');
        root.style.setProperty('--worldmapBorder', '#1a4f7e');
        root.style.setProperty('--worldmapbuttons', '#5CC8DE');
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

// test
var bubble_map = new Datamap({
    scope: 'world',
    element: document.getElementById("bubbles"),
    setProjection: function (element) {
        var projection = d3.geo.equirectangular()
            .center([-90, 15])
            .rotate([0, 0])
            .scale(400)
            .translate([element.offsetWidth / 2, element.offsetHeight / 2]);
        var path = d3.geo.path()
            .projection(projection);

        return { path: path, projection: projection };
    },
    responsive: true,
    geographyConfig: {
        popupOnHover: false,
        highlightOnHover: false,
        borderWidth: 0.3,
        borderOpacity: 1,
        borderColor: 'var(--worldmapBorder)',
    },

    bubblesConfig: {
        borderWidth: 1,
        borderOpacity: 1,
        borderColor: '#FFFFFF',
        highlightOnHover: true,
        highlightFillColor: '#143653',
        highlightBorderColor: '0',
        highlightBorderWidth: 2,
        highlightBorderOpacity: 1,
        popupTemplate: function (geography, data) { // This function should just return a string
            return '<div class="hoverinfo" style="box-shadow: none"><strong>' + data.name + '</strong></div>';
        }
    },

    arcConfig: {
        strokeColor: '#DD1C77',
        strokeWidth: 1,
        arcSharpness: 0,
        animationSpeed: 600, // Milliseconds

    },

    fills: {
        defaultFill: 'var(--worldmapGray)',
        inOperation: '#84ce5f',
        planned: '#6c6c6c',
        signed: '#6c6c6c',
        installed: '#5CC8DE',
        selected: 'var(--darkBlue)'
    },
});

// Pure JavaScript
window.addEventListener('resize', function () {
    bubble_map.resize();
});

// Alternatively with d3
d3.select(window).on('resize', function () {
    bubble_map.resize();
});


bubble_map.bubbles([
    {
        name: 'System 002',
        radius: 10,
        yeild: 15000,
        country: 'Indonesia',
        significance: 'Ocean System',
        fillKey: 'inOperation',
        date: '2023-04-05',
        latitude: 28.56507,
        longitude: -135.3882,
    },
    {
        name: 'Interceptor 001',
        radius: 10,
        yeild: 15000,
        country: 'Indonesia',
        significance: 'Interceptor Original',
        fillKey: 'inOperation',
        date: '2023-04-05',
        latitude: -6.1058,
        longitude: 106.7511,
    },
    {
        name: 'Interceptor 002',
        radius: 10,
        yeild: 15000,
        country: 'Malaysia',
        significance: 'Interceptor Original 2rd Gen',
        fillKey: 'inOperation',
        date: '2023-04-05',
        latitude: 10.01218,
        longitude: 105.81536,
    },
    {
        name: 'Interceptor 003',
        radius: 10,
        yeild: 15000,
        country: 'Viet Nam',
        significance: 'Interceptor Original 2rd Gen',
        fillKey: 'inOperation',
        date: '2023-05-12',
        latitude: 10.01218,
        longitude: 105.81536,
    },
    {
        name: 'Interceptor 004',
        radius: 10,
        yeild: 15000,
        country: 'Dominican Republic',
        significance: 'Interceptor Original 3rd Gen',
        fillKey: 'inOperation',
        date: '2023-05-12',
        latitude: 18.48952,
        longitude: -69.88289,
    },
    {
        name: 'Interceptor 005',
        radius: 10,
        yeild: 15000,
        country: 'Malaysia',
        significance: 'Interceptor Original 3rd Gen',
        fillKey: 'selected',
        date: '2023-05-23',
        latitude: 3.01564,
        longitude: 101.37758,
    },
    {
        name: 'Interceptor 006',
        radius: 20,
        yeild: 15000,
        country: 'Guetemala',
        significance: 'Interceptor Barricade',
        fillKey: 'installed',
        date: '2023-01-01',
        latitude: 14.75494,
        longitude: -90.49856,
    },
    {
        name: 'Interceptor 007',
        radius: 10,
        yeild: 15000,
        country: 'USA',
        significance: 'Interceptor Original 3rd Gen',
        fillKey: 'inOperation',
        date: '2023-01-01',
        latitude: 33.96279,
        longitude: -118.45434,
    },
    {
        name: 'Interceptor for Chao Phraya',
        radius: 10,
        yeild: 15000,
        country: 'Thailand',
        significance: 'Interceptor Original 3rd Gen',
        fillKey: 'planned',
        date: '2022-02-28',
        latitude: 13.67817,
        longitude: 100.55193,
    },

    {
        name: 'Kingston Harbour Project',
        radius: 10,
        yeild: 50000,
        country: 'Jamaica',
        fillKey: 'inOperation',
        significance: 'Interceptor Barrier, Interceptor Tender',
        date: '2022-11-09"',
        latitude: 17.96548,
        longitude: -76.80175
    }

]);






