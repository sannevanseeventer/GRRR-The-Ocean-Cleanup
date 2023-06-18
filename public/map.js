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

//GLOBE TEST
// /* globals d3 topojson */
// // include an svg wide as tall
// const width = 800;
// const height = 800;

// const world = d3
//     .select('.viz')
//     .append('svg')
//     .attr('viewBox', `0 0 ${width} ${height}`);

// // function called as the geometries are retrieved from the world atlas
// function mapData(countries, landings) {
//     // set up a projection using the size of the svg as a reference
//     const projection = d3
//         // for the other projections browse the docs
//         // https://github.com/d3/d3-geo/blob/master/README.md#geoOrthographic
//         .geoOrthographic()
//         .fitSize([width, height], countries);

//     // create a generator function to use the projection in order to map the geometries to the svg
//     const geoPath = d3
//         .geoPath()
//         .projection(projection);

//     // include the world elements in a group
//     const group = world.append('g');


//     // sphere for the world's outline
//     group
//         .append('path')
//         .attr('class', 'sphere')
//         .datum({ type: 'Sphere' })
//         .attr('d', geoPath)
//         .attr('fill', '#5CC8DE');

//     // countries
//     group
//         .selectAll('path.country')
//         .data(countries.features)
//         .enter()
//         .append('path')
//         .attr('class', 'country')
//         .attr('d', geoPath)
//         .attr('fill', '#F1F1F1');


//     // graticule
//     const geoGraticule = d3
//         .geoGraticule();

//     group
//         .append('path')
//         .attr('class', 'graticule')
//         .attr('d', geoPath(geoGraticule()))
//         .attr('stroke', 'hsl(215, 40%, 0%)')
//         .attr('fill', 'none')
//         .attr('opacity', 0.15);

//     // landing sites
//     group
//         .selectAll('path.landing')
//         .data(landings.features)
//         .enter()
//         .append('path')
//         .attr('class', 'landing')
//         .attr('d', geoPath)
//         .attr('fill', 'rgb(132, 206, 95)');

//     // allow to rotate the projection following mouse events
//     const rotation = {
//         x: 0,
//         y: 0,
//     };
//     let isMouseDown = false;

//     d3.select('body')
//         .on('mouseup', () => { isMouseDown = false; })
//         .on('mouseleave', () => { isMouseDown = false; });

//     world
//         .on('mousedown', () => { isMouseDown = true; })
//         .on('mouseup', () => { isMouseDown = false; })
//         .on('mousemove', () => {
//             if (isMouseDown) {
//                 // update the rotation using the horizontal and vertical movement
//                 // ! greater y values should be reflected in a rotation in the opposite direction
//                 const { movementX, movementY } = d3.event;
//                 rotation.x += movementX;
//                 rotation.y -= movementY;

//                 // update the projection and the d attribute of all elements which rely on the projection
//                 projection
//                     .rotate([rotation.x, rotation.y]);

//                 d3.select('path.sphere')
//                     .attr('d', geoPath);

//                 d3.selectAll('path.country')
//                     .attr('d', geoPath);

//                 d3.selectAll('path.graticule')
//                     .attr('d', geoPath(geoGraticule()));

//                 d3.selectAll('path.landing')
//                     .attr('d', geoPath);
//             }
//         });
// }

// // topojson describing the world atlas
// const worldAtlas = 'https://unpkg.com/world-atlas@1.1.4/world/110m.json';
// const meteoriteLandings = 'https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/meteorite-strike-data.json';

// // fetch the data from the provided url(s) and call the function mapping the geometries to path elements
// Promise
//     .all([d3.json(worldAtlas), d3.json(meteoriteLandings)])
//     .then(([atlas, landings]) => {
//         // convert the topojson to geojson
//         const countries = topojson.feature(atlas, atlas.objects.countries);
//         mapData(countries, landings);
//     });

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




