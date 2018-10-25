let renderer,
    scene,
    camera,
    controls,
    sphere,
    cylinder;

let startTime	= Date.now();

init();
main();
render();

function init() {
  
  // Renderer
  renderer = new THREE.WebGLRenderer({ canvas:document.getElementById('main'), antialiasing:true });
  renderer.shadowMap.enabled = true;
  renderer.setClearColor(0x000000);
  renderer.setSize( window.innerWidth,window.innerHeight );
  
  // Camera
  camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 1000 );
  camera.position.set( 5.5, 0, 0 );
  controls = new THREE.OrbitControls(camera, document.getElementById("main"));
  
  // Scene
  scene = new THREE.Scene();
  
  // Lights
  // Default
  scene.add( new THREE.AmbientLight( 0xffffff, 0.3 ));
  
  // Spotlight
  var spotLight = new THREE.SpotLight( 0xcccccc, 0.8 );
  spotLight.position.set( 10, 30, 20 );
  spotLight.castShadow = true;
  spotLight.shadow.mapSize.width = 2048;
  spotLight.shadow.mapSize.height = 2048; 
  scene.add( spotLight );

  // var spotLightHelper = new THREE.SpotLightHelper( spotLight );
  // scene.add( spotLightHelper );
}

function main(){
  
    
    var texture = new THREE.TextureLoader().load( "images/land_ocean_ice_cloud_2048.jpg" );



    // Sphere
    var geometry = new THREE.SphereGeometry( 5, 32, 32 );
    var material = new THREE.MeshBasicMaterial({
    map: texture,
    wireframe: false
});

    

    sphere = new THREE.Mesh( geometry, material );
    sphere.material.side = THREE.BackSide;

    sphere.castShadow = true;
    scene.add( sphere );
  
  
}

function render() {
  
    camera.lookAt( scene.position );  
    renderer.render( scene,camera );
    window.requestAnimationFrame( render );
}


window.addEventListener( 'resize', function() {
  
  renderer.setSize( window.innerWidth,window.innerHeight ); 
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});