var backgroundTextures = [
    "images/background/1.jpg",
    "images/background/2.jpg",
    "images/background/3.jpg",
    "images/background/4.jpg",
    "images/background/5.jpg",
    "images/background/6.jpg"
];

var data = {
    'systemSolar': {
        
    },
    'sun': {
        color: "images/sun_color.jpg",
        parent: 'systemSolar'
    },
    'mercury': {
        color: "images/mercury_color.jpg",
        parent: 'sun'
    },
    'venus': {
        color: "images/venus_color.jpg",
        parent: 'sun'
    },
    'earth': {
        color: "images/earth_color.jpg",
        parent: 'sun'
    },
    'earthCloud': {
        color: "images/earth_cloud_color.jpg",
        parent: 'earth'
    },
    'moon': {
        color: "images/moon_color.jpg",
        parent: 'earth'
    },
    'mars': {
        color: "images/mars_color.jpg",
        parent: 'sun'
    },
    'jupiter': {
        color: "images/jupiter_color.jpg",
        parent: 'sun'
    },
    'saturn': {
        color: "images/saturn_color.jpg",
        parent: 'sun'
    },
    'saturnRings': {
        color: "images/saturn_rings_color.jpg",
        parent: 'saturn'
    },
    'uranus': {
        color: "images/uranus_color.jpg",
        parent: 'sun'
    },
    'uranusRings': {
        color: "images/uranus_rings_color.jpg",
        parent: 'uranus'
    },
    'neptune': {
        color: "images/neptune_color.jpg",
        parent: 'sun'
    }
};

export {backgroundTextures, data};
