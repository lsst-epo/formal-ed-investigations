## Adding Textures to Mapping the Milky Way

Clone this repository:

```
git clone https://github.com/lsst-epo/formal-ed-investigations.git
cd mapping-the-milky-way
```

To change your texture first add your image it to the 'images' folder. Then, to change the texuture file, go to js/index.js and replace

```
textureLoader.load( 'images/YOUR TEXTURE HERE', function ( texture ) {
        texture.mapping = THREE.UVMapping;
        init( texture );
        animate();
      } );
``` 

For example,

```
      var textureLoader = new THREE.TextureLoader();
      textureLoader.load( 'images/test_MW_map.png', function ( texture ) {
        texture.mapping = THREE.UVMapping;
        init( texture );
        animate();
      } );
```

You'll need a server to view this render.

```
python -m SimpleHTTPServer 9000
```

Then navigate to localhost:9000/widget.html to view the widget. 
