import * as THREE from 'three';
import {GLTFLoader} from '../node_modules/three/examples/jsm/loaders/GLTFLoader.js';
import {OrbitControls} from '../node_modules/three/examples/jsm/controls/OrbitControls.js';

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

scene.background = new THREE.Color(0xfafafa);

//let geo = new THREE.BoxGeometry(1, 1, 1);
let texture = new THREE.TextureLoader().load('./image/logo_hitam.JPG');
/*let mat = new THREE.MeshStandardMaterial({roughness: 10});
let mesh = new THREE.Mesh(geo, mat);
mesh.castShadow = true;
mesh.receiveShadow = true;
scene.add(mesh);
scene.add(new THREE.BoxHelper(mesh, 0x000000));
*/

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

let pGeo = new THREE.PlaneGeometry(10, 10, 100, 100);
let pMat = new THREE.MeshPhongMaterial({
    color: 0xffffff, side: THREE.DoubleSide
});
pMat.map = texture;
let pMesh = new THREE.Mesh(pGeo, pMat);
pMesh.rotation.x -= Math.PI / 2;
pMesh.position.set(0, -1, 0);
pMesh.receiveShadow = true;
scene.add(pMesh);

let ambient = new THREE.AmbientLight(0xffffff,0.4);
scene.add(ambient);

let pLight = new THREE.PointLight(0xffffff, 0.7);
pLight.position.set(1, 4, 1);
pLight.castShadow = true;
scene.add(pLight);
scene.add(new THREE.PointLightHelper(pLight, 0.2, 0x000000));

//var controls = new THREE.OrbitControls(cam, renderer.domElement);

window.addEventListener('resize', function(){
    var width = window.innerWidth;
    var height = window.innerHeight; 
    renderer.setSize(width*0.8, height*0.8);
    cam.aspect = width/height;
    cam.updateProjectionMatrix();
});
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, cam);
}

animate();
