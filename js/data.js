let backgroundTextures = [
    "images/background/1.jpg",
    "images/background/2.jpg",
    "images/background/3.jpg",
    "images/background/4.jpg",
    "images/background/5.jpg",
    "images/background/6.jpg"
];

let data = {
    'systemSolar': {
    },
    'sun': {
        color: "images/sun_color.jpg",
        parent: 'systemSolar',
        mesh: 'sphere'
    },
    'mercury': {
        color: "images/mercury_color.jpg",
        parent: 'sun',
        mesh: 'sphere'
    },
    'venus': {
        color: "images/venus_color.jpg",
        parent: 'sun',
        mesh: 'sphere'
    },
    'earth': {
        color: "images/earth_color.jpg",
        parent: 'sun',
        mesh: 'sphere'
    },
    'earthCloud': {
        color: "images/earth_cloud_color.jpg",
        parent: 'earth',
        mesh: 'sphere'
    },
    'moon': {
        color: "images/moon_color.jpg",
        parent: 'earth',
        mesh: 'sphere'
    },
    'mars': {
        color: "images/mars_color.jpg",
        parent: 'sun',
        mesh: 'sphere'
    },
    'jupiter': {
        color: "images/jupiter_color.jpg",
        parent: 'sun',
        mesh: 'sphere'
    },
    'saturn': {
        color: "images/saturn_color.jpg",
        parent: 'sun',
        mesh: 'sphere'
    },
    'saturnRings': {
        color: "images/saturn_rings_color.jpg",
        parent: 'saturn',
        mesh: 'ring'
    },
    'uranus': {
        color: "images/uranus_color.jpg",
        parent: 'sun',
        mesh: 'sphere'
    },
    'uranusRings': {
        color: "images/uranus_rings_color.jpg",
        parent: 'uranus',
        mesh: 'ring'
    },
    'neptune': {
        color: "images/neptune_color.jpg",
        parent: 'sun',
        mesh: 'sphere'
    }
};

export {backgroundTextures, data};
