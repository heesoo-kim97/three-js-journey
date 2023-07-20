// Scene
const scene = new THREE.Scene();

// Red cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: '#ff0000' });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Camera - Point of View - can have multiple views and multiple types of Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height) // 75 degree - how far of point of view you want in your camera
camera.position.y = -1;
camera.position.x = 2;
camera.position.z = 3;
scene.add(camera);

// Renderer
const canvas = document.querySelector('.webgl');

const renderer = new THREE.WebGLRenderer({
    canvas: canvas
});

renderer.setSize(sizes.width, sizes.height);

renderer.render(scene, camera);
