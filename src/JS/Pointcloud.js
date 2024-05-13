import * as THREE from 'three';
import { PCDLoader } from 'three/examples/jsm/loaders/PCDLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'; // Import OrbitControls
import { TrackballControls } from 'three/addons/controls/TrackballControls.js';
import GUI from 'lil-gui';
import pcd from '../pcd/PepijnPCD.pcd';

/**
 * gui
 */
//const gui = new GUI();

const canvas = document.querySelector('canvas.webgl');
const scene = new THREE.Scene();




const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
}); 


var sizes = {
    width: window.innerWidth / 4,
    height: window.innerHeight / 1
}
renderer.setSize(sizes.width, sizes.height);




window.addEventListener("resize", () => {
    sizes.width = window.innerWidth / 3;
    sizes.height = window.innerHeight / 1;
    renderer.setSize(sizes.width, sizes.height);
    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();
});

// Initialize camera
const camera = new THREE.PerspectiveCamera(75, sizes.width/sizes.height, 0.1, 1000);
scene.add(camera);
camera.position.set(0,0,9);



// Add controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.enablePan = false;
controls.enableZoom = false;
controls.enableRotate = true;
controls.maxAzimuthAngle = Math.PI / 4;
controls.minAzimuthAngle = -Math.PI / 4;
controls.minPolarAngle = Math.PI/2;
controls.maxPolarAngle = Math.PI/2;


function autoRotate() {
    var rotationspeed = 2;

    controls.autoRotate = true;
    controls.autoRotateSpeed = rotationspeed; 

    // Check camera rotation continuously
    const update = () => {
        requestAnimationFrame(update); 

        // Get current azimuth angle
        const currentAzimuthAngle = controls.getAzimuthalAngle();
        
        // Check if camera rotation is within the specified limits
        if (currentAzimuthAngle >= controls.maxAzimuthAngle) {
            console.log('Reached max azimuth angle');
            controls.autoRotateSpeed = rotationspeed;
             
        } else if (currentAzimuthAngle <= controls.minAzimuthAngle) {
            console.log('Reached min azimuth angle');
            controls.autoRotateSpeed = -rotationspeed;
            
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
    pcd,
    // load callback
    function (points) {

        const red = new THREE.Color(0xff0000);
        // Set material to red
        const material = new THREE.PointsMaterial({ color: 0xff0000 }); // Red color

        // Apply material to the loaded point cloud
        points.vertexColors = true;
        // set vertex points red
        points.material.color = red;
        
        // Add point cloud to scene
        scene.add(points);
        
        
        
        // Render loop
        const tick = () => {
            // Update controls
            controls.update();
            // Render
            const scaleRender = canvas.clientHeight/canvas.clientWidth+1*9;
            // console.log(scaleRender)
            points.scale.set(scaleRender,scaleRender,scaleRender);
            
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
