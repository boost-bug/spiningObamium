//import './style.css'
import './three.min.js'
import './GLTFLoader.js'
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000);

const render = new THREE.WebGLRenderer({
  canvas: document.querySelector('#render')
});

render.setPixelRatio(window.devicePixelRatio);
render.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(20);

const loader = new THREE.GLTFLoader();

var obama
loader.load( './obama.glb', function ( gltf ) {

  obama = scene.add( gltf.scene );
  setup();

}, undefined, function ( error ) {

	console.error( error );

} );

function setup() {
  const light = new THREE.AmbientLight( 0xffffff ); // soft white light
  scene.add( light );
  const obamaClone = obama.clone();
  scene.add(obamaClone)
  obamaClone.position.setZ(30)
  animate()
}

function animate() {
  requestAnimationFrame(animate);
  obama.rotation.y += 0.06
  render.render(scene, camera);
}
