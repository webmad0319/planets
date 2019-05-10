// Dani Vicario - d3Demo experiment (canvas)- Fri May 10 12:04:38 CEST 2019
function randomFloat(min, max) {
    return Math.random() * (max - min) + min;
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

var w = window.innerWidth;
var h = window.innerHeight;
var w2 = w / 2;
var h2 = h / 2;

var PI = Math.PI;
var PI_DOUBLE = 2 * Math.PI;
var PI_HALF = Math.PI / 2;

// source: https://nssdc.gsfc.nasa.gov/planetary/factsheet/
var planetData = [
    {
        name: "MERCURY",
        diameter: 4879,
        color: "yellow"
    },
    {
        name: "VENUS",
        diameter: 12104,
        color: "silver"
    },
    {
        name: "EARTH",
        diameter: 12756,
        color: "blue"
    },
    {
        name: "MARS",
        diameter: 6792,
        color: "red"
    },
    {
        name: "JUPITER",
        diameter: 142984,
        color: "brown"
    },
    {
        name: "SATURN",
        diameter: 120536,
        color: "#d0b278"
    },
    {
        name: "URANUS",
        diameter: 51118,
        color: "#c1e7ea"
    },
    {
        name: "NEPTUNE",
        diameter: 49528,
        color: "#426bfd"
    },
    {
        name: "PLUTO",
        diameter: 2370,
        color: "#eeeeee"
    }
]

var planetScale = d3.scaleLinear().domain([2370, 142984]).range([15, 150])

var canvas = d3
    .select("#canvas")
    .attr("height", h)
    .attr("width", w);

canvas
    .selectAll("circle")
    .data(planetData)
    .enter()
    .append("circle")
    .attr("cx", (d, idx) => idx * 200 + 100)
    .attr("cy", h / 2)
    .attr("r", d => planetScale(d.diameter) )
    .style("fill", d => d.color)
    .append("title")
    .text(d => d.name)


document.querySelector("#b1").onclick = function () {
    canvas
        .selectAll("circle")
        .transition()
        .duration(1000)
        .attr("r", 10)
        .style("fill", "green")
}



