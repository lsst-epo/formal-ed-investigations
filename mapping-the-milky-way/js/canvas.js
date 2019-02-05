var camera, scene, renderer, backgroundMesh, texture, controls, sphere, geometry, material, light, ambientLight, arrowHelper;

init();
animate();

function init() {

  // Main Scene ===================
  const selectedTexture = document.getElementById('texture');
  const textureValue = selectedTexture.options[selectedTexture.selectedIndex].value;

  texture = new THREE.TextureLoader().load( 'assets/' + textureValue + '.png' );
  texture.mapping = THREE.UVMapping;

  // Camera
  camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 1000 );

  // Scene
  scene = new THREE.Scene();

  // Background
  backgroundMesh = new THREE.Mesh( new THREE.SphereBufferGeometry( 500, 32, 16 ), new THREE.MeshBasicMaterial( { map: texture } ) );
  backgroundMesh.geometry.scale( - 1, 1, 1 );
  scene.add( backgroundMesh );



  // Indicator Scene ============= 

  // Camera
  camera2 = new THREE.PerspectiveCamera( 20, window.innerWidth / window.innerHeight, 1, 1000 );
  camera.position.set( 0, 0, 2 );

  // Scene
  scene2 = new THREE.Scene();

  // Geometry
  geometry = new THREE.SphereGeometry( 2, 16, 16 );
  material = new THREE.MeshLambertMaterial( { color: 0xffffff, wireframe: true } );
  sphere = new THREE.Mesh( geometry, material );
  sphere.lookAt(camera.position)
  sphere.position.z = -20
  scene2.add( sphere );

  // Lights
  light = new THREE.PointLight( 0xffffff, 1, 100 );
  light.position.set( 0, 0, -5 );
  scene2.add( light );

  ambientLight = new THREE.AmbientLight( 0xffffff, .5 )
  scene2.add(ambientLight)

  var dir = new THREE.Vector3( 10, 0, 0 );

  //normalize the direction vector (convert to vector of length 1)
  // dir.normalize();

  var origin = new THREE.Vector3( .4, 0, -4 );
  var length = .3;
  var hex = 0xff0000;
  arrowHelper = new THREE.ArrowHelper( dir, origin, length, hex );
  scene2.add( arrowHelper );


  // Renderer
  renderer = new THREE.WebGLRenderer({ canvas:document.getElementById('main'), antialiasing:true });        
  renderer.setPixelRatio( window.devicePixelRatio );

  renderer.setSize( window.innerWidth, window.innerHeight );

  // Controls
  controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true; // For that slippery Feeling
  controls.dampingFactor = 0.1; // Needs to call update on render loop 
  controls.rotateSpeed = 0.08; // Rotate speed
  controls.enableZoom = false


  renderer.autoClear = false;

  window.addEventListener( 'resize', onWindowResized, false );
}

function onWindowResized() {
  renderer.setSize( window.innerWidth, window.innerHeight );
  camera.aspect = window.innerWidth / window.innerHeight;
  camera2.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
}



function animate() {
  requestAnimationFrame( animate );
  controls.update();
  render();
}

function render() {

  arrowHelper.rotation.x = (camera.position.y +190);
  arrowHelper.rotation.z = camera.position.x
  camera.lookAt( scene.position );
  
  renderer.clear();
  renderer.setViewport( 0, 0, window.innerWidth, window.innerHeight );
  renderer.render( scene, camera );

  renderer.clearDepth(); // important! clear the depth buffer
  renderer.setViewport( window.innerWidth - 350 , window.innerHeight -225, 400, 230 );
  renderer.render( scene2, camera2 );
}