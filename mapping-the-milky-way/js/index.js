      var camera, scene, renderer;
      var material, backgroundMesh;
      var onPointerDownPointerX, onPointerDownPointerY, onPointerDownLon, onPointerDownLat;
      var lon = 0, lat = 0;
      var phi = 0, theta = 0;

      // Load Texture
      var textureLoader = new THREE.TextureLoader();

      textureLoader.load( 'images/test_MW_map.png', function ( texture ) {
        texture.mapping = THREE.UVMapping;
        init( texture );
        animate();
      } );


      function init( texture ) {

        // Camera
        camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 1000 );

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

        //
        document.addEventListener( 'mousedown', onDocumentMouseDown, false );
        document.addEventListener( 'wheel', onDocumentMouseWheel, false );
        window.addEventListener( 'resize', onWindowResized, false );
      }
      function onWindowResized() {
        renderer.setSize( window.innerWidth, window.innerHeight );
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
      }

      function onDocumentMouseDown( event ) {
        event.preventDefault();
        onPointerDownPointerX = event.clientX;
        onPointerDownPointerY = event.clientY;
        onPointerDownLon = lon;
        onPointerDownLat = lat;
        document.addEventListener( 'mousemove', onDocumentMouseMove, false );
        document.addEventListener( 'mouseup', onDocumentMouseUp, false );
      }

      function onDocumentMouseMove( event ) {
        lon = ( event.clientX - onPointerDownPointerX ) * 0.1 + onPointerDownLon;
        lat = ( event.clientY - onPointerDownPointerY ) * 0.1 + onPointerDownLat;
      }

      function onDocumentMouseUp() {
        document.removeEventListener( 'mousemove', onDocumentMouseMove, false );
        document.removeEventListener( 'mouseup', onDocumentMouseUp, false );
      }

      function onDocumentMouseWheel( event ) {
        var fov = camera.fov + event.deltaY * 0.05;
        camera.fov = THREE.Math.clamp( fov, 10, 75 );
        camera.updateProjectionMatrix();
      }

      function animate() {
        requestAnimationFrame( animate );
        render();
      }

      function render() {
        var time = Date.now();
        lat = Math.max( - 85, Math.min( 85, lat ) );
        phi = THREE.Math.degToRad( 90 - lat );
        theta = THREE.Math.degToRad( lon );
        

        camera.position.x = 100 * Math.sin( phi ) * Math.cos( theta );
        camera.position.y = 100 * Math.cos( phi );
        camera.position.z = 100 * Math.sin( phi ) * Math.sin( theta );
        camera.lookAt( scene.position );
        
        backgroundMesh.position.copy( camera.position );
        renderer.render( scene, camera );
      }