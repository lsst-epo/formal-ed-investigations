var camera, scene, renderer, controls;
var planets = [];
var timestamp = 0;
var scaleVector = new THREE.Vector3();

init();
animate();

function init() {

  // Renderer
  renderer = new THREE.WebGLRenderer({ canvas:document.getElementById('main'), antialiasing:true });
  renderer.shadowMap.enabled = true;
  renderer.setClearColor(0x000000);
  renderer.setSize( (window.innerWidth *.55),(window.innerHeight) );

  // Camera
  camera = new THREE.PerspectiveCamera(45, (window.innerWidth *.55) / (window.innerHeight), 1, 1000);
  camera.position.set(10, 100, 175);

  // Scene
  scene = new THREE.Scene();

  // Controls

  controls = new THREE.OrbitControls(camera, renderer.domElement);

  var createPlanet = function(name, object_radius, orbit_x, orbit_y, speed) {

    // Planet Geometry
    var geometry = new THREE.SphereGeometry(object_radius, 32, 16);

    // Planet Material
    var material = new THREE.MeshBasicMaterial({
      color: Math.random() * 0xFFFFFF,
      //wireframe: true
    });

    var planet = new THREE.Mesh(geometry, material);
    planet.material.shading = THREE.SmoothShading;

    planet.userData.orbit = orbit_x;
    planet.userData.speed = speed;

    
    planets.push(planet);
    scene.add(planet);

    // Orbit 
    var shape = new THREE.Shape();

    // 
    shape.moveTo(orbit_x, orbit_y);


    shape.absellipse(0, 0, orbit_x, orbit_y, 0, 2 * Math.PI, false, 0);
    var spacedPoints = shape.createSpacedPointsGeometry(128);
    spacedPoints.rotateX(THREE.Math.degToRad(-90));
    var orbit = new THREE.Line(spacedPoints, new THREE.LineBasicMaterial({
      color: "grey"
    }));
    scene.add(orbit);
  };

  createPlanet("Mercury", 1, 10, 10, 5);
  createPlanet("Venus", 1.5, 20, 20, 3);
  createPlanet("Earth", 2, 30, 30, 4);
  createPlanet("Mars", 1.8, 40, 40, 2);
  createPlanet("Jupiter", 3, 60, 60, 0.8);
  createPlanet("Saturn", 2.5, 70, 70, 0.5);
  createPlanet("Uranus", 1.75, 80, 80, 0.4);
  createPlanet("Neptune", 0.8, 90, 90, 0.2);
  createPlanet("TNO", .8, 90, 140, 0.2);


  var sun = new THREE.Mesh(new THREE.SphereGeometry(5, 32, 16), new THREE.MeshBasicMaterial({
    color: "gold"
  }));
  scene.add(sun);
}

function animate() {
  timestamp = Date.now() * 0.0001;
  requestAnimationFrame(animate);
  planets.forEach(function(planet) {
    
    var scaleFactor = 8;
    var sprite = planet.children[0];
    var scale = scaleVector.subVectors(planet.position, camera.position).length() / scaleFactor;
    var orbit = planet.userData.orbit;
    var speed = planet.userData.speed;
    planet.position.x = Math.cos(timestamp * speed) * orbit;
    planet.position.z = Math.sin(timestamp * speed) * orbit;
  });
  render();
}

function render() {
  renderer.render(scene, camera);
}
