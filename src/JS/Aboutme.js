import * as THREE from 'three';
import { PCDLoader } from 'three/examples/jsm/loaders/PCDLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'; // Import OrbitControls

const canvas = document.querySelector('canvas.webgl');

const scene = new THREE.Scene();

// Load PCD file
const loader = new PCDLoader();

const sizes = {
    width: 800,
    height: 600
}

// Load a resource
loader.load(
    // load pcd file
    '../pcd/PepijnPCD.pcd',
    // load callback
    function (points) {
        // Initialize camera
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        scene.add(camera);
        camera.position.z = 9;
        camera.position.y = 2.5;

        camera.position.x = 5;

        
        const renderer = new THREE.WebGLRenderer({
            canvas: canvas
        }); 
        renderer.setSize(window.innerWidth, window.innerHeight);

        // Add controls
        const controls = new OrbitControls(camera, renderer.domElement);

        controls.target.copy(points.position);

        // Set point cloud scale
        points.scale.set(3,3, 3);


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
    // error callback
    function (error) {
        console.log('An error happened');
        console.log(error);
    }
);