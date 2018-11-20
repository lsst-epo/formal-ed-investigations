var camera, scene, renderer, backgroundMesh, texture, controls;

init();
animate();


function init( ) {
  const selectedTexture = document.getElementById('texture');
  const textureValue = selectedTexture.options[selectedTexture.selectedIndex].value;

  texture = new THREE.TextureLoader().load( 'images/' + textureValue + '.jpg' );
  texture.mapping = THREE.UVMapping;

  // Camera
  camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 1000 );
  camera.position.set( 1, 0, 0 );

  // Scene
  scene = new THREE.Scene();

  // Background
  backgroundMesh = new THREE.Mesh( new THREE.SphereBufferGeometry( 500, 32, 16 ), new THREE.MeshBasicMaterial( { map: texture } ) );
  backgroundMesh.geometry.scale( - 1, 1, 1 );
  scene.add( backgroundMesh );


  // Renderer
  renderer = new THREE.WebGLRenderer({ canvas:document.getElementById('main'), antialiasing:true });        
  renderer.setPixelRatio( window.devicePixelRatio );
  renderer.setSize( window.innerWidth, window.innerHeight );

  // Controls
  controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true; // For that slippery Feeling
  controls.dampingFactor = 0.02; // Needs to call update on render loop 
  controls.rotateSpeed = 0.08; // Rotate speed


  window.addEventListener( 'resize', onWindowResized, false );
  document.getElementById('main').addEventListener( 'wheel', onDocumentMouseWheel, false );
        
}

function onDocumentMouseWheel( event ) {
  var fov = camera.fov + event.deltaY * 0.05;
  camera.fov = THREE.Math.clamp( fov, 10, 75 );
  camera.updateProjectionMatrix();
}

function onWindowResized() {
  renderer.setSize( window.innerWidth, window.innerHeight );
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
}



function animate() {
  requestAnimationFrame( animate );
  controls.update();
  render();
}

function render() {
  camera.lookAt( scene.position );
  backgroundMesh.position.copy( camera.position );
  renderer.render( scene, camera );
}