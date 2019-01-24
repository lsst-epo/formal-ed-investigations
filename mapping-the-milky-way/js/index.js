var camera, scene, renderer, backgroundMesh, texture, controls, sphere;

init();
animate();

function scrollToQuestionNode(id, location) {
  const element = document.getElementById(id);
  element.scrollIntoView({ block: 'start',  behavior: 'smooth' });
  document.getElementById('texture').value = location
  document.getElementById('location').innerHTML = location
  init()
}

function init() {

  const selectedTexture = document.getElementById('texture');
  const textureValue = selectedTexture.options[selectedTexture.selectedIndex].value;


  texture = new THREE.TextureLoader().load( 'assets/' + textureValue + '.png' );
  texture.mapping = THREE.UVMapping;

  // Camera
  camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 1000 );
  // camera.position.set( 10, 0, 2 );

  // Indicator Camera
  camera2 = new THREE.PerspectiveCamera( 20, window.innerWidth / window.innerHeight, 1, 1000 );
  camera.position.set( 0, 0, 2 );

  // Scene
  scene = new THREE.Scene();

  // Indicator Scene
  scene2 = new THREE.Scene();

  // Background
  backgroundMesh = new THREE.Mesh( new THREE.SphereBufferGeometry( 500, 32, 16 ), new THREE.MeshBasicMaterial( { map: texture } ) );
  backgroundMesh.geometry.scale( - 1, 1, 1 );
  scene.add( backgroundMesh );

  // Indicator Geometry
  var geometry = new THREE.SphereGeometry( 2, 16, 16 );
  var material = new THREE.MeshLambertMaterial( { color: 0xffffff, wireframe: true } );
  sphere = new THREE.Mesh( geometry, material );
  sphere.lookAt(camera.position)
  sphere.position.z = -20
  scene2.add( sphere );

  // Indicator Lights
  var light = new THREE.PointLight( 0xffffff, 1, 100 );
  light.position.set( 0, 0, -10 );
  scene2.add( light );

  var ambientLight = new THREE.AmbientLight( 0xffffff, .1 )
  scene2.add(ambientLight)

  // Renderer
  renderer = new THREE.WebGLRenderer({ canvas:document.getElementById('main'), antialiasing:true });        
  renderer.setPixelRatio( window.devicePixelRatio );

  // renderer.setSize( window.innerWidth, (window.innerHeight * .85) );
  renderer.setSize( window.innerWidth, window.innerHeight );

  // Controls
  controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true; // For that slippery Feeling
  controls.dampingFactor = 0.1; // Needs to call update on render loop 
  controls.rotateSpeed = 0.08; // Rotate speed
  controls.enableZoom = false


  renderer.autoClear = false; // For two scenes

  window.addEventListener( 'resize', onWindowResized, false );
  // document.getElementById('main').addEventListener( 'wheel', onDocumentMouseWheel, false );

 
        
}

function onDocumentMouseWheel( event ) {
  var fov = camera.fov + event.deltaY * 0.02;
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

  // Moves Indicator w/ Camera
  sphere.rotation.x = camera.position.y
  sphere.rotation.y = camera.position.x
  // sphere.rotation.y = camera.position.y

  // sphere.rotation.y += -.01
  camera.lookAt( scene.position );
  // camera2.lookAt( scene2.position );
  // backgroundMesh.position.copy( camera.position );

  // renderer.clear();
  renderer.setViewport( 0, 0, window.innerWidth, window.innerHeight );
  renderer.render( scene, camera );

  renderer.clearDepth(); // important! clear the depth buffer
  renderer.setViewport( window.innerWidth - 450, window.innerHeight - 275, 500, 300 );
  renderer.render( scene2, camera2 );
}