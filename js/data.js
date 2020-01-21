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
        mesh: 'sphere',
        distance: 0,
        size: 10,
    },
    'mercury': {
        color: "images/mercury_color.jpg",
        parent: 'sun',
        mesh: 'sphere',
        distance: 10,
        size: 0.38,
    },
    'venus': {
        color: "images/venus_color.jpg",
        parent: 'sun',
        mesh: 'sphere',
        distance: 20,
        size: 0.95,
    },
    'earth': {
        color: "images/earth_color.jpg",
        parent: 'sun',
        mesh: 'sphere',
        distance: 30,
        size: 1,
    },/*
    'earthCloud': {
        color: "images/earth_cloud_color.jpg",
        parent: 'earth',
        mesh: 'sphere',
        distance: 0,
        size: 1.01,
    },*/
    'moon': {
        color: "images/moon_color.jpg",
        parent: 'earth',
        mesh: 'sphere',
        distance: 3,
        size: 0.27,
    },
    'mars': {
        color: "images/mars_color.jpg",
        parent: 'sun',
        mesh: 'sphere',
        distance: 40,
        size: 0.53,
    },
    'jupiter': {
        color: "images/jupiter_color.jpg",
        parent: 'sun',
        mesh: 'sphere',
        distance: 50,
        size: 5,
    },
    'saturn': {
        color: "images/saturn_color.jpg",
        parent: 'sun',
        mesh: 'sphere',
        distance: 60,
        size: 4,
    },
    'saturnRings': {
        color: "images/saturn_rings_color.jpg",
        parent: 'saturn',
        mesh: 'ring',
        distance: 0,
        size: 4.4,
    },
    'uranus': {
        color: "images/uranus_color.jpg",
        parent: 'sun',
        mesh: 'sphere',
        distance: 70,
        size: 3,
    },
    'uranusRings': {
        color: "images/uranus_rings_color.jpg",
        parent: 'uranus',
        mesh: 'ring',
        distance: 0,
        size: 3.2,
    },
    'neptune': {
        color: "images/neptune_color.jpg",
        parent: 'sun',
        mesh: 'sphere',
        distance: 80,
        size: 3,
    }
};

let mainObjectName = "systemSolar";

export {backgroundTextures, data, mainObjectName};
