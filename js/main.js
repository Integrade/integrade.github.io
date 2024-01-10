import * as THREE from 'three';
import {GLTFLoader} from '../node_modules/three/examples/jsm/loaders/GLTFLoader.js';
import {OrbitControls} from '../node_modules/three/examples/jsm/controls/OrbitControls.js';
import {PointerLockControls} from '../node_modules/three/examples/jsm/controls/PointerLockControls.js'
import {FirstPersonControls} from '../node_modules/three/examples/jsm/controls/FirstPersonControls.js'
import {FlyControls} from '../node_modules/three/examples/jsm/controls/FlyControls.js'

var scene = new THREE.Scene();
var cam = new THREE.PerspectiveCamera(45,window.innerWidth/window.innerHeight, 1, 1000);
var renderer = new THREE.WebGLRenderer({antialias: true});

cam.position.z += 10;
cam.position.y += 5;

renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.BasicShadowMap;
renderer.setSize(window.innerWidth*0.8, window.innerHeight*0.8);
renderer.setPixelRatio(devicePixelRatio);
document.getElementById('canvas').appendChild(renderer.domElement);

scene.background = new THREE.Color(0xD8F2FF);

let texture = new THREE.TextureLoader().load('./image/logo_hitam.JPG');

//const controls = new OrbitControls(cam, renderer.domElement);
//controls.enableDamping = true;
//controls.enablePan = false;
//controls.minDistance = 5;
//controls.maxDistance = 20;
//controls.minPolarAngle = 0.5;
//controls.maxpolarAngle = 1.5;
//controls.autoRotate = false;
//controls.newTarget = new THREE.Vector3(0, 1, 0);
//controls.update();
//const controls = new PointerLockControls(cam, renderer.domElement);
//controls.update();
//const controls = new FirstPersonControls(cam, renderer.domElement);
//controls.mouseDragOn = true;
//controls.update();
let clock = new THREE.Clock();

//addEventListener('click',() =>{
  //  controls.lock();
//});

const loader = new GLTFLoader().setPath('./3D/rumah_contoh/')
loader.load('SampleLevel.glb', (gltf) => {
    const mesh = gltf.scene;

    mesh.traverse((child) => {
        if (child.isMesh){
            child.castShadow = true;
            child.receiveShadow = true;
        }
    })

    mesh.position.set(0, 0, 0);
    scene.add(mesh);
})

let ambient = new THREE.AmbientLight(0xffffff,0.4);
scene.add(ambient);

let pLight = new THREE.PointLight(0xffffff, 0.7);
pLight.position.set(1, 4, 1);
pLight.castShadow = true;
scene.add(pLight);
scene.add(new THREE.PointLightHelper(pLight, 0.2, 0x000000));

let keyboard = [];
addEventListener("keydown", (e) => {
    keyboard[e.key] = true;
})
addEventListener("keyup", (e) => {
    keyboard[e.key] = false;
})
function processKeyboard(delta){
    let speed = 0.2;
    let actualSpeed = speed * delta;
    if (keyboard["w"]){
        controls.moveForward(speed);
    }
    if (keyboard["s"]){
        controls.moveForward(-speed);
    }
    if (keyboard["a"]){
        controls.moveRight(-speed);
    }
    if (keyboard["d"]){
        controls.moveRight(speed);
    }
}

window.addEventListener('resize', function(){
    var width = window.innerWidth;
    var height = window.innerHeight; 
    renderer.setSize(width*0.8, height*0.8);
    cam.aspect = width/height;
    cam.updateProjectionMatrix();
});
function animate() {
    renderer.render(scene, cam);
    let delta = clock.getDelta();
    processKeyboard();
    requestAnimationFrame(animate);
}

animate();
