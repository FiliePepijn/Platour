import * as THREE from 'three';
import { PCDLoader } from 'three/examples/jsm/loaders/PCDLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'; // Import OrbitControls
import { TrackballControls } from 'three/addons/controls/TrackballControls.js';

import GUI from 'lil-gui';


/**
 * gui
 */
const gui = new GUI();
gui.add({ message: 'Hello World' }, 'message');


const canvas = document.querySelector('canvas.webgl');
const scene = new THREE.Scene();




const sizes = {
    width: 350,
    height: 450
}

const renderer = new THREE.WebGLRenderer({
    canvas: canvas
}); 


renderer.setSize(sizes.width, sizes.height);


// Initialize camera
const camera = new THREE.PerspectiveCamera(75, sizes.width/sizes.height, 0.1, 1000);
scene.add(camera);
camera.position.set(0,0,2);

gui.add(camera.position, 'x').min(-10).max(10).step(0.01);


// Add controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.enablePan = false;
controls.enableZoom = true;
controls.enableRotate = true;
controls.maxAzimuthAngle = Math.PI / 4;
controls.minAzimuthAngle = -Math.PI / 4;
controls.minPolarAngle = Math.PI/2;
controls.maxPolarAngle = Math.PI/2;


gui.add(controls, 'maxAzimuthAngle').min(-Math.PI).max(Math.PI).step(0.01).name('Max Azimuth Angle')
gui.add(controls, 'minAzimuthAngle').min(-Math.PI).max(Math.PI).step(0.01).name('Min Azimuth Angle')


function autoRotate() {
    controls.autoRotate = true;
    controls.autoRotateSpeed = 5; // Set initial auto rotation speed

    // Check camera rotation continuously
    const update = () => {
        requestAnimationFrame(update);

        // Get current azimuth angle
        const currentAzimuthAngle = controls.getAzimuthalAngle();

        // Check if camera rotation is within the specified limits
        if (currentAzimuthAngle >= controls.maxAzimuthAngle) {
            console.log('Reached max azimuth angle');
            controls.autoRotateSpeed = 5; // Reverse auto rotation
        } else if (currentAzimuthAngle <= controls.minAzimuthAngle) {
            console.log('Reached min azimuth angle');
            controls.autoRotateSpeed = -5; // Continue with positive auto rotation
        }
    };

    // Start checking camera rotation
    update();
}

autoRotate();




// Load PCD file
const loader = new PCDLoader();

// Load a resource
loader.load(
    // load pcd file
    '../pcd/PepijnPCD.pcd',
    // load callback
    function (points) {

        const red = new THREE.Color(0xff0000);
        // Set material to red
        const material = new THREE.PointsMaterial({ color: 0xff0000 }); // Red color

        // Apply material to the loaded point cloud
        points.vertexColors = true;
        // set vertex points red
        points.material.color = red;
        points.scale.set(3.5, 3.5, 3.5);
        // Add point cloud to scene
        scene.add(points);
        

        
        // Render loop
        const tick = () => {
            // Update controls
            controls.update();
            // Render
            renderer.render(scene, camera);

            // Call tick again on the next frame
            window.requestAnimationFrame(tick);
        }

        tick();
    },
    // progress
    function (pointcloud) {
        // track progress
        console.log((pointcloud.loaded / pointcloud.total * 100) + '% loaded');
    },
);
